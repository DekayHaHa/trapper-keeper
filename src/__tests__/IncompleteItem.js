import React from 'react';
import { IncompleteItem } from '../components/IncompleteItem';
import { shallow } from 'enzyme';

describe('IncompleteItem', () => {
  let wrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    wrapper = shallow(<IncompleteItem text={'text'} id={2} toggle={mockFn}/>);
  });

  it('should match snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls toggle when clicked', () => {
    const mockedEvent = { target: {} }
    wrapper.find('button').simulate('click', mockedEvent);
    expect(mockFn).toHaveBeenCalledWith(2);
  });
})