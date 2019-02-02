import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme';
import React from 'react';
import Root from 'Root';


let component;

beforeEach(() => {
  component = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
  component.unmount();
});


it('has a text area and a button', () => {
  expect(component.find('textarea').length).toEqual(1);
  expect(component.find('button').length).toEqual(1);
});

describe('the text area ', () => {

  let testComment = 'test comment';

  beforeEach(() => {
    component.find('textarea').simulate('change', { target: { value: testComment } });
    component.update();
  });

  it('has a text area that users can type in', () => {
    expect(component.find('textarea').prop('value')).toEqual(testComment);
  });

  it('form is submitted, textarea gets emptied', () => {
    component.find('textarea').simulate('submit');
    component.update();
    expect(component.find('textarea').prop('value')).toEqual('');
  });

});
