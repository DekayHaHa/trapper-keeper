import React from 'react';
import { NoteItems } from '../components/NoteItems';
import { shallow } from 'enzyme';

describe('NoteItems', () => {
  let wrapper;
  let noteItems = ['note', 'note', 'note']
  let classes = {divider: 'background', strikethrough: 'textDecoration'}

  beforeEach(() => {
    wrapper = shallow(<NoteItems noteItems={noteItems} classes={classes}/>);
  });

  it('should match snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});