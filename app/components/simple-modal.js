import Component from '@ember/component';

export default Component.extend({
    expose: function() {
        var app_controller = this.get('targetObject');
        var exposedName = "comp-" + this.get('id');
        app_controller.set(exposedName, this);
    }.on('init'),
    actions: {
        toggleModal: function() {
            this.toggleProperty('enabled');
        },
        formSubmit: function() {
            $.ajax({
                method: 'POST',
                data: {
                    email: 'email',
                    password: 'password'
                },
                contentType: "application/json",
                dataType: "json",
                complete: function(response) {
                    console.log(response);
                }
            });
        }
    },
});