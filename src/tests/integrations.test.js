import App from 'components/App/App';
import { mount } from 'enzyme';
import moxios from 'moxios';
import React from 'react';
import Root from 'Root';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Comment1' }, { name: 'Comment2' }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  const component = mount(
    <Root>
      <App />
    </Root>
  );

  component.find('.fetch-comments').simulate('click');

  moxios.wait(() => {
    component.update();
    expect(component.find('li').length).toBeGreaterThan(1);
    done();
    component.unmount();
  });

});
