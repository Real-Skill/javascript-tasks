/*jshint camelcase:false*/
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt)
{

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-protractor-webdriver');

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
        }, connect: {
            options: {
                port: 9000, livereload: 35729, hostname: 'localhost'
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
                        return [connect().use('/app/bower_components', connect.static('./app/bower_components')), connect.static(config.app)

                        ];
                    }
                }
            }
        },
        protractor_webdriver: {
            driver: {
                options: {}
            }
        }, protractor: {
            options: {
                configFile: 'test/protractor.conf.js', keepAlive: false, noColor: false
            }, chrome: {
                options: {
                    args: {
                        browser: 'chrome'
                    }
                }
            }, firefox: {
                options: {
                    args: {
                        browser: 'firefox'
                    }
                }
            }, phantomjs: {
                options: {
                    args: {
                        browser: 'phantomjs'
                    }
                }
            }, continuous: {
                options: {
                    keepAlive: true
                }
            }
        }
    });

    grunt.registerTask('serve', ['connect:livereload', 'watch']);
    grunt.registerTask('test', ['connect:test', 'protractor_webdriver', 'protractor:chrome']);

    grunt.registerTask('default', ['serve']);
};
