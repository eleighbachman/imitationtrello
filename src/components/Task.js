import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateName } from '../actions';

const TaskContainer = styled.div`
  border: 1px solid ${props => (props.isDragging ? '#f96a6a' :'lightgrey')};
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? '#f96a6a' : 'white')};
  color: ${props => (props.isDragging ? 'white' : 'black')};
`;

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      taskName: this.props.task.content
    }
  }

  handleSubmit = (e, id) => {
    e.preventDefault();
    this.blurHandle();
    let collection = [this.state.taskName, id];
    this.props.updateName(collection);
  }

  handleClick = () => {
    this.setState({
      isEditing: true
    })
  }

  blurHandle = () => {
    this.setState({
      taskName: this.state.taskName,
      isEditing: false
    })
  }

  handleNameChange = (e) => {
    this.setState({
      taskName: e.target.value
    })
  }
  render() {
    return(
      <Draggable draggableId={this.props.task.id} index={this.props.index}>

        {(provided, snapshot) => (
          <TaskContainer
            onClick={this.handleClick}
            innerRef={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}>

            {this.state.isEditing?
              <form onSubmit={(e)=>this.handleSubmit(e, this.props.task.id)}>
                <input autoFocus type="text" onBlur={this.blurHandle} onChange={(e) => this.handleNameChange(e)} value={this.state.taskName} />
              </form>
               : <span>{this.state.taskName}</span>}


            </TaskContainer>
        )}


      </Draggable>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateName: updateName
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Task);
