/*global module*/
module.exports = function (grunt)
{
    'use strict';

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: true
            },
            all: ['impl/**/*.js', 'test/**/*.js'],
            test:  ['test/spec/{,*/}*.js']
        },
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect.static('test'),
                            connect().use(
                                    '/bower_components',
                                    connect.static('./bower_components')
                            ),
                            connect.static('app')
                        ];
                    }
                }
            }
        },
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('test', [
        'connect:test',
        'karma'
    ]);
};
