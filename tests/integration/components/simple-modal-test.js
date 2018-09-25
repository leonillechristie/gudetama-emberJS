import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | simple-modal', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{simple-modal}}`);
    assert.equal(this.element.textContent.trim(), '');
    await render(hbs`
      {{#simple-modal}}
        template block text
      {{/simple-modal}}
    `);
    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
