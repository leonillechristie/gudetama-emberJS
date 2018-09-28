import Ember from 'ember';
import Application from '@ember/application';

export default Ember.Service.extend({
    store: Ember.inject.service(),
    user: null,
    isLoggedIn: false,
    init() {
      this._super(...arguments);
      // app.deferReadiness();
      this.loadCurrentUser(); //if you are not calling loadCurrentUser method then this will ensure username and isLoggedIn set properly
        

    },
    loadCurrentUser() {
      return new Promise((resolve, reject) => {
          var accessToken = localStorage.getItem('access_token');
          var refreshToken = localStorage.getItem('refresh_token');
          var vm = this;
          if (!!accessToken && accessToken.length > 0) {
          $.ajax({
              url: 'http://gudetama.local:8000/api/v1/me',
              headers: {
                "Authorization": "Bearer " + accessToken
              },
              success: function(response) {
                  vm.set('user', response.data);
                  vm.set('isLoggedIn', true);
                  resolve();
              },
              error: function() {
                $.ajax({
                  url: 'http://gudetama.local:8000/oauth/token',
                    method: 'POST',
                    data: {
                      grant_type: 'refresh_token',
                      client_id: 2,
                      client_secret: 'iMupCxM9eatJ963MUOoBp9uf5NAPfS3uZzebmp1I',
                      refresh_token: refreshToken,
                      scope: '*'
                    },
                    contentType: "application/x-www-form-urlencoded",
                    headers: {
                      'Accept': 'application/json'
                    },
                    success: function(response) {
                      localStorage.setItem('access_token', response.access_token);
                      localStorage.setItem('refresh_token', response.refresh_token);
                      resolve();
                    },
                    error: function() {
                      reject();
                    }
                });
              }
          });
        } else {
          reject();
        }
      });
    // app.advanceReadiness(); 
  }
});