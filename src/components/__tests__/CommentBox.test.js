import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';

describe('CommentBox Component Test', () => {

  let component;

  beforeEach(() => {
    component = mount(<CommentBox />);
  });

  afterEach(() => {
    component.unmount();
  });


  it('has a text area and a button', () => {
    expect(component.find('textarea').length).toEqual(1);
    expect(component.find('button').length).toEqual(1);
  });

  it('has a text area that users can type in', () => {
    const testComment = 'test comment';
    component.find('textarea').simulate('change', { target: { value: testComment } });
    component.update();
    expect(component.find('textarea').prop('value')).toEqual(testComment);
  });

});
