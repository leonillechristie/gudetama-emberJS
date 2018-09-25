import Controller from '@ember/controller';

export default Controller.extend({
  initialize() {
    console.log(this);
  },
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
      var id = this.model.userid;
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;

      $.ajax({
        url: 'http://gudetama.local:8000/api/v1/users/'+ id,
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
    },
    addUser: function() {
      var name = document.getElementById('newName').value;
      var email = document.getElementById('newEmail').value;
      var avatar = document.getElementById('newAvatar').value;

      $.ajax({
        url: 'http://gudetama.local:8000/api/v1/users/',
          method: 'POST',
          data: {
            name: name,
            email: email,
            avatar: avatar
          },
          contentType: "application/x-www-form-urlencoded",
          success: function(response) {
            alert("User Created Successfully!");
            window.location.replace("/users/");
          }
      });
    }
  }
});