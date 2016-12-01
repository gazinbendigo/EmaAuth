/**
 * Created by adm9360 on 10/12/2015.
 */
;(function() {
    "use strict";

    BlazeLayout.setRoot('body');

    const publicRoutes = FlowRouter.group({
        prefix: '/ema'
    });

    const authenticatedRoutes = FlowRouter.group({
        name: 'authenticated'
    });

    FlowRouter.notFound = {
        action: function () {
            BlazeLayout.render("noHeaderLayout", {content: "notFound"})
        }
    }

    FlowRouter.route('/login', {
        name: 'login',
        action: function () {
            BlazeLayout.render("baseLayout", {content: "signin", menu: 'menu'});
        }
    });

    FlowRouter.route('/', {
        name: 'home',
        action: function () {
            BlazeLayout.render("hubLogsLayout", {content: "home", menu: 'menu'});
        }
    });

    publicRoutes.route('/chart', {
        name: 'chart',
        action: function () {
            BlazeLayout.render('chart')
        }
    });

    publicRoutes.route('/:env/requestservices/requestId/:requestId', {
        name: 'requestServiceAveragesByRequestId',
        action: function (params) {
            BlazeLayout.render("baseLayout", {content: "default", menu: 'menu'});
        }
    });

    FlowRouter.route('/:env', {
        name: 'searchHublogs',
        action: function (params, queryParams) {
            BlazeLayout.render("hubLogsLayout", {content: "default", menu: 'menu'});
        }
    });

    publicRoutes.route('/environment', {
        name: 'createEnvironment',
        action: function () {
            BlazeLayout.render("baseLayout", {content: "default", menu: 'menu'});
        }
    });

    publicRoutes.route('/manageEnvironment', {
        name: 'manageEnvironment',
        action: function () {
            BlazeLayout.render("baseLayout", {content: "default", menu: 'menu'});
        }
    });

    publicRoutes.route('/environment/consumers', {
        name: 'manageConsumerProperties',
        action: function () {
            BlazeLayout.render("baseLayout", {content: "default", menu: 'menu'});
        }
    });

    FlowRouter.route('/spacebars', {
        name: 'spacebars',
        action: function () {
            BlazeLayout.render("baseLayout", {content: "spacebars"});
        }
    });

    publicRoutes.route('/performance', {
        name: 'performance',
        action: function () {
            BlazeLayout.render("baseLayout", {content: "default", menu: "menu"});
        }
    });

    FlowRouter.route('/error', {
        name: 'error',
        action: function () {
            BlazeLayout.render("baseLayout", {content: "error", menu: "menu"});
        }
    });

    publicRoutes.route('/configuration', {
        name: 'configuration',
        action: function () {
            BlazeLayout.render("baseLayout", {content: "default", menu: "menu"});
        }
    });

//################### Authenticated Routes

//TODO: Change to private
    publicRoutes.route('/manageusers', {
        name: 'manageusers',
        action() {
            BlazeLayout.render("baseLayout", {content: "default", menu: "menu"});
        }
    });

//TODO: Change to private
    publicRoutes.route('/userprofile/:adm', {
        name: 'userProfile',
        action(){
            BlazeLayout.render("baseLayout", {content: "default", menu: "menu"});
        }
    });

    FlowRouter.route('/spacebars', {
        name: 'spacebars',
        action: function () {
            BlazeLayout.render("otherLayout", {content: "spacebars"});
        }
    });

}());