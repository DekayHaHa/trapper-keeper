import React from 'react';
import { Form, mapDispatchToProps } from '../containers/Form';
import { addNote } from '../thunks/addNote';
import { shallow } from 'enzyme';

jest.mock('../thunks/addNote');
jest.mock('../containers/Form');

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

  it.skip('fires handleChange and updates state', () => {
    wrapper.setState({title: '',itemsList: []});
    const mockEvent = {target: {name: "title", value: "title"}};
    wrapper.find('input').simulate('change', mockEvent);
    expect(wrapper.state()).toEqual({title: 'title',itemsList: []});
  });

  describe('mapDispatchToProps', () => {
    it.skip('calls dispatch with a addNote action', async () => {
      const mockDispatch = jest.fn();
      const mockItem = {title: "title", itemsList: []}
      const actionToDispatch = addNote(mockItem);
      
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addNote(mockItem);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});