import CommentList from 'components/CommentList/CommentList';
import { mount } from 'enzyme';
import React from 'react';
import Root from 'Root';


let component;

beforeEach(() => {
  const initialState = {
    comments: ['Comment1', 'Comment2']
  };
  component = mount(
    <Root initialState={ initialState }>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  component.unmount();
});


it('creates one li per comment', () => {
  expect(component.find('li').length).toBeGreaterThan(1);
  expect(component.find('li').length).toEqual(2);
});

it('shows the test for each comment', () => {
  expect(component.render().text()).toContain('Comment1');
  expect(component.render().text()).toContain('Comment2');
});

