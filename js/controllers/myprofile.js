// JavaScript Document
App.MyprofileController = Ember.ObjectController.extend({
  post:[{Name:'Naomi',Text:'today is sunny',DateTime:'09/02/2014'},{Name:'Naomi',Text:'today is sunny',DateTime:'09/02/2014'}],
  actions: {
    PostStatus: 
	function() {
				$.post( "../php/poststatus.php", { userid: 1, status:  this.get('status') })
				  .done(function( data ) 
				  {
					alert(data );
				  });
				  
				  this.set('LastStatus',this.get('status'));
               }
          }
});