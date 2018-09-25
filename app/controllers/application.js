import Controller from '@ember/controller';

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
      	url: 'http://gudetama.local:8000/api/v1/login/',
          method: 'POST',
          data: {
            email: email,
            password: password
          },
          contentType: "application/x-www-form-urlencoded",
          success: function(response) {
            if (response.authenticated == true) {
              alert("Login Successful!");
              window.location.replace("/products");
              var logModal = document.getElementById("loginModal");
              $(logModal).hide();
              // document.getElementById("loginModal").style.visibility = "hidden";
              // document.getElementById("loginModal").style.display = "none";
            }else {
              alert("Invalid Username/Password!");
            }
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