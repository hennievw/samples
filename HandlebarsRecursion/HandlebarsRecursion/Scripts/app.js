
function getRecursiveObject() {
    //Construct our tree structure
    return [{
        Name: "Root",
        Children: [
            {
                Name: "Level1",
                Children: [
                    {
                        Name: "Fruit",
                        Children: [
                            {
                                Name: "Apple"
                            },
                            {
                                Name: "Orange"
                            }
                        ]
                    },
                    {
                        Name: "Vegetables",
                        Children: [
                            {
                                Name: "Pumpkin"
                            }
                        ]
                    }
                ]
            },
            {
                Name: "Level2",
                Children: [
                    {
                        Name: "Cars"
                    }
                ]
            }
        ]
    }]
}

function loadPartial() {
    var deferred = $.Deferred();

    $.get("/Templates/list-partial.hbs", function (partial) {
        Handlebars.registerPartial("listItemPartial", partial);
        deferred.resolve();
    });

    return deferred.promise();
}

$(document).ready(function () {

    var sammy = Sammy("body");
    sammy.use("Handlebars", "hbs");

    loadPartial().done(function () {
        sammy.get("#/", function (context) {
                        
            context.render("Templates/main-container.hbs", { Items: getRecursiveObject() }, function (renderedView) {
                $("#page-view").html(renderedView);
            });
        });

        sammy.run('#/');
    })

});