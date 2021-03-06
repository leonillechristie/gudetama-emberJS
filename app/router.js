import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('products', function() {
    this.route('show', { path: '/:product_id' });
    this.route('edit', { path: '/:user_id/edit'});
    this.route('update', { path: '/:product_id/edit' });
  });
  this.route('landing');
  this.route('cart');
  this.route('users', function() {
    this.route('show', { path: '/:user_id' });
    this.route('edit', { path: '/:user_id/edit'});
    this.route('update', { path: '/:user_id/edit'});
    this.route('create', { path: '/create' });
  });
});

export default Router;