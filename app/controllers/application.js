import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        openModal: function(target) {
            var modal = this.get('comp-' + target);
            modal.send('toggleModal');
        },
        formSubmit: function() {
            $.ajax({
            	url: 'http://localhost:8000/api/v1/login',
                method: 'POST',
                data: {
                    email: 'test@app.local',
                    password: 'secret'
                },
                contentType: "application/json",
                dataType: "json",
                complete: function(response) {
                    console.log(response);
                }
            });
        }
    }
});