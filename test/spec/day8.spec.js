/**
 * Created by piniu on 01.09.14.
 */
describe("ShoppingCartCtrl", function () {
    beforeEach(module('day8App'));
    var shoppingCart;

    beforeEach(inject(function ($controller) {
        shoppingCart = $controller('ShoppingCartCtrl', {});
    }));

    describe("addProduct", function () {

        it("should add new product to shopping cart list", function () {
            shoppingCart.addProduct({id: null, name: 'ham', price: 5.5});
            expect(shoppingCart.cart).toEqual([
                {id: 0, name: 'ham', price: 5.5}
            ]);
            shoppingCart.addProduct({id: null, name: 'beer', price: 2.45});
            expect(shoppingCart.cart).toEqual([
                {id: 0, name: 'ham', price: 5.5},
                {id: 1, name: 'beer', price: 2.45}
            ]);
        });
        it("should change product if id is on list", function () {
            shoppingCart.addProduct({id: null, name: 'Ham', price: 5.5});
            shoppingCart.addProduct({id: null, name: 'Beer', price: 2.45});
            shoppingCart.addProduct({id: 1, name: 'Butter', price: 2});
            expect(shoppingCart.cart).toEqual([
                {id: 0, name: 'Ham', price: 5.5},
                {id: 1, name: 'Butter', price: 2}
            ]);
            shoppingCart.addProduct({id: 0, name: 'Orange', price: 4.25});
            expect(shoppingCart.cart).toEqual([
                {id: 0, name: 'Orange', price: 4.25},
                {id: 1, name: 'Butter', price: 2}
            ]);
        });

    });
    describe("deleteProduct", function () {
        it("should delete product from list", function () {
            shoppingCart.addProduct({id: null, name: 'Ham', price: 5.5});
            shoppingCart.addProduct({id: null, name: 'Beer', price: 2.45});
            shoppingCart.addProduct({id: null, name: 'Milk', price: 1.2});
            shoppingCart.deleteProduct(1);
            expect(shoppingCart.cart).toEqual([
                {id: 0, name: "Ham", price: 5.5},
                {id: 2, name: 'Milk', price: 1.2}
            ]);
            shoppingCart.deleteProduct(0);
            expect(shoppingCart.cart).toEqual([
                {id: 2, name: 'Milk', price: 1.2}
            ]);
            shoppingCart.deleteProduct(2);
            expect(shoppingCart.cart).toEqual([]);
        });
    });


    var controller;
    var scope;

    beforeEach(inject(function ($controller) {
        scope = { firstName: 'Dawid',
            lastName: 'Zegar',
            pesel: '91030804353',
            email: 'davvvid1@gmail.com'
        };
        controller = $controller('exerciseCtrl', {$scope: scope});

        //spyOn(controller, 'checkEmail');


    }));
    describe('checkEmail', function () {
        beforeEach(function () {
            controller.checkEmail();
        });
        describe("define variable", function () {
            it("should define person and personsList array", function () {
                expect(controller.person).toBeDefined();
                expect(controller.personsList).toBeDefined();
            });
        });
        describe('return value', function () {

            it('should return true if email has @', function () {
                expect(controller.checkEmail()).toBe(true);
            });
            it('should return false if email don\'t has @', inject(function ($controller) {
                scope.email = 'fakeEmail';
                controller = $controller('exerciseCtrl', {$scope: scope});
                expect(controller.checkEmail()).toBe(false);
            }));

        });
    });
    describe("checkPesel", function () {
        beforeEach(function () {
            controller.checkPesel();
        });
        it("should return true if sumcheck is valid", function () {
            expect(controller.checkPesel()).toBe(true);
        });
        it('should return false if sumcheck is invalid', inject(function ($controller) {
            scope.pesel = '22233344455';
            controller = $controller('exerciseCtrl', {$scope: scope});
            expect(controller.checkPesel()).toBe(false);
        }));
    });
    describe("addPerson", function () {
        beforeEach(function () {
            controller.addPerson();
        });
        it("should modify personsList array", inject(function ($controller) {
            expect(controller.personsList[0]).toEqual(scope);
            scope = { firstName: 'Jan',
                lastName: 'Kowalski',
                pesel: '76010314752',
                email: 'mailik@gmail.com'
            };
            controller = $controller('exerciseCtrl', {$scope: scope});
            controller.addPerson()
            expect(controller.personsList).toEqual([
                { firstName: 'Jan', lastName: 'Kowalski', pesel: '76010314752', email: 'mailik@gmail.com'}
            ]);
        }));
        it("should'n modify personsList array if data isn't valid", inject(function ($controller) {
            expect(controller.personsList[0]).toEqual(scope);
            scope = { firstName: 'Jan',
                lastName: 'Kowalski',
                pesel: '76010314752',
                email: 'gmail.com'
            };
            controller = $controller('exerciseCtrl', {$scope: scope});
            controller.addPerson()
            expect(controller.personsList).toEqual([]);
        }));
    });
});

