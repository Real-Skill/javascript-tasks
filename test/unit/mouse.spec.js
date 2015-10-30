describe('directives', function ()
{
    'use strict';

    var circle;
    var $scope;

    beforeEach(module('app'));
    beforeEach(inject(function ($compile, $rootScope)
    {
        $scope = $rootScope;
        circle = angular.element('<div enter="btn-danger" leave="btn-danger" class="circle center-block"></div>');
        circle = $compile(circle)($rootScope);
    }));

    describe('circle', function ()
    {
        beforeEach(function ()
        {
            circle.triggerHandler('mouseenter');
        });
        it('should add btn-danger a class when mouseenter', function ()
        {
            expect(circle.hasClass('btn-danger')).toBe(true);
        });

        it('should remove btn-danger class when mouseleave', function ()
        {
            circle.triggerHandler('mouseleave');
            expect(circle.hasClass('btn-danger')).toBe(false);
        });

    });
});
