import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapDispatchToProps, mapStateToProps } from '../containers/App';
import { shallow } from 'enzyme';
import { getNotes } from '../thunks/getNotes';
import CreateNote from '../containers/CreateNote';

jest.mock('../thunks/getNotes');
jest.mock('../containers/CreateNote');

describe('App', () => {
  let wrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    const mockNotes = [
      { id: 1, title: 'title 1' },
      { id: 2, title: 'title 2' },
    ]
    wrapper = shallow(
      <App notes={mockNotes} getNotes={mockFn} />
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

  describe('findNote', () => {
    it.skip('should find note to render an instance of CreateNote', () => {
      const mockMatch = { params: { id: 2 } }
      const results = wrapper.instance().findNote(mockMatch)
      // discuss changing the return value of findNote to the note and not the
      // component.
      expect(results).toBeInstanceOf(CreateNote)
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