/* 
* FILE : ShowPosts.js
* PROGRAMMER : Sanjeet Mangat
* DESCRIPTION : This functions in this file will allow the user to click 
* 				on a post and read the post more in depth on a single page
*/

Template.ShowPosts.helpers({
	posts: function () {
		return Posts.find();
	}
});

Template.ShowPosts.events({
	'click #readMore': function () {
		Router.go('/post/'+this._id);
	}
});
