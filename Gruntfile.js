/*global module*/
module.exports = function (grunt)
{
    'use strict';

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: true,
                require: 'coverage/blanket',
                src: ['app/**/*.js', 'test/**/*.js']
            },
            default: ['<%=jshint.options.src%>'],
            verify: {
                options: {
                    reporter: 'checkstyle',
                    reporterOutput: 'target/jshint.xml'
                },
                src: ['<%=jshint.options.src%>']
            }
        },
        mocha_istanbul: {
            options: {
                coverageFolder: 'target',
                src: ['test/unit/**/*.spec.js'],
                ui: 'bdd',
                recursive: true
            },
            default: {
                options: {
                    reporter: 'spec'
                },
                src: ['<%=mocha_istanbul.options.src%>']
            },
            verify: {
                options: {
                    reporter: 'mocha-junit-reporter',
                    reportFormats: ['cobertura'],
                    mochaOptions: [ '--reporter-options', 'mochaFile=target/test-results.xml']
                },
                src: ['<%=mocha_istanbul.options.src%>']
            }

        }
    });
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('verify', ['jshint:verify', 'mocha_istanbul:verify']);
    grunt.registerTask('default', ['jshint:default', 'mocha_istanbul:default']);
};
