jest.unmock('../resources/jsx/components/ActiveJob');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ActiveJob from '../resources/jsx/components/ActiveJob';

describe('ActiveJob Component', () => {

  let job = {
    id: 1,
    label: 'A long running job',
    active: true,
    failed: false,
    percent: 20
  };
  const activeJob = TestUtils.renderIntoDocument(
    <ActiveJob {...job} />
  );

  it('outputs the Job title', () => {

    const node = TestUtils.findRenderedDOMComponentWithTag(activeJob, 'h5');
    expect(node.textContent).toEqual('A long running job');
  });

  it('outputs the Job ID', () => {

    const node = TestUtils.scryRenderedDOMComponentsWithTag(activeJob, 'small');
    expect(node[0].textContent).toEqual('ID: #' + job.id);
  });

  xit('outputs the Created Date', () => {

    const node = TestUtils.scryRenderedDOMComponentsWithTag(activeJob, 'small');
  });

  xit('outputs the Updated Date', () => {

    const node = TestUtils.scryRenderedDOMComponentsWithTag(activeJob, 'small');
  });
});
