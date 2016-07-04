/**
* Hennie van Wyk - codestep blog
* Sample code for integrating an Office Addin with the Google API.
* http://www.codestepblog.com/
*/

"use strict";

var account = (function () {
           
    var clientId = "[YOUR CLIENTID COMES HERE]";
    var scopes = "https://www.googleapis.com/auth/contacts.readonly";
    var redirectUri = "https://localhost:44300/account.html";
        
    /**
    * Retreive the hash segment of a URL
    * @param The URL to parse
    * @return The hash segment withouth the '#' characther
    */
    var getHash = function (hash) {
        if (hash.indexOf("#") > -1) {
            hash = hash.substring(1);
        }
        return hash;
    }

    /**
    * Scans the hash of the URL redirected to by Google and deserialize it into an object
    * @param The URL to parse
    * @return The hash segment withouth the '#' characther
    */
    var parseResponse = function (hash) {
        var params = {};
        var regex = /([^&=]+)=([^&]*)/g, m;
        while (m = regex.exec(hash)) {
            params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
        }
        return params;
    }    

    /**
    * Check whether the page is a redirect from Google OAuth and if auth was successful
    * @param A deserialized object representing the returned hash by Google OAuth
    * @return True if auth was successful, false otherwise
    */
    var isAuthCallback = function (authResponse) {
        if (typeof authResponse !== "undefined" && authResponse !== null) {

            if (authResponse.hasOwnProperty("access_token")) {
                return true;
            } else if (authResponse.hasOwnProperty("error")) {
                console.log("Authorization failed: " + authResponse.error);
            }
        }
        return false;
    }

    /**
    * Redirect to the Google OAuth page
    */
    var performAuthorization = function () {
        window.location = "https://accounts.google.com/o/oauth2/v2/auth" 
            + "?scope=" + scopes
            + "&state=auth" 
            + "&redirect_uri=" + redirectUri
            + "&response_type=token" 
            + "&client_id=" + clientId;
    }    

    Office.initialize = function (reason) {
        $(document).ready(function () {
            var hash = getHash(window.location.hash);
            var authResponse = parseResponse(hash);
            if (isAuthCallback(authResponse)) {
                Office.context.ui.messageParent("signin#" + JSON.stringify(authResponse));
            }
            performAuthorization();
        });
    };
        
})(window.account || (window.account = {}))