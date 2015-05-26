/*jshint camelcase:false*/

'use strict';

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
                }, files: ['<%= config.app %>/*.html', '<%= config.app %>/*.js']
            }
        }, connect: {
            options: {
                port: 9000, livereload: 35729, hostname: 'localhost'
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
            start: {
                options: {
                    path: 'node_modules/protractor/bin/',
                    command: 'webdriver-manager start'
                }
            }
        },
        protractor: {
            options: {
                keepAlive: true,
                configFile: 'test/protractor.conf.js'

            },
            run: {}
        }

    });

    grunt.registerTask('test', [
        'protractor_webdriver',
        'protractor:run'
    ]);


    grunt.registerTask('serve', function ()
    {
        grunt.task.run(['connect:livereload', 'watch']);
    });

    grunt.registerTask('default', ['serve']);
};
