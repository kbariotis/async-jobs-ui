import React from 'react';

class Documentation extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <h2>What is it</h2>
        <h2>API</h2>
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingOne">
              <h4 className="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  POST /jobs
                </a>
              </h4>
            </div>
            <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
              <div className="panel-heading">
                Create a new Job
              </div>
              <div className="panel-body">
                <pre>
                  {JSON.stringify({
                    label: "dsadsad",
                    percent: 20
                  }, null, 2)}
                </pre>
              </div>
              <div className="panel-footer">
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingTwo">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  PUT /jobs/:id
                </a>
              </h4>
            </div>
            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
              <div className="panel-body">
                <div className="panel-heading">
                  Update an existing Job
                </div>
                <div className="panel-body">
                  <pre>
                    {JSON.stringify({
                      percent: 20
                    }, null, 2)}
                  </pre>
                </div>
                <div className="panel-footer">
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingThree">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  DELETE /jobs
                </a>
              </h4>
            </div>
            <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
              <div className="panel-body">
                <div className="panel-heading">
                  Stop a Job
                </div>
                <div className="panel-body"></div>
                <div className="panel-footer">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Documentation;
