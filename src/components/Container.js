import React from 'react';
import { connect } from 'react-redux';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';
import { bindActionCreators } from 'redux';
import { reorderTask } from '../actions';

class Container extends React.Component {


  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = this.props.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);

    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds
    }

    this.props.reorderTask(newColumn);

    // Dispatch an action here to take the new state of the columns
    // and update it

    // const newState = {
    //   ...this.state,
    //   columns: {
    //     ...this.state.columns,
    //     [newColumn.id]: newColumn
    //   }
    // }
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {
          this.props.columnOrder.map((columnId) => {
          const column = this.props.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.props.tasks[taskId]);
          return <Column key={column.id} column={column} tasks={tasks} />})
        }
      </DragDropContext>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ reorderTask: reorderTask}, dispatch);
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    columns: state.columns,
    columnOrder: state.columnOrder
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
