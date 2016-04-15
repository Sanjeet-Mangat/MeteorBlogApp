/* 
* FILE : IronRouter.js
* PROGRAMMER : Sanjeet Mangat
* DESCRIPTION :The functions in this file are used to direct the user to the according web pages
*/

//Iron Router config, layout...
Router.configure({
	layoutTemplate: 'AppLayout'
});


//Home Page
Router.route('/', function () {
  this.render('Home');
});

//Add form
Router.route('/addpost', function () {
  this.render('AddPost');
});

// Show Posts
Router.route('/showposts', function () {
	this.render('ShowPosts');
});


//show single posts
Router.route('/post/:_id', function() {
	this.render('SinglePost',  {
		data: function () {return Posts.findOne({_id: this.params._id});}
	});
});

//  Admin Panel
Router.route('/admin', function () {
		this.render('AdminPanel');
	
});

// Admin manage Posts
Router.route('/admin/posts', function () {

		this.render('AdminPosts');

});

//Admin edit posts
Router.route('/admin/posts/:_id', function () {

		  this.render('EditPosts', {
  	data: function () { return Posts.findOne({_id: this.params._id}); }
 });
});