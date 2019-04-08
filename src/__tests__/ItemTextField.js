import React from 'react';
import { ItemTextField } from '../containers/ItemTextField';
import { shallow } from 'enzyme';

describe('ItemTextField', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(
      <ItemTextField />);
	})

	it('matches snapshot', () => {
		expect(wrapper).toMatchSnapshot();
  });
  
  it('should have default states', () => {
    expect(wrapper.state()).toEqual({
      text: '',
      isComplete: false,
      id: 0
    });
  });

  it('should set state if text props are passed', () => {
    wrapper = shallow(
      <ItemTextField 
        text={'hello'}
        isComplete={false}
        id={2}
      />
    )

    wrapper.instance().componentWillMount();
    expect(wrapper.state()).toEqual({
      text: 'hello',
      isComplete: false,
      id: 2
    })
  });

  it('should update state when handleChange is fired', () => {
    const mockedEvent = { target: {name: 'text', value: 'thisValue'} }
    wrapper.find('#item').simulate('change', mockedEvent);

    expect(wrapper.state('text')).toEqual('thisValue');
  });

  describe('sendListItem', () => {
    it('should update state if addListItem is part of props', () => {
      let mockFn = jest.fn();
      wrapper = shallow(
        <ItemTextField 
          addListItem={mockFn} 
      />)

      wrapper.find('#item').simulate('blur');
      expect(mockFn).toHaveBeenCalled();
      expect(wrapper.state('text')).toEqual('');
    });

    it('should call updateItem addListItem is not a prop', () => {
      let mockFn = jest.fn();
      wrapper = shallow(
        <ItemTextField 
          updateItem={mockFn} 
      />)

      wrapper.find('#item').simulate('blur');
      expect(mockFn).toHaveBeenCalled();
    });
  });

  it('should fire catchKey on keyDown', () => {
    let mockFn = jest.fn();
    wrapper = shallow(
      <ItemTextField 
        updateItem={mockFn} 
    />)
    wrapper.instance().sendListItem = jest.fn()
    const mockedEvent = { keyCode: 13 }
    wrapper.find('#item').simulate('keyDown', mockedEvent);
    expect(wrapper.instance().sendListItem).toHaveBeenCalled();
  });
});