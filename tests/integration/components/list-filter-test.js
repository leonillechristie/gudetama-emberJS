import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, triggerKeyEvent, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve } from 'rsvp';

const ITEMS = [{title: 'Gudetama Meh'}, {title: 'Gudetama Butt'}, {title: 'Sleepy Gudetama'}];
const FILTERED_ITEMS = [{title: 'Singapore'}];

module('Integration | Component | product-listing', function(hooks) {
  setupRenderingTest(hooks);

  test('should update with matching listings', async function (assert) {
    this.set('filterByTitle', (val) =>  {
      if (val === '') {
        return resolve({
          query: val,
          results: ITEMS });
      } else {
        return resolve({
          query: val,
          results: FILTERED_ITEMS });
      }
    });

    await render(hbs`
      {{#list-filter filter=(action filterByTitle) as |results|}}
        <ul>
        {{#each results as |item|}}
          <li class="title">
            {{item.title}}
          </li>
        {{/each}}
        </ul>
      {{/list-filter}}
    `);

    await fillIn(this.element.querySelector('.list-filter input'),'s');
    await triggerKeyEvent(this.element.querySelector('.list-filter input'), "keyup", 83);

    return settled().then(() => {
      assert.equal(this.element.querySelectorAll('.title').length, 1, 'One result returned');
      assert.equal(this.element.querySelector('.title').textContent.trim(), 'Singapore');
    });
  });

});
