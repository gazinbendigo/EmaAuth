/**
 * Created by holly on 27/11/16.
 */

Template.menu.onCreated(function(){

});

Template.menu.rendered = function() {

};

Template.menu.events({

});

Template.menu.helpers({

    homePage: () => {
        return FlowRouter.path("home");
    },

    consumerPropsParentPath: () => {
        return FlowRouter.path('manageConsumerProperties');
    },

    createEnvironmentPath: () => {
        return FlowRouter.path('createEnvironment');
    },

    manageEnvironmentPath: () => {
        return FlowRouter.path('manageEnvironment');
    },

    configurationParentPath: () => {
        return FlowRouter.path('configuration');
    },

    performanceParentPath: () => {
        return FlowRouter.path('performance');
    },

    manageUsers: () => {
        return FlowRouter.path("development");
    },

    loginPath: () => {
        return FlowRouter.path("login");
    }
});