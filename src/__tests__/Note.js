import React from 'react';
import { Note } from '../components/Note';
import { shallow } from 'enzyme';

describe('Note', () => {
  it('should match snapshot with all data passed in', () => {
    const mockItemsList = [{text: "item", isComplete: false, id: 1554329952339}]
    let wrapper = shallow(<Note title={'title'} itemsList={mockItemsList} />);
    expect(wrapper).toMatchSnapshot();
  });
})