import React from 'react';
import { PageNotFound } from '../components/PageNotFound';
import { shallow } from 'enzyme';

describe('PageNotFound', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PageNotFound />);
  });

  it('should match snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});