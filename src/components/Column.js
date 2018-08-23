import React from 'react';
import styled from 'styled-components';
import Task from './Task';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 15px;
  border-radius: 5px;
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: #f96a6a;
  border: 2px solid #f96a6a;
`;

const Title = styled.h3`
  padding: 8px;
  font-family: 'Lobster', cursive;
  letter-spacing: 1px;
  font-weight: normal;
  color: #fff;
  border-top: 2px solid #fd8383;
  border-left: 2px solid #fd8383;
  border-bottom: 4px solid #dd5a5a;
  border-radius: 3px;
  margin: 0px 0px 0px 0px;
`;

const TaskList = styled.div`
  padding: 8px;
  background-color: ${props => (props.isDraggingOver ? '#ccc' : '#eee')};
  flex-grow: 1;
`;



export default class Column extends React.Component {

  renderTasks(tasks) {
    let arr = Array.from(tasks);
    return arr.map((task, index) => {
      return (
        <Task key={task.id} index={index} task={task} />
      )
    })
  }
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
      {(provided) => (
        <Container {...provided.draggableProps} innerRef={provided.innerRef}>
          <Title {...provided.dragHandleProps}>{this.props.column.title}</Title>
          <Droppable droppableId={this.props.column.id} type="task">
          {(provided, snapshot) => (
            <TaskList innerRef={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
              {this.renderTasks(this.props.tasks)}
              {provided.placeholder}
            </TaskList>
          )}
          </Droppable>
          <div>Add Item</div>
        </Container>
      )}
      </Draggable>
    );
  }
}
