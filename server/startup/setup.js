/**
 * Created by holly on 27/11/16.
 */

Meteor.startup(function(){

    ////////////////////////////////////////////////////////////////////
    // Create Default Users
    //
    if (Meteor.users.find().fetch().length === 0) {

        console.log('Creating users: ');

        //TODO: Add email:"admin@example.com"
        var users = [
            {name:"Public User",username: "public", password: "ImNotAllowedToLogin",roles:[]},
            {name:"Developer User",username: "developer", password: "bendigo0",roles:['manage-local']},
            {name:"Manage-Versions User",username: "versions",password: "bendigo1",roles:['manage-versions']},
            {name:"Manage-Flows User",username: "flows",password: "bendigo2",roles:['manage-flows']},
            {name:"Admin User",username: "admin",password: "bendigo3",roles:['admin']}
        ];

        _.each(users, function (userData) {
            var id,
                user;

            console.log(userData);

            id = Accounts.createUser({
                username: userData.username,
                password: userData.password,
                profile: { name: userData.name }
            });

            // name verification
            Meteor.users.update({_id: id}, {$set:{'name.0.verified': true}});

            Roles.addUsersToRoles(id, userData.roles);

        });
    }

});