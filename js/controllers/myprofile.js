// JavaScript Document
App.MyprofileRoute = Ember.Route.extend({
	model: function() {
	return $.getJSON('../php/myprofile.php');
	}
});