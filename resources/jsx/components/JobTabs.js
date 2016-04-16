'use strict';

import React from 'react';
import JobStore from '../stores/JobStore';
import ActiveJobComponent from './ActiveJob';
import CompletedJobComponent from './CompletedJob';

class JobList extends React.Component {

  constructor() {
    super();

    this.state = {
      allJobs: JobStore.getAll()
    };
  }

  componentDidMount() {
    JobStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    JobStore.removeChangeListener(this._onChange.bind(this));
  }

  render() {
    let activeJobsNodes = Object.keys(this.state.allJobs).map((id) => {
      if (this.state.allJobs[id].active === true) {
        return <ActiveJobComponent {...this.state.allJobs[id]} key={id}/>
      }
    });
    let completedJobsNodes = Object.keys(this.state.allJobs).map((id) => {
      if (this.state.allJobs[id].active === false) {
        return <CompletedJobComponent {...this.state.allJobs[id]} key={id}/>
      }
    });
    return (
      <div>
        <div className="top-content">
          <div className="container">
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active">
                <a href="#active" aria-controls="home" role="tab" data-toggle="tab">Active</a>
              </li>
              <li role="presentation">
                <a href="#completed" aria-controls="profile" role="tab" data-toggle="tab">Completed</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-content">
          <div className="container">
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="active">
                <ul className="list-group">
                  {activeJobsNodes}
                </ul>
              </div>
              <div role="tabpanel" className="tab-pane" id="completed">
                <ul className="list-group">
                  {completedJobsNodes}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _onChange() {
    this.setState({allJobs: JobStore.getAll()});
  }
}

export default JobList;
