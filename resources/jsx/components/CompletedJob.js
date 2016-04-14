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
                <b>Status:</b> {this.props.failed === true ? 'Failed' : 'Success'}
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
      </li>
    );
  }

};

export default Job;
