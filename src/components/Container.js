import React from 'react';
import { connect } from 'react-redux';
import Column from './Column';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { bindActionCreators } from 'redux';
import { reorderTask, reorderedTaskNewCol, newColumnOrder, addList } from '../actions';
import styled from 'styled-components';
import _ from 'lodash';

const Outline = styled.div`
  display:flex;
  width: 90%;
  margin: auto;
  justify-content: center;
`;
class Container extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        newList: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      newList: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.newList.replace(/\s/g, '').length) {
      let newId = "column-" + _.size(this.props.columns);
      let newName = this.state.newList;
      let combo = [newId, newName];
      this.props.addList(combo);
      this.setState({
        newList: ''
      })
    }
  }


  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'column') {
      const newColumnOrdering = Array.from(this.props.columnOrder);
      newColumnOrdering.splice(source.index, 1);
      newColumnOrdering.splice(destination.index, 0, draggableId);

      return this.props.newColumnOrder(newColumnOrdering);


    }


    const start = this.props.columns[source.droppableId];
    const finish = this.props.columns[destination.droppableId];

    if(start === finish) {
      const newTaskIds = Array.from(start.taskIds);

      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      }

      this.props.reorderTask(newColumn);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    }

    const combine = [newStart, newFinish];

    this.props.reorderedTaskNewCol(combine);



  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
        { (provided) => (
          <Outline {...provided.droppableProps} innerRef={provided.innerRef}>

          {
            this.props.columnOrder.map((columnId, index) => {
            const column = this.props.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.props.tasks[taskId]);
            return <Column key={column.id} index={index} column={column} tasks={tasks} />})
          }

          {this.props.columnOrder.length < 4 ? <div className="newCol">
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <input className="newColInput" value={this.state.newList} onFocus={this.handleFocus} onChange={(e) => this.handleChange(e)} maxLength="15" placeholder="Add new list" type="text" />
            </form>
          </div> : null}
          


          </Outline>
        )}
        </Droppable>
      </DragDropContext>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    reorderTask: reorderTask,
    reorderedTaskNewCol: reorderedTaskNewCol,
    newColumnOrder: newColumnOrder,
    addList: addList
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    columns: state.columns,
    columnOrder: state.columnOrder
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
