// /**
//  * Created by holly on 21/08/16.
//  */
//
// Template.baseLayout.rendered = function() {
//     // scroll to anchor
//     $('body').on('click', 'a', function(e) {
//         var href = $(this).attr("href");
//         if(!href) {
//             return;
//         }
//         if(href.length > 1 && href.charAt(0) == "#") {
//             var hash = href.substring(1);
//             if(hash) {
//                 e.preventDefault();
//
//                 var offset = $('*[id="' + hash + '"]').offset();
//
//                 if (offset) {
//                     $('html,body').animate({ scrollTop: offset.top - 60 }, 400);
//                 }
//             }
//         } else {
//             if(href.indexOf("http://") != 0 && href.indexOf("https://") != 0 && href.indexOf("#") != 0) {
//                 $('html,body').scrollTop(0);
//             }
//         }
//     });
//     /*TEMPLATE_RENDERED_CODE*/
// };
//
//
// Template.baseLayout.helpers({
//     "privateData": function() {
//         return {
//             params: this.params || {}
//         };
//
//     },
//     "publicData": function() {
//         return {
//             params: this.params || {}
//         };
//
//     }
// });

;(function(){
    "use strict";
    Template.baseLayout.helpers({
        notVerified: function () {
            var user = Meteor.user();

            return !userNameVerified(user);
        }
    });

    Template.baseLayout.events({
        "click": function(event) { // Fix Bootstrap Dropdown Menu Collapse on click outside Menu
            var clickover = $(event.target).closest(".dropdown-toggle").length;
            var opened = $(".navbar-collapse").hasClass("in");
            if (opened === true && !clickover) {
                $('.navbar-collapse').collapse('hide');
            }
        },

        "keyup": function(event) {
            if (event.keyCode === 27) { // Bootstrap Dropdown Menu Collapse on ESC pressed
                var opened = $(".navbar-collapse").hasClass("in");
                if (opened === true) {
                    $('.navbar-collapse').collapse('hide');
                }
            }
        }
    });

    function userNameVerified (user) {
        return _.some(user.username, function (username) {
            return username.verified;
        })
    }

////////////////////////////////////////////////////////////////////
// Configure Accounts-ui to accept Username or email address
// as acceptable login criteria
    Accounts.ui.config({
        passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
    });
}());
