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
  });
  this.route('landing');
  this.route('cart');
});

export default Router;