(function () {
    'use strict';
    describe('mouseApp', function () {

        beforeEach(function () {
            browser.get('/#');
            browser.waitForAngular();

        });

        describe('mouse over the circle element', function () {

            it('should set circle element class to bg-danger', function () {

                browser.actions().mouseMove(element(by.css('.circle'))).perform();
                expect(element(by.css('.bg-danger')).isPresent()).toBe(true);

            });

        });

        describe('mouse leave the circle element', function () {

            it('should clear circle element class', function () {
                browser.actions().mouseMove(element(by.css('.circle'))).perform();
                browser.actions().mouseMove(element(by.id('header'))).perform();

                expect(element(by.css('.bg-danger')).isPresent()).toBe(false);
            });

        });


    });
})();
