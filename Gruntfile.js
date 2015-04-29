/*global module*/
module.exports = function (grunt)
{
    'use strict';

    var jenkinsOptions = {
        reporter: 'checkstyle',
        reporterOutput: 'target/jshint.xml'
    };

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: true,
                src: ['app/**/*.js', 'test/**/*.js']
            },
            default: ['<%=jshint.options.src%>'],
            jenkins: {
                options: jenkinsOptions,
                src: ['<%=jshint.options.src%>']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
};
