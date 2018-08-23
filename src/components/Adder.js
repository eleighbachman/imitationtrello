import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTask } from '../actions';
import _ from 'lodash';

class Adder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask : ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.newTask.replace(/\s/g, '').length) {
      const currentCol = this.props.columnId;
      const currentTask = this.state.newTask;
      let currLength = _.size(this.props.tasks);
      let newId = 'task-' + currLength;
      const colTask = {currentCol, currentTask, newId}
      this.props.addTask(colTask);
      this.setState({
        newTask: ''
      })
    }
  }
  handleChange = (e) => {
    this.setState({
      newTask : e.target.value
    })
  }
  render() {
    return(
      <div className="addTask">
        <form onSubmit={this.handleSubmit}>
          <input type="text" maxLength="25" onChange={(e) => this.handleChange(e)} value={this.state.newTask}/>
          <button type="submit"><span className="addBtn">+</span></button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTask : addTask
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Adder);
