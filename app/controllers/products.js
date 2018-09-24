import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByTitle(param) {
      if (param !== '') {
        return this.store
          .query('product', { title: param }).then((results) => {
            return { query: param, results: results };
          });
      } else {
        return this.store
          .findAll('product').then((results) => {
            return { query: param, results: results };
          });
      }
    },
    addCart: function() {
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
