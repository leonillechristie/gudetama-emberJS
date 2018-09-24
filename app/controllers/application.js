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
                    if (!response) {
                        alert("Invalid Username/Password!");
                    }else {
                        alert("Login Successful!");
                        window.location.replace("/products");
                    }
                }
            });
        },
        populateUsers: function() {
          console.log(this);
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