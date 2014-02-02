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