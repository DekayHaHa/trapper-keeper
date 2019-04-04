import React from 'react';
import { NotesContainer, mapStateToProps } from '../containers/NotesContainer';
import { shallow } from 'enzyme';

describe('NotesContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <NotesContainer notes={['note', 'note']}/>
    );
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('returns an object with notes', () => {
      const mockState = {
        notes: ['1', '2', '3'],
        error: 'error',
        other: 'other'
      }
      const expectedState = {
        notes: ['1', '2', '3'],
        error: 'error'
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    });
  });
});