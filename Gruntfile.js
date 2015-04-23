/*global module*/
module.exports = function (grunt)
{
    'use strict';

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: true
            },
            all: ['impl/**/*.js', 'test/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};
