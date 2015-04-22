describe('directives', function ()
{
    'use strict';

    var circle;
    var $scope;

    beforeEach(module('app'));
    beforeEach(inject(function ($compile, $rootScope)
    {
        $scope = $rootScope;
        circle = angular.element('<div enter leave class="circle center-block"></div>');
        circle = $compile(circle)($rootScope);
    }));

    describe('circle', function ()
    {
        it('should add bg-info a class when mouseenter', function ()
        {
            circle.triggerHandler('mouseenter');
            expect(circle.hasClass('bg-danger')).toBe(true);
        });

        it('should respond to a mouseenter event', function ()
        {
            circle.triggerHandler('mouseenter');
            expect(circle.scope().entered).toBe(true);
        });

        it('should remove bg-info class when mouseleave', function ()
        {
            circle.triggerHandler('mouseleave');
            expect(circle.hasClass('bg-danger')).toBe(false);
        });

        it('should respond to a mouseleave event', function ()
        {
            circle.triggerHandler('mouseleave');
            expect(circle.isolateScope().left).toBe(true);
        });
    });
});
