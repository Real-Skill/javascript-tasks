/*jshint camelcase:false*/

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
        mocha_istanbul: {
            options: {
                coverageFolder: 'target',
                src: ['app/**/*.js'],
                ui: 'bdd',
                recursive: true
            },
            dev: {
                options: {
                    reporter: 'spec',
                    mochaOptions: ['--watch']
                },
                src: ['<%=mocha_istanbul.options.src%>']
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
                    mochaOptions: ['--reporter-options', 'mochaFile=target/test-results.xml']
                },
                src: ['<%=mocha_istanbul.options.src%>']
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
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    grunt.registerTask('test:dev', ['mocha_istanbul:dev']);
    grunt.registerTask('verify', ['jshint:verify', 'mochaTest:verify', 'mocha_istanbul:verify']);
    grunt.registerTask('default', ['jshint:default', 'mochaTest:default']);
};
