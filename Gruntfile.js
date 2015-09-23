/*global module*/
module.exports = function (grunt)
{
    'use strict';

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: true,
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
        mochaTest: {
            options: {
                recursive: true,
                src: ['test/unit/**/*.spec.js'],
                ui: 'bdd'
            },
            default: {
                options: {
                    reporter: 'spec'
                },
                src: ['<%=mochaTest.options.src%>']

            },
            verify: {
                options: {
                    reporter: 'mocha-junit-reporter',
                    reporterOptions: {
                        mochaFile: 'target/test-results.xml'
                    }
                },
                src: ['<%=mochaTest.options.src%>']
            }
        }
    });
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('verify', ['jshint:verify', 'mochaTest:verify']);
    grunt.registerTask('default', ['jshint:default', 'mochaTest:default']);
};
