import React from 'react';
import { Header } from '../components/Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});