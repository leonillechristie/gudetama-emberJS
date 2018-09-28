import Route from '@ember/routing/route';

export default Route.extend({
	currentSession: Ember.inject.service(),
  user: null,
  beforeModel: function(transition){
      var vm = this;
      return this.get('currentSession').loadCurrentUser().then((result) => {
          if (transition.targetName !== 'login') {
            var session = this.get('currentSession');
            vm.set('user', session.user);

            if (!session.isLoggedIn) {
              this.transitionTo('login');
            }
          }
      })
  },
	model() {
		return this.store.findAll('product');
	}
});