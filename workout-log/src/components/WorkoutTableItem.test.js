/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';

import WorkoutTableItem from './WorkoutTableItem';

import { render } from '@testing-library/react';

describe('WorkoutTableItem', () => {
  const props = {
    uuid: '00001234',
    hours: '2',
    type: 'bicycle',
    date: '2019-02-03',
    onDestroy: () => {},
  };

  it('matches snapshot', () => {
    const component = render(
      <table>
        <tbody>
          <WorkoutTableItem {...props} />
        </tbody>
      </table>,
    );

    expect(component.container).toMatchSnapshot();
  });

  it.todo('triggers onDestroy action when clicking on button');
});
