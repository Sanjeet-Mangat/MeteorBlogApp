/* 
* FILE : Posts.js
* PROGRAMMER : Sanjeet Mangat
* DESCRIPTION : This functions in this file store/update/delete the information entered by the user for the posts
*/

Meteor.methods({
	addPost: function (title, message, email, date) {
		//check if the user is logged in or not/ soon....
		//if(Meteor.user())


		var id = Posts.insert({
			Title: title,
			Message: message,
			createdAt: date.toDateString(), //new Date(), // current time
			//Author: author,
			owner: Meteor.userId(),
      		email: Meteor.user().emails[0].address,
		});

		return id;
	},
	editPost: function (postID, title, message) {
			Posts.update(postID,{
						$set:{
							Title: title,
							Message: message	
						}
					});
	},
	deletePost: function (postID) {
		Posts.remove(postID);
	}
});