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
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-protractor-webdriver');
    var config = {
        app: 'app'
    };

    grunt.initConfig({
        config: config,
        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.app %>/**/*.html', '<%= config.app %>/**/*.js'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect)
                    {
                        return [
                            connect().use('/bower_components', connect.static('./bower_components')), connect.static(config.app)

                        ];
                    }
                }
            }
        },
        protractor_webdriver: {
            driver: {
                options: {}
            }
        },
        protractor: {
            options: {
                configFile: 'tests/config.js',
                keepAlive: false,
                noColor: false
            },
            chrome: {
                options: {
                    args: {
                        browser: 'chrome'
                    }
                }
            },
            firefox: {
                options: {
                    args: {
                        browser: 'firefox'
                    }
                }
            },
            phantomjs: {
                options: {
                    args: {
                        browser: 'phantomjs'
                    }
                }
            }
        },
        karma: {
            unit: {
                configFile: 'tests/karma.conf.js'
            }
        }
    });

    grunt.registerTask('serve', function ()
    {
        grunt.task.run([
            'connect:livereload', 'watch'
        ]);
    });
    grunt.registerTask('test', [
        'protractor:chrome'
    ]);

    grunt.registerTask('test:phantomjs', [
        'protractor_webdriver', 'protractor:phantomjs'
    ]);

    grunt.registerTask('default', ['serve']);
};
