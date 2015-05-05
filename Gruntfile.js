/*global module*/
module.exports = function (grunt)
{
    'use strict';

    var jenkinsOptions = {
        reporter: 'checkstyle',
        reporterOutput: 'tests/target/jshint.xml'
    };

    grunt.initConfig({
        jasmine_node: {
            coverage: {
                options: {
                    coverage: {
                        reportDir: 'tests/target',
                        excludes: ['**/tests/**'],
                        report: ['cobertura']
                    },
                    forceExit: true,
                    match: '.',
                    matchAll: false,
                    specFolders: ['tests'],
                    extensions: 'js',
                    specNameMatcher: 'spec',
                    captureExceptions: true,
                    showColors: true,
                    junitreport: {
                        report: true,
                        savePath: './tests/target/tests/',
                        useDotNotation: true,
                        consolidate: true
                    }
                },
                src: ['**/*.js']
            }
        },
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
    grunt.loadNpmTasks('grunt-jasmine-node-coverage');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('test', ['jasmine_node','jshint:jenkins']);
};
