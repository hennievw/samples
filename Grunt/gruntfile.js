/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            options: {
                compress: true
            },
            target: {
                files: {
                    "Scripts/App/components.min.js": [
                    "Scripts/App/userlist.js",
                    "Scripts/App/imgbanner.js",
                    "Scripts/App/peoplepicker.js",
                    ],
                    "Scripts/App/app.min.js": [
                    "Scripts/App/about.js",
                    "Scripts/App/router.js",
                    "Scripts/App/home.js",
                    ]
                }
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.registerTask("customTask", ["uglify"]);
};


