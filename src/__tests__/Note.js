import React from 'react';
import { Note, mapDispatchToProps } from '../components/Note';
import { shallow } from 'enzyme';
import { deleteNote } from '../thunks/deleteNote';

jest.mock('../thunks/deleteNote');

describe('Note', () => {
  let mockItemsList;
  let wrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    mockItemsList = [{text: "item", isComplete: false, id: 1554329952339}]
    wrapper = shallow(<Note title={'title'} itemsList={mockItemsList} deleteNote={mockFn}/>);
  });

  it('should match snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke deleteNote on removeNote', () => {
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