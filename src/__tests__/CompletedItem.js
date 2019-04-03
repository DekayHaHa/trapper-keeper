import React from 'react';
import { CompletedItem } from '../components/CompletedItem';
import { shallow } from 'enzyme';

describe('CompletedItem', () => {
  let wrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    wrapper = shallow(<CompletedItem text={'text'} id={2} toggle={mockFn}/>);
  });

  it('should match snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls toggle when clicked', () => {
    const mockedEvent = { target: {} }
    wrapper.find('button').simulate('click', mockedEvent);
    expect(mockFn).toHaveBeenCalledWith(2);
  });
});