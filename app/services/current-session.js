import Ember from 'ember';
// import Application from '@ember/application';

export default Ember.Service.extend({

    store: Ember.inject.service(),
    user: null,
    isLoggedIn: false,
    init() {
      this._super(...arguments);
      // app.deferReadiness();
      this.loadCurrentUser(); //if you are not calling loadCurrentUser method then this will ensure username and isLoggedIn set properly
    },

// export function initialize(container, application) {
//   application.deferReadiness();
//   var session = container.lookup('service:session');
//   if (session.hasSession()) {
//     var store = Ember.inject.service()
//     var accessToken = localStorage.getItem('access_token');
//     var refreshToken = localStorage.getItem('refresh_token');
//     var vm = this;
//     if (!!accessToken && accessToken.length > 0) {
//     $.ajax({
//       url: 'http://gudetama.local:8000/api/v1/me',
//       headers: {
//         "Authorization": "Bearer " + accessToken
//       },
//       success: function(response) {
//           vm.set('user', response.data);
//           vm.set('isLoggedIn', true);
//           resolve();
//       },
//       error: function() {
//         $.ajax({
//           url: 'http://gudetama.local:8000/oauth/token',
//             method: 'POST',
//             data: {
//               grant_type: 'refresh_token',
//               client_id: 2,
//               client_secret: 'iMupCxM9eatJ963MUOoBp9uf5NAPfS3uZzebmp1I',
//               refresh_token: refreshToken,
//               scope: '*'
//             },
//             contentType: "application/x-www-form-urlencoded",
//             headers: {
//               'Accept': 'application/json'
//             },
//             success: function(response) {
//               localStorage.setItem('access_token', response.access_token);
//               localStorage.setItem('refresh_token', response.refresh_token);
//               // application.advanceReadiness();
//               resolve();
//             },
//             error: function() {
//               reject();
//             }
//         });

//         session.preloadApplication();
//         application.advanceReadiness();
//       },
//       function() {
//         // Kill sesion object
//         session.set('user', '');
//         session.set('isLoggedIn', false);
//         application.advanceReadiness();
//       }
//     });
//    }
//  } else {
//     application.advanceReadiness();
//  }
// }

// export default Ember.Application.initializer({
//     name: 'loadUser',
//     after: 'store',
//     initialize: function(container, app) {
//       // modify this following to suit how you're determining the account
//       var accessToken = localStorage.getItem('access_token');
//         var refreshToken = localStorage.getItem('refresh_token');
//         var vm = this;
//         if (!!accessToken && accessToken.length > 0) {
//         $.ajax({
//           url: 'http://gudetama.local:8000/api/v1/me',
//           headers: {
//             "Authorization": "Bearer " + accessToken
//           },
//           success: function(response) {
//               vm.set('user', response.data);
//               vm.set('isLoggedIn', true);
//               resolve();
//           },
//           error: function() {
//             $.ajax({
//               url: 'http://gudetama.local:8000/oauth/token',
//                 method: 'POST',
//                 data: {
//                   grant_type: 'refresh_token',
//                   client_id: 2,
//                   client_secret: 'iMupCxM9eatJ963MUOoBp9uf5NAPfS3uZzebmp1I',
//                   refresh_token: refreshToken,
//                   scope: '*'
//                 },
//                 contentType: "application/x-www-form-urlencoded",
//                 headers: {
//                   'Accept': 'application/json'
//                 },
//                 success: function(response) {
//                   localStorage.setItem('access_token', response.access_token);
//                   localStorage.setItem('refresh_token', response.refresh_token);
//                   resolve();
//                 },
//                 error: function() {
//                   reject();
//                 }
//             });
//           }
//         });
//         // tell the app to pause loading until advanceReadiness is declared
//         app.deferReadiness();

//         // load from JSON 
//         Ember.$.getJSON('url').then(function(json) {

//           var store = container.lookup('store:main');
//           store.load(app.User, json);

//           // tell app to start progressing again
//           app.advanceReadiness();
//         });
//       }
//     }
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
                alert(response.data.name + " is logged in");
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
              alert("Session Expired!");
              window.location = '/landing';
            }
        });
      } else {
        reject();
      }
    });
  }
});