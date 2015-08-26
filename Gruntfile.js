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
        }, connect: {
            serve: {
                options: {
                    port: 9000, livereload: 35729, hostname: '127.0.0.1'
                }
            },
            test: {
                options: {
                    port: 9001, livereload: 35730, hostname: '127.0.0.1'
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
                options: {
                    path: 'node_modules/webdriver-manager/bin/',
                    command: 'webdriver-manager start',
                    keepAlive: true
                }
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
            }
        }, karma: {
            unit: {
                configFile: 'test/karma.conf.js'
            }
        }
    });

    grunt.registerTask('serve', function ()
    {
        grunt.task.run(['connect:serve', 'watch']);
    });
    grunt.registerTask('test', ['connect:test', 'protractor_webdriver', 'protractor:chrome']);

    grunt.registerTask('default', ['serve']);
};
