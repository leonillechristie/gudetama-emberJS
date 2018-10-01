import Controller from '@ember/controller';
import Application from '@ember/application';
export default Controller.extend({
  router: Ember.inject.service(),
  actions: {
    openModal: function(target) {
      var modal = this.get('comp-' + target);
      modal.send('toggleModal');
    },
    formSubmit: function() {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      $.ajax({
      	url: 'http://gudetama.local:8000/oauth/token',
          method: 'POST',
          data: {
            grant_type: 'password',
            client_id: 2,
            client_secret: 'iMupCxM9eatJ963MUOoBp9uf5NAPfS3uZzebmp1I',
            username: email,
            password: password,
            scope: '*'
          },
          contentType: "application/x-www-form-urlencoded",
          headers: {
            'Accept': 'application/json'
          },
          success: function(response) {
            localStorage.setItem('access_token', response.access_token);
            localStorage.setItem('refresh_token', response.refresh_token);
            window.location = '/products';
          },
          error: function() {
            alert("Invalid user credentials.");
          }
      });
    },
    populateUsers: function() {
      $.ajax({
        url: 'http://gudetama.local:8000/api/v1/users',
        method: 'GET',
        data: {
          userid: this.userid,
          name: this.name,
          email: this.email
        },
        contentType: "application/x-www-form-urlencoded",
        success: function(data) {
          alert('Populate successful');
        }
      });
    }
  } 
});