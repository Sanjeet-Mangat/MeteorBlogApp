Meteor.startup(function () {
	if(Meteor.users.find().count() < 1) {
		var id = Accounts.createUser({
			email:'admin@admin.com',
			password: 'adminadmin',
			profile:{name:'Admin'}
		});

		Roles.addUsersToRoles(id,'admin');
	}
});
