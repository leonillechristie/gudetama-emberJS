import Route from '@ember/routing/route';

export default Route.extend({
	beforeModel() {
		var accessToken = localStorage.getItem('access_token');
		var refreshToken = localStorage.getItem('refresh_token');

		if (accessToken) {
			$.ajax({
			    url: 'http://gudetama.local:8000/api/v1/me',
			    headers: {
			    	"Authorization": "Bearer " + accessToken
			    },
			    success: function(response) {
			    	
			    }
			});
		} else {

		}
	},
  model() {
    return this.store.findAll('user');
  }
});