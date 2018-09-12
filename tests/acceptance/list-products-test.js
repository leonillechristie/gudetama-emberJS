import Service from '@ember/service';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import {
  click,
  currentURL,
  visit,
  fillIn,
  triggerKeyEvent
} from '@ember/test-helpers'

let StubMapsService = Service.extend({
  getMapElement() {
    return document.createElement('div');
  }
});

module('Acceptance | list products', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:maps', StubMapsService);
  });

  test('should list available products.', async function(assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 3 listings');
  });

  test('should show products as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/products', 'should redirect automatically');
  });

  test('should link to information about the company', async function(assert) {
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });

  test('should link to contact information', async function(assert) {
    await visit('/');
    await click(".menu-contact");
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });

  test('should show details for a specific product', async function(assert) {
    await visit('/products');
    await click(".grand-old-mansion");
    assert.equal(currentURL(), '/products/grand-old-mansion', "should navigate to show route");
    assert.ok(this.element.querySelector('.show-listing h2').textContent.includes("Grand Old Mansion"), 'should list product title');
    assert.ok(this.element.querySelector('.show-listing .description'), 'should list a description of the property');
  });

  test('should filter the list of products by city', async function(assert) {
    await visit('/');
    await fillIn('.list-filter input', 'seattle');
    await triggerKeyEvent('.list-filter input', 'keyup', 69);
    assert.equal(this.element.querySelectorAll('.results .listing').length, 1, 'should display 1 listing');
    assert.ok(this.element.querySelector('.listing .location').textContent.includes('Seattle'), 'should contain 1 listing with location Seattle');
  });
});