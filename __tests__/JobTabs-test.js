jest.unmock('../resources/jsx/components/JobTabs');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import JobTabs from '../resources/jsx/components/JobTabs';
import JobStore from '../resources/jsx/stores/JobStore';

describe('JobTabs Component', () => {

  let job = {
    id: 2,
    label: 'A long running job',
    active: false,
    failed: false,
    percent: 100
  };
  const component = TestUtils.renderIntoDocument(
    <JobTabs/>
  );

  xit('outputs the Job title', () => {

    const node = TestUtils.findRenderedDOMComponentWithTag(component, 'h5');
    expect(node.textContent).toEqual('A long running job');
  });
});
