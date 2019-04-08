import React from 'react';
import { NoteCard, mapDispatchToProps } from '../components/NoteCard';
import { shallow } from 'enzyme';
import { deleteNote } from '../thunks/deleteNote';

jest.mock('../thunks/deleteNote');

describe('NoteCard', () => {
  let mockItemsList;
  let wrapper;
  let mockFn;
  let mockClasses;
  let mockNote;

  beforeEach(() => {
    mockClasses = { title: 'im an object' }
    mockFn = jest.fn();
    mockNote = { title: 'title 1', itemsList: mockItemsList }
    mockItemsList = [{ text: "item", isComplete: false, id: 1554329952339 }]
    wrapper = shallow(<NoteCard classes={mockClasses} title={'title'} note={mockNote} deleteNote={mockFn} />);
  });

  it('should match snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should invoke deleteNote on removeNote', () => {
    wrapper.instance().removeNote();
    expect(mockFn).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a deleteNote action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = deleteNote(2);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.deleteNote(2);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  });
});