import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, triggerKeyEvent, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve } from 'rsvp';

const ITEMS = [{name: 'John Doe'}, {name: 'Jane Doe'}, {name: 'Leonille Christie'}];
const FILTERED_ITEMS = [{name: 'Leonille Christie'}];

module('Integration | Component | rental-listing', function(hooks) {
  setupRenderingTest(hooks);

  test('should initially load all listings', async function (assert) {
    // we want our actions to return promises,
    //since they are potentially fetching data asynchronously
    this.set('filterByName', () => resolve({ results: ITEMS }));

    // with an integration test,
    // you can set up and use your component in the same way your application
    // will use it.
    await render(hbs`
      {{#list-filter filter=(action filterByName) as |results|}}
        <ul>
        {{#each results as |item|}}
          <li class="name">
            {{item.name}}
          </li>
        {{/each}}
        </ul>
      {{/list-filter}}
    `);
  
  return settled().then(() => {
      assert.equal(this.element.querySelectorAll('.name').length, 3);
      assert.equal(this.element.querySelector('.name').textContent.trim(), 'Leonille Christie');
    });
  });
});



