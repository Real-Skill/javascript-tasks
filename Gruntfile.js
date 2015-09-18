/*jshint camelcase:false*/
'use strict';

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
        }, karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        },
        jshint: {
            options: {
                jshintrc: true
            },
            all: ['app/*.js']
        }
    });

    grunt.registerTask('serve', ['connect:livereload', 'watch']);
    grunt.registerTask('test', ['karma', 'connect:test', 'protractor_webdriver', 'protractor:chrome']);

    grunt.registerTask('test:unit', ['karma']);

    grunt.registerTask('test:protractor', ['connect:test', 'protractor_webdriver', 'protractor:chrome']);

    grunt.registerTask('default', ['serve']);
};
