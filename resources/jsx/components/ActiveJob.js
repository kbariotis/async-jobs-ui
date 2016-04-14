import React from 'react';
import moment from 'moment';

class Job extends React.Component {

  constructor() {
    super();
  }

  render() {
    let createdAt = moment(this.props.createdAt).format('MMMM Do YYYY, h:mm:ss a');
    let updatedAt = moment(this.props.updatedAt).format('MMMM Do YYYY, h:mm:ss a');
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-sm-6">
            <h5>{this.props.label}</h5>
            <p>
              <small>
                <b>ID: </b>#{this.props.id}
              </small>
            </p>
          </div>
          <div className="col-sm-6 text-right">
            <p>
              <small>
                <b>Created at:</b> {createdAt}
              </small>
            </p>
            <p>
              <small>
                <b>Updated at:</b> {updatedAt}
              </small>
            </p>
          </div>
        </div>
        <div className="progress">
          <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{
            width: this.props.percent + '%'
          }}>
            {this.props.percent + '%'}
          </div>
        </div>
      </li>
    );
  }

};

export default Job;
