import React from 'react';
import { Form, mapDispatchToProps } from '../containers/Form';
import { addNote } from '../thunks/addNote';
import { shallow } from 'enzyme';

jest.mock('../thunks/addNote');

describe('Form', () => {
  let wrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();

    wrapper = shallow(
      <Form addNote={mockFn}/>
    );
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    it.only('calls dispatch with a addNote action', async () => {
      const mockDispatch = jest.fn();
      const mockItem = {title: "title", itemsList: []}
      const actionToDispatch = addNote(mockItem);
      
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addNote(mockItem);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});