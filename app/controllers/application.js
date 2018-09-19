import Controller from '@ember/controller';

export default Controller.extend({
    router: Ember.inject.service(),
    actions: {
        openModal: function(target) {
            var modal = this.get('comp-' + target);
            modal.send('toggleModal');
        },
        formSubmit: function() {
            $.ajax({
            	url: 'http://localhost:8000/api/v1/login/',
                method: 'POST',
                data: {
                    email: this.email,
                    password: this.password
                },
                contentType: "application/x-www-form-urlencoded",
                success: function(response) {
                    if (response.authenticated != true) {
                        // show errors
                        alert("Invalid Username/Password!");
                    }else {
                        // successful login
                        alert("Login Successful!");
                        window.location.replace("/products");
                    }
                }
            });
        }
        // populateUsers() {
        //   console.log(this);
        //   $.ajax({
        //     url: 'http://localhost:8000/api/v1/users',
        //       method: 'GET',
        //       data: {
        //         userid: this.userid,
        //         name: this.name,
        //         email: this.email
        //       },
        //       contentType: "application/x-www-form-urlencoded",
        //       success: function(data) {
        //         alert('Populate successful');
        //       }
        //   });
        // }
    }
});