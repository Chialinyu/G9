// JavaScript Document

//Parse.initialize("wfsQ2jK7uRpaJJjX4C3zhTvDXlzpVbkpGOrVIFdJ", "6IRXG0BIzE5ToEHOYh3HGjaXrNiU7HaG5Repvte0");

window.fbAsyncInit = function () {
    
    //facebook init
    //輸入基本的Facebook init的狀態，與Facebook 連接，包括APP ID的設定
    FB.init({
        appId      : '1515134405376425',
        xfbml      : true,
        version    : 'v2.0'
    });
    
//     Parse.FacebookUtils.init({
//        appId      : '1515134405376425', // Facebook App ID
//        channelUrl : 'http://chialinyu.github.io/G9/AllAboutFood/index/index.html', // Channel File
//        cookie     : true, // enable cookies to allow Parse to access the session
//        xfbml      : true  // parse XFBML
//     });
//    
//    Parse.FacebookUtils.logIn(null, {
//          success: function(user) {
//            if (!user.existed()) {
//              alert("User signed up and logged in through Facebook!");
//            } else {
//              alert("User logged in through Facebook!");
//            }
//          },
//          error: function(user, error) {
//            alert("User cancelled the Facebook login or did not fully authorize.");
//          }
//        });

    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {

            var uid = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;
            FB.api('/me', function (response) {
                //console.log(response);
                $("body").append('My links is' + response.link);
                 $("body").append('My Username is' + response.username); document.getElementsByTagName('body').innerHTML = ""
                 $("body").append('My ID is' + response.id);
            });


//            FB.ui({
//                method: 'share',
//                href: 'http://chialinyu.github.io/G9/AllAboutFood/index/index.html',
//            }, function (response) {});
//

//            FB.api('/me/photos', 'post', {
//                name:"test",
//                message: 'this is parse photo',
//                url: "http://chialinyu.github.io/G9/AllAboutFood/index/images/logo3.jpg"//如果要init運行只能用絕對絕對路徑
//            }, function (response) {
//                if (!response || response.error) {
//                    alert('Error occured:' + response);
//                    console.log(response);
//                } else {
//                    alert('Post ID: ' + response.id);
//                }
//            });

        } else if (response.status === 'not_authorized') {
            console.log("this user is not authorizied your apps");
            FB.login(function (response) {
                // FB.api('/me/feed', 'post', {message: 'I\'m started using FB API'});
                if (response.authResponse) { // if user login to your apps right after handle an event
                    window.location.reload();
                };
            }, {
                scope: 'user_about_me,email,user_location,user_photos,publish_actions,user_birthday,user_likes'
            });
        } else {
            console.log("this isn't logged in to Facebook.");
            FB.login(function (response) {
                if (response.authResponse) {
                    window.location.reload();
                } else {
                    //alertify.alert('An Error has Occurs,Please Reload your Pages');
                }
            });
        }
    });
}; //<<<<<<<<<<<<<<<init end    




//LOAD FACEBOOK SDK ASYNC，這是基本的東西，應該不用多說了吧
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js"; 
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
