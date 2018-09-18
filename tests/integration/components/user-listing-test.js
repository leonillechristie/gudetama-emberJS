import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | user-listing', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.user = EmberObject.create({
      id: '1',
      name: 'test-name',
      email: 'test-email',
      password: 'test-password',
    });
  });

  test('should display user details', async function(assert) {
    await render(hbs`{{user-listing user=user}}`);
    assert.equal(this.element.querySelector('.listing h3').textContent.trim(), 'test-title', 'Title: test-title');
    assert.equal(this.element.querySelector('.listing .id').textContent.trim(), 'id: test-id', 'id: test-id');
  });

});
