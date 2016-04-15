/* 
* FILE : AdminPosts.js
* PROGRAMMER : Sanjeet Mangat
* DESCRIPTION : This functions in this file will allow the user to edit and or delete posts.
*/

Template.AdminPosts.helpers({
	posts: function () {
		return Posts.find();
	}
});

Template.AdminPosts.events({
	'click #deletePost': function () {
		/*Posts.remove(this._id);*/
		Meteor.call('deletePost' ,this._id);
	},
	'click #editPost': function () {
		Router.go('/admin/posts/'+this._id);
	}
});