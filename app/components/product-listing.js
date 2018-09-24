import Component from '@ember/component';

export default Component.extend({
  isWide: false,
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    },
    destroy(param) {
	  var id = this.attrs.product.id;
      $.ajax({
        url: 'http://gudetama.local:8000/api/v1/products/' + id,
          type: 'DELETE',
          contentType: "application/x-www-form-urlencoded",
          success: function(data) {
            alert('delete successful');
            window.location.replace("/products/");
          }
      });
    }
  }
});
