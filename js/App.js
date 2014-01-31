// JavaScript Document

App = Ember.Application.create();

App.Router.map(function() {
	this.resource('myfriends');
	this.resource('mymessages');
	this.resource('myprofile');
});
	
