import React from 'react';
import styled from 'styled-components';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;

const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  padding: 8px;
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
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
        {(provided) => (
          <TaskList innerRef={provided.innerRef} {...provided.droppableProps}>
            {this.renderTasks(this.props.tasks)}
            {provided.placeholder}
          </TaskList>
        )}
        </Droppable>
      </Container>
    );
  }
}
