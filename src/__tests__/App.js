import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapDispatchToProps, mapStateToProps } from '../containers/App';
import { shallow } from 'enzyme';
import { getNotes } from '../thunks/getNotes';

jest.mock('../thunks/getNotes');

describe('App', () => {
  let wrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();

    wrapper = shallow(
      <App getNotes={mockFn}/>
    );
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    it('should call getNotes when mounted', () => {
      wrapper.instance().componentDidMount();
      expect(mockFn).toHaveBeenCalled();
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a getNotes action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getNotes();

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getNotes();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

  describe('mapStateToProps', () => {
    it('returns an object with notes', () => {
      const mockState = {
        notes: ['1', '2', '3'],
        error: 'error'
      }
      const expectedState = {
        notes: ['1', '2', '3']
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    });
  });
});