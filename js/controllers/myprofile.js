// JavaScript Document
App.MyprofileController = Ember.ObjectController.extend({
  
  actions: {
    PostStatus: 
	function() {
				$.post( "../php/poststatus.php", { userid: 1, status:  this.get('status') })
				  .done(function( data ) 
				  {
					alert(data );
				  });
               }
          }
});