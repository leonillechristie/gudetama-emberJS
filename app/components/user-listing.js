import Component from '@ember/component';

export default Component.extend({
	actions: {
    destroy(param) {
	  var id = this.attrs.user.userid;
	  console.log(this.attrs.user.userid);
      $.ajax({
        url: 'http://localhost:8000/api/v1/user/' + id,
          type: 'DELETE',
          contentType: "application/x-www-form-urlencoded",
          success: function(data) {
            alert('delete successful');
          }
      });
    }
  }
});