jest.unmock('../resources/jsx/components/CompletedJob');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CompletedJob from '../resources/jsx/components/CompletedJob';

describe('CompletedJob Component', () => {

  let job = {
    id: 2,
    label: 'A long running job',
    active: false,
    failed: false,
    percent: 100
  };
  const activeJob = TestUtils.renderIntoDocument(
    <CompletedJob {...job} />
  );

  it('outputs the Job title', () => {

    const node = TestUtils.findRenderedDOMComponentWithTag(activeJob, 'h5');
    expect(node.textContent).toEqual('A long running job');
  });

  it('outputs the Job Status', () => {

    const node = TestUtils.scryRenderedDOMComponentsWithTag(activeJob, 'small');
    expect(node[0].textContent).toEqual('Status: Success');
  });

  xit('outputs the Created Date', () => {

    const node = TestUtils.scryRenderedDOMComponentsWithTag(activeJob, 'small');
  });

  xit('outputs the Updated Date', () => {

    const node = TestUtils.scryRenderedDOMComponentsWithTag(activeJob, 'small');
  });
});
