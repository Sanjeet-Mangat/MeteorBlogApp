/* 
* FILE : AddPost.js
* PROGRAMMER : Sanjeet Mangat
* DESCRIPTION : This functions in this file will collect the user entered data from a form 
* 				and send the information to the server to be stored in the database as well as displayed 
* 				on a seperate page. 
*/

Template.AddPost.events({
	'submit #addPost': function () {
		event.preventDefault();

		var title = event.target.postTitle.value;
		var message = event.target.postMessage.value;
		var date = new Date();
		var email = Meteor.user().emails[0].address;
		//var author = event.target.authorName.value;
		/*Posts.insert({
			Title: title,
			Message: message,
			createdAt: date.toDateString(), //new Date(), // current time
			//Author: author,
			owner: Meteor.userId(),
      		email: Meteor.user().emails[0].address,
		});*/

		Meteor.call('addPost',title, message, email, date, function (error) {
			if(!error){
				Router.go('/showposts');
			}
			
		});
		
	}
});