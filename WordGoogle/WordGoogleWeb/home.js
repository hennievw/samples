/**
* Hennie van Wyk - codestep blog
* Sample code for integrating an Office Addin with the Google API.
* http://www.codestepblog.com/
*/

"use strict";

var app = (function () {

    /**
    * Print out the email addresses returned by the contacts API
    */
    var displayContactEmails = function (contacts) {
        $("#login-view").hide();
        
        var contactList = $("#contacts-list");
        $.each(contacts, function (index, value) {
            $("#contacts-list").append("<li>" + value.gd$email[0].address + "</li>");
        });

        $("#contacts-view").show();
    }

    /**
    * Call the Contacts API and retrieve the (default) first 25 contacts
    * @param A valid access token for calling the API with
    * @return An object representing the contacts
    */
    var getContactEmails = function (access_token) {
        $.getJSON('https://www.google.com/m8/feeds/contacts/default/full/?access_token=' +
                                access_token + "&alt=json",
                                function (result) {
                                    displayContactEmails(result.feed.entry);
                                }
                            );
    }

    Office.initialize = function (reason) {
        $(document).ready(function () {

            $("#button-login").click(function () {
                Office.context.ui.displayDialogAsync("https://localhost:44300/account.html", { width: 50, height: 50, requireHTTPS: true }, function (asyncResult) {
                    var dialog = asyncResult.value;
                    dialog.addEventHandler(Microsoft.Office.WebExtension.EventType.DialogMessageReceived, function (asyncResult) {
                        if (asyncResult.message.indexOf("signin#") === 0) {
                            var data = JSON.parse(asyncResult.message.substring(7));

                            getContactEmails(data.access_token);

                            dialog.close();
                        }
                    });
                });
            });
        });
    };

})(window.app || (window.app = {}))
