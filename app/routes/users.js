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
	// beforeModel() {
	// 	var accessToken = localStorage.getItem('access_token');
	// 	var refreshToken = localStorage.getItem('refresh_token');

	// 	if (accessToken) {
	// 		$.ajax({
	// 		    url: 'http://gudetama.local:8000/api/v1/me',
	// 		    headers: {
	// 		    	"Authorization": "Bearer " + accessToken
	// 		    },
	// 		    success: function(response) {
			    	
	// 		    }
	// 		});
	// 	} else {

	// 	}
	// },
  model() {
    return this.store.findAll('user');
  }
});