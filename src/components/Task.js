import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const TaskContainer = styled.div`
  border: 1px solid ${props => (props.isDragging ? '#f96a6a' :'lightgrey')};
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? '#f96a6a' : 'white')};
  color: ${props => (props.isDragging ? 'white' : 'black')};
`;

export default class Task extends React.Component {
  render() {
    return(
      <Draggable draggableId={this.props.task.id} index={this.props.index}>

        {(provided, snapshot) => (
          <TaskContainer
          innerRef={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >{this.props.task.content}</TaskContainer>
        )}


      </Draggable>
    )
  }
}
