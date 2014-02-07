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

App.MyprofileRoute = Ember.Route.extend({
	model: function() {
	return Ember.$.getJSON('http://localhost/SocialHub/php/test.php');
	}
});

