import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | my-helper', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders correctly for a Standalone product', async function(assert) {
    this.set('inputValue', 'Standalone');

    await render(hbs`{{product-property-type inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'Standalone');
  });

  test('it renders correctly for a Single product', async function(assert) {
    this.set('inputValue', 'Single');

    await render(hbs`{{product-property-type inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'Single');
  });
});
