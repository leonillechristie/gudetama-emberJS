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
    },
    updateProduct: function() {
      var id = this.model.id;
      console.log(this.model.id);

      var title = document.getElementById('title').value;
      var owner = document.getElementById('owner').value;
      var image = document.getElementById('image').value;
      var category = document.getElementById('category').value;
      var city = document.getElementById('city').value;
      var price = document.getElementById('price').value;
      var description = document.getElementById('description').value;

      $.ajax({
        url: 'http://gudetama.local:8000/api/v1/products/'+ id,
          method: 'PUT',
          data: {
              title: title,
              owner: owner,
              image: image,
              owner: owner,
              category: category,
              city: city,
              price: price,
              description: description
          },
          contentType: "application/x-www-form-urlencoded",
          success: function(response) {
            alert("Successfully updated product!");
            window.location.replace("/products/" + id);
          }
      });
    },
  }
});
