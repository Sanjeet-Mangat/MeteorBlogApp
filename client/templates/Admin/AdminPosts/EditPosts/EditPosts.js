/* 
* FILE : EditPosts.js
* PROGRAMMER : Sanjeet Mangat
* DESCRIPTION : This functions in this file will collect the user entered data from a form 
* 				and send the updated information to the server to be stored in the database as well as displayed 
* 				on back on the same page. 
*/


Template.EditPosts.events({
		'submit #editPost': function () {
		event.preventDefault();

		var title = event.target.postTitle.value;
		var message = event.target.postMessage.value;

		/*Posts.update(this._id,{
			$set:{
				Title: title,
				Message: message	
			}
		});*/

		Meteor.call('editPost', this._id, title, message, function (error) {
			if(!error){
				Router.go('/admin/posts');
			}
			
		});
		
	}
});