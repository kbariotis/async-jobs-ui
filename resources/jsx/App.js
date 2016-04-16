'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import JobTabs from './components/JobTabs';
import Documentation from './components/Documentation';

class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">JOBS.io</Link>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className={this.props.history.isActive('/jobs') ? 'active' : ''}>
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li className={this.props.history.isActive('/api') ? 'active' : ''}>
                  <Link to="/api">API</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route name="App" path="/jobs" component={JobTabs}/>
      <Route name="Docs" path="/api" component={Documentation}/>
    </Route>
  </Router>
), document.getElementById('content'))
