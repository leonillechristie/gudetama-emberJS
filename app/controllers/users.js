import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByName(param) {
      if (param !== '') {
        return this.store
          .query('user', { name: param }).then((results) => {
            return { query: param, results: results };
          });
      } else {
        return this.store
          .findAll('user').then((results) => {
            return { query: param, results: results };
          });
      }
    },
    updateUser: function() {
      console.log(this.model.email);
      console.log(this.model.name);

      var id = this.model.userid;
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;

      $.ajax({
        url: 'http://localhost:8000/api/v1/user/'+ id,
          method: 'PUT',
          data: {
              name: name,
              email: email
          },
          contentType: "application/x-www-form-urlencoded",
          success: function(response) {
            alert("Update Successful!");
            window.location.replace("/users/" + id);
          }
      });
    }
  }
});