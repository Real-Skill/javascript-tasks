/*jshint camelcase:false*/
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt)
{

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-protractor-webdriver');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    require('load-grunt-tasks')(grunt);

    var config = {
        app: 'app'
    };

    grunt.initConfig({
        config: config, watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }, files: ['<%= config.app %>/**/*.html', '<%= config.app %>/**/*.js']
            }
        },

        connect: {
            options: {
                port: 9000, livereload: 35729, hostname: '127.0.0.1'
            }, test: {
                options: {
                    // set the location of the application files
                    base: ['app'],
                    port: 9001
                }
            }, livereload: {
                options: {
                    open: true, middleware: function (connect)
                    {
                        return [connect().use('/bower_components', connect.static('./bower_components')), connect.static(config.app)

                        ];
                    }
                }
            }
        }, protractor_webdriver: {
            driver: {
                options: {}
            }
        }, protractor: {
            options: {
                configFile: 'test/config.js', keepAlive: false, noColor: false

            }, continuous: {
                options: {
                    keepAlive: true
                }
            }
        }, karma: {
            unit: {
                configFile: 'test/karma.conf.js'
            }
        },
        jshint: {
            all: ['app/**/*.js']
        }
    });

    grunt.registerTask('serve', function ()
    {
        grunt.task.run(['connect:livereload', 'watch']);
    });
    grunt.registerTask('test', ['connect:test', 'protractor']);

    grunt.registerTask('default', ['serve']);
};
