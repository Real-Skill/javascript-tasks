(function () {
    'use strict';
    describe('bowerApp', function () {

            beforeEach(function () {
                browser.get('/#');
            });

        describe('typeahead', function () {
            var typeahead = element(by.id('typeahead'));

            it('should select the first result after typing letters', function () {
                typeahead.sendKeys('Ala').sendKeys('\uE015').click();
                expect(typeahead.getAttribute('value')).toBe('Alabama');
            });
            it('should select the third result after typing letters', function () {
                typeahead.sendKeys('New').sendKeys('\uE015').sendKeys('\uE015').sendKeys('\uE015').click();
                expect(typeahead.getAttribute('value')).toBe('New Mexico');
            });
        });

        describe('checkbox fluent', function () {
            var checkboxFuelux = element(by.id('checkboxFuelux'));
            var inputFuelux = element(by.id('inputFuelux'));

            it('should check element', function () {
                checkboxFuelux.click();

                expect(inputFuelux.isSelected()).toBe(true);
            });
            it('should uncheck element', function () {
                checkboxFuelux.click().click();

                expect(inputFuelux.isSelected()).toBe(false);
            });
        });

        describe('with angular', function () {

            beforeEach(function () {
                browser.waitForAngular();
            });


            describe('checkbox', function () {
                var leftButton = element(by.model('checkModel.left'));
                var middleButton = element(by.model('checkModel.middle'));
                var rightButton = element(by.model('checkModel.right'));


                it('should set left button value to true', function () {

                    leftButton.click();
                    expect(element(by.binding('checkModel.left')).getText()).toBe('true');
                });
                it('should set middle button value to false', function () {

                    middleButton.click();
                    expect(element(by.binding('checkModel.middle')).getText()).toBe('false');
                });
                it('should set right button value to true', function () {

                    rightButton.click();
                    expect(element(by.binding('checkModel.right')).getText()).toBe('true');
                });


            });

        });

    });
})();
