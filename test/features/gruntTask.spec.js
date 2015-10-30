var GruntTask = require('./pageFragments/gruntTask.fragment.js');
var gruntTask = new GruntTask();

describe('Grunt Taks', function ()
{
    'use strict';
    
    describe('jshint', function ()
    {
        it('should have enter directive set to \'btn-danger\'', function ()
        {
            expect(gruntTask.getGruntJshintContent()).toEqual('btn-danger');
        });
    });
});
