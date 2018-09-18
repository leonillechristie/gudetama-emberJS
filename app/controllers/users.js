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
      alert('users');
      console.log('ádsfasfd');

      $.ajax({
        url: 'http://localhost:8000/api/v1/update',
          method: 'PUT',
          data: {
              name: this.name,
              // name: this.attributes["name"].value,
              // name: $(this).attr("name"),
              email: this.email,
              password: this.password
          },
          contentType: "application/x-www-form-urlencoded",
          success: function(response) {
              if (response.authenticated != true) {
                  alert("Cannot have empty fields!");
              }else {
                  alert("Update Successful!");
                  window.location.replace("/users");
              }
          }
      });

    }
  }
});
