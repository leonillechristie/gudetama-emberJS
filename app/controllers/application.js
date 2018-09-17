import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        openModal: function(target) {
            var modal = this.get('comp-' + target);
            modal.send('toggleModal');
        },
        formSubmit: function() {
            console.log(this)
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
                        alert('Invalid Credentials');
                    }
                    // else {
                    //     this.route('products', function() {
                    //         this.route('products', { path: '/products' });
                    //     });
                    // }
                }
            });
        }
    }
});