import React from 'react';

class Task extends React.Component {

  constructor () {
    super();
  }
  render() {
    return (
      <li className="list-group-item">
        <div className="progress">
          <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{
            width: this.props.percent + '%'
          }}>
            {this.props.label}
          </div>
        </div>
      </li>
    );
  }

};

export default Task;
