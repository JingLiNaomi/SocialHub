// JavaScript Document

App = Ember.Application.create();

App.Router.map(function() {
	this.resource('login');
	this.resource('main', function(){
		this.resource('myfriends');
		this.resource('mymessages');
		this.resource('myprofile');
		this.resource('myalbums');
		this.resource('mycircles');
		this.resource('mynews');
		this.resource('myblog');
		this.resource('messaging');
		this.resource('mysettings');
	});
});

App.MainIndexRoute = Ember.Route.extend({
	activate: function() {
		this.transitionTo('myprofile');
	}
});
	
App.IndexRoute = Ember.Route.extend({
	activate: function() {
		this.transitionTo('main');	
	}
});

App.LoginController = Ember.Controller.extend({
	emailLogin: '',
	passwordLogin:'',
	email:'',
	password1:'',
	password2:'',
	actions: {
		register: function()
		{
			$.post('../php/register.php',
			{
				email: this.get('email'),
				password:this.get('password')
			},
			function(data){
				alert(data);
			}, 
			"json")
		},
		
		login: function()
		{
		}
	}
});