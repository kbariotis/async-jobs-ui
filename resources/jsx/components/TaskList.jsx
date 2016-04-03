import React from 'react';
import Task from './Task';
import TaskStore from '../stores/TaskStore';

class TaskList extends React.Component {

    constructor () {
      super();

      this.state = {
        allTasks: TaskStore.getAll()
      };
    }

    componentDidMount() {
       TaskStore.addChangeListener(this._onChange);
     }

     componentWillUnmount() {
       TaskStore.removeChangeListener(this._onChange);
     }

    render() {
      var tasksNodes = Object.keys(this.state.allTasks).map((task) => {
        return (
          <Task {...this.state.allTasks[task]} key={this.state.allTasks[task].id}/>
        );
      });
      return (
          <div className="jumbotron">
            <ul className="list-group">
              {tasksNodes}
            </ul>
          </div>
      );
    }

    /**
      * Event handler for 'change' events coming from the TodoStore
      */
     _onChange () {
       this.setState({
         allTasks: TaskStore.getAll()
       });
     }
};

export default TaskList;
