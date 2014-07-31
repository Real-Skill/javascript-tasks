/**
 * Created by kronos on 25.08.14.
 */
describe('day5', function () {
    var answer = window.day5,
        possibleArmor1 = 'Heavy Armor', possibleArmor2 = 'Light Armor',
        possibleWeapon1 = 'M-16', possibleWeapon2 = 'M-22';
    describe('simpleFunction()', function () {
        beforeEach(function () {
            var value = true;

//            answer.simpleFunction = jasmine.createSpy().andCallFake(function(){});
            spyOn(answer.ARMORY, 'addWeapon');
            answer.ARMORY.addWeapon(possibleWeapon1);


        });
        it('Spy function', function () {
            expect(answer.ARMORY.addWeapon).toHaveBeenCalled();
            expect(answer.ARMORY.addWeapon).toHaveBeenCalledWith(possibleWeapon1);
        });
    });

    describe('ARMORY', function () {
        describe('Testing function flush function', function () {

            it('Should return 0 if flushWeapon is success', function () {
                expect(answer.ARMORY.writeAllWeapon()).toEqual(['123']);
                expect(answer.ARMORY.flushWeapon()).toEqual(0);
                expect(answer.ARMORY.writeAllWeapon()).toEqual([]);

            });

            it('Should return 0 if flushArmory is success', function () {
                expect(answer.ARMORY.writeAllArmory()).toEqual(['123']);
                expect(answer.ARMORY.flushArmory()).toEqual(0);
                expect(answer.ARMORY.writeAllArmory()).toEqual([]);
            });
        });
        describe('Testing function addWeapon', function () {
            it('When argument is a single value', function () {
                expect(answer.ARMORY.addWeapon(2)).toEqual(-1);
                expect(answer.ARMORY.addWeapon('asdad')).toEqual(-1);
                expect(answer.ARMORY.addWeapon(possibleWeapon1)).toEqual(0);
            });

            it('When argument is array', function () {
                expect(answer.ARMORY.addWeapon(['asdad', 'asdas'])).toEqual(-1);
                expect(answer.ARMORY.addWeapon(['asdad', 2])).toEqual(-1);
                expect(answer.ARMORY.addWeapon([3, 2])).toEqual(-1);
                answer.ARMORY.flushWeapon();
                answer.ARMORY.addWeapon([possibleWeapon1, possibleWeapon1, possibleWeapon2]);
                expect(answer.ARMORY.writeAllWeapon()).toEqual([possibleWeapon1, possibleWeapon1, possibleWeapon2]);
            });

        });
        describe('Testing function addArmory', function () {
            it('When argument is a single value', function () {
                expect(answer.ARMORY.addArmory(2)).toEqual(-1);
                expect(answer.ARMORY.addArmory('asdad')).toEqual(-1);
                expect(answer.ARMORY.addArmory(possibleArmor1)).toEqual(0);
                expect(answer.ARMORY.writeAllArmory()).toEqual([possibleArmor1]);
            });

            it('When argument is array', function () {
                answer.ARMORY.flushArmory();
                expect(answer.ARMORY.addArmory(['asdad', 'asdas'])).toEqual(-1);
                expect(answer.ARMORY.addArmory(['asdad', 2])).toEqual(-1);
                expect(answer.ARMORY.addArmory([3, 2])).toEqual(-1);
                answer.ARMORY.flushArmory();
                answer.ARMORY.addArmory([possibleArmor1, possibleArmor1, possibleArmor2]);
                expect(answer.ARMORY.writeAllArmory()).toEqual([possibleArmor1, possibleArmor1, possibleArmor2]);
                answer.ARMORY.flushArmory();
                expect(answer.ARMORY.addArmory([possibleArmor1, possibleArmor1, '3', '2', 2])).toEqual(-1);
                expect(answer.ARMORY.writeAllArmory()).toEqual([possibleArmor1, possibleArmor1]);
            });
        });

        it('Should return a weapon if exist in a list', function () {
            answer.ARMORY.flushWeapon();
            answer.ARMORY.addWeapon(possibleWeapon1);
            answer.ARMORY.addWeapon(possibleWeapon1);
            answer.ARMORY.addWeapon(possibleWeapon1);

            expect(answer.ARMORY.getWeapon()).toEqual(undefined);
            expect(answer.ARMORY.writeAllWeapon()).toEqual([possibleWeapon1, possibleWeapon1, possibleWeapon1]);
            expect(answer.ARMORY.addArmory('asdasd')).toEqual(-1);
            expect(answer.ARMORY.addArmory(['asdasd', 'asdasd', 2, 3])).toEqual(-1);
            expect(answer.ARMORY.addArmory(2)).toEqual(-1);
            expect(answer.ARMORY.getArmory('asdasd')).toBeFalsy();
            expect(answer.ARMORY.getWeapon(possibleWeapon1)).toEqual(possibleWeapon1);

        });

        it('Should return a armory if exist in a list', function () {
            answer.ARMORY.flushArmory();
            answer.ARMORY.addArmory(possibleArmor1);
            answer.ARMORY.addArmory(possibleArmor1);
            answer.ARMORY.addArmory(possibleArmor2);
            expect(answer.ARMORY.getArmory(possibleArmor1)).toEqual(possibleArmor1);
            expect(answer.ARMORY.getArmory(possibleArmor1)).toEqual(possibleArmor1);
            expect(answer.ARMORY.getArmory(possibleArmor1)).toBeFalsy();

            expect(answer.ARMORY.getArmory(possibleArmor2)).toEqual(possibleArmor2);
            expect(answer.ARMORY.getArmory(possibleArmor2)).toBeFalsy();
        });

    });

    describe('PetrolStation. set get Fuel', function () {
        beforeEach(function () {
            answer.PetrolStation.setFuel("gasoline95", 1873);
            answer.PetrolStation.setFuel("gasoline98", 765);
            answer.PetrolStation.setFuel("oil", 4485);

        });

        it('should return correct amount of fuel', function () {
            expect(answer.PetrolStation.getFuel("oil")).toEqual(4485);
            expect(answer.PetrolStation.getFuel("gasoline95")).toEqual(1873);
            answer.PetrolStation.setFuel("gasoline95", 2340);
            expect(answer.PetrolStation.getFuel("gasoline95")).toEqual(2340);
            expect(answer.PetrolStation.getFuel("gasoline98")).toEqual(765);
        });
    });
    describe('PetrolStation.tankFuel', function () {
        beforeEach(function () {
            answer.PetrolStation.setFuel("gasoline95", 1873);
            answer.PetrolStation.setFuel("gasoline98", 765);
            answer.PetrolStation.setFuel("oil", 4485);

        });

        it('should return cost of fuel', function () {
            expect(answer.PetrolStation.tankFuel(10, 0, 0)).toEqual(53.5);
            expect(answer.PetrolStation.tankFuel(0, 0, 0)).toEqual(0);
            expect(answer.PetrolStation.tankFuel(0, 12, 7)).toEqual(105.99);
            expect(answer.PetrolStation.tankFuel(1, 1, 1)).toEqual(16.52);

        });
        it('should return cost of fuel and change amount of fuel', function () {
            expect(answer.PetrolStation.getFuel("gasoline98")).toEqual(765);
            expect(answer.PetrolStation.tankFuel(0, 2, 0)).toEqual(11.12);
            expect(answer.PetrolStation.getFuel("gasoline98")).toEqual(763);
            expect(answer.PetrolStation.tankFuel(99, 0, 123)).toEqual(1219.68);
            expect(answer.PetrolStation.getFuel("gasoline95")).toEqual(1774);

        });
    });

    describe('ShoppingCart', function () {

        afterEach(function () {
            answer.ShoppingCart.emptyCart();
        });

        describe('getShoppingList', function () {
            it('should return shopping list', function () {
                answer.ShoppingCart.addProduct("milk", 1.2, 2, 7);
                expect(answer.ShoppingCart.getShoppingList()).toEqual([
                    ["milk", 1.2, 2, 7]
                ]);
                answer.ShoppingCart.addProduct("apple", 0.5, 10, 23);
                expect(answer.ShoppingCart.getShoppingList()).toEqual([
                    ["milk", 1.2, 2, 7],
                    ["apple", 0.5, 10, 23]
                ]);
                answer.ShoppingCart.addProduct("butter", 2.5, 1, 8);
                expect(answer.ShoppingCart.getShoppingList()).toEqual([
                    ["milk", 1.2, 2, 7],
                    ["apple", 0.5, 10, 23],
                    ["butter", 2.5, 1, 8]
                ]);
            });

        });

        describe('addProduct', function () {

            it('should add product to shopping list', function () {
                answer.ShoppingCart.addProduct("milk", 1.2, 2, 7);
                expect(answer.ShoppingCart.getShoppingList()).toEqual([
                    ["milk", 1.2, 2, 7]
                ]);
                answer.ShoppingCart.addProduct("apple", 0.5, 10, 23);
                expect(answer.ShoppingCart.getShoppingList()).toEqual([
                    ["milk", 1.2, 2, 7],
                    ["apple", 0.5, 10, 23]
                ]);
                answer.ShoppingCart.addProduct("butter", 2.5, 1, 8);
                expect(answer.ShoppingCart.getShoppingList()).toEqual([
                    ["milk", 1.2, 2, 7],
                    ["apple", 0.5, 10, 23],
                    ["butter", 2.5, 1, 8]
                ]);

            });

            it('should not modified shopping list if type of parameters not match', function () {
                answer.ShoppingCart.addProduct(2, 1.2, 2, 7);
                expect(answer.ShoppingCart.getShoppingList()).not.toEqual([
                    [2, 1.2, 2, 7]
                ]);
                expect(answer.ShoppingCart.getShoppingList()).toEqual([]);
                answer.ShoppingCart.addProduct("milk", "1.2", 2, 7);
                expect(answer.ShoppingCart.getShoppingList()).toEqual([]);
                expect(answer.ShoppingCart.getShoppingList()).not.toEqual([
                    ["milk", "1.2", 2, 7]
                ]);
                answer.ShoppingCart.addProduct("milk", 1.2, "one", 7);
                expect(answer.ShoppingCart.getShoppingList()).toEqual([]);
                expect(answer.ShoppingCart.getShoppingList()).not.toEqual([
                    ["milk", 1.2, "one", 7]
                ]);
                answer.ShoppingCart.addProduct("milk", 1.2, 1, "tax free");
                expect(answer.ShoppingCart.getShoppingList()).toEqual([]);
                expect(answer.ShoppingCart.getShoppingList()).not.toEqual([
                    ["milk", 1.2, 1, "tax free"]
                ]);
            });
        });

        describe('countPrice', function () {

            it('should count sum of price all product in shopping cart', function () {
                answer.ShoppingCart.addProduct("milk", 1.2, 2, 7);
                answer.ShoppingCart.countPrice();
                expect(answer.ShoppingCart.getPrice()).toEqual(2.4);
                answer.ShoppingCart.addProduct("apple", 0.5, 10, 23);
                answer.ShoppingCart.countPrice();
                expect(answer.ShoppingCart.getPrice()).toEqual(7.4);
                answer.ShoppingCart.addProduct("butter", 2.5, 1, 8);
                answer.ShoppingCart.countPrice();
                expect(answer.ShoppingCart.getPrice()).toEqual(9.9);
            });

        });

        describe('countTax', function () {

            it('should count sum of tax all product in shopping cart', function () {
                answer.ShoppingCart.addProduct("milk", 1.2, 2, 7);
                answer.ShoppingCart.countTax();
                expect(answer.ShoppingCart.getTax()).toEqual(0.17);
                answer.ShoppingCart.addProduct("apple", 0.5, 10, 23);
                answer.ShoppingCart.countTax();
                expect(answer.ShoppingCart.getTax()).toEqual(1.32);
                answer.ShoppingCart.addProduct("butter", 2.5, 1, 8);
                answer.ShoppingCart.countTax();
                expect(answer.ShoppingCart.getTax()).toEqual(1.52);
            });

        });

        describe('searchProduct', function () {
            beforeEach(function () {
                answer.ShoppingCart.addProduct("milk", 1.2, 2, 7);
                answer.ShoppingCart.addProduct("apple", 0.5, 10, 23);
                answer.ShoppingCart.addProduct("butter", 2.5, 1, 8);
            });
            it('should return index of product', function () {

                expect(answer.ShoppingCart.searchProduct("apple")).toEqual(1);
                expect(answer.ShoppingCart.searchProduct("milk")).toEqual(0);
                expect(answer.ShoppingCart.searchProduct("butter")).toEqual(2);
            });
            it('should return false if product not exist', function () {

                expect(answer.ShoppingCart.searchProduct("tea")).toBe(false);
                expect(answer.ShoppingCart.searchProduct("flour")).toBe(false);
                expect(answer.ShoppingCart.searchProduct("toy")).toBe(false);

            });
            it('should return false if name of product is not string', function () {

                expect(answer.ShoppingCart.searchProduct(7)).toBe(false);
                expect(answer.ShoppingCart.searchProduct(undefined)).toBe(false);
                expect(answer.ShoppingCart.searchProduct(12.12)).toBe(false);

            });

        });

        describe('makeProductObject', function () {

            beforeEach(function () {
                answer.ShoppingCart.addProduct("milk", 1.2, 2, 7);
                answer.ShoppingCart.addProduct("apple", 0.5, 10, 23);
                answer.ShoppingCart.addProduct("butter", 2.5, 1, 8);
            });

            it('should return object from shopping list', function () {
                expect(answer.ShoppingCart.makeProductObject(0)).toEqual({ name: 'milk', price: 1.2, amount: 2, taxPercent: 7});
                expect(answer.ShoppingCart.makeProductObject(1)).toEqual({ name: 'apple', price: 0.5, amount: 10, taxPercent: 23});
                expect(answer.ShoppingCart.makeProductObject(2)).toEqual({ name: 'butter', price: 2.5, amount: 1, taxPercent: 8});
            });

            it('should return false if index not exist', function () {
                expect(answer.ShoppingCart.makeProductObject(3)).toBe(false);
                expect(answer.ShoppingCart.makeProductObject(5)).toBe(false);
                expect(answer.ShoppingCart.makeProductObject(10)).toBe(false);
                expect(answer.ShoppingCart.makeProductObject(-1)).toBe(false);
                expect(answer.ShoppingCart.makeProductObject(-3)).toBe(false);
                expect(answer.ShoppingCart.makeProductObject(-7)).toBe(false);
            });
        });

        describe('deleteProduct', function () {

            beforeEach(function () {
                answer.ShoppingCart.addProduct("milk", 1.2, 2, 7);
                answer.ShoppingCart.addProduct("apple", 0.5, 10, 23);
                answer.ShoppingCart.addProduct("butter", 2.5, 1, 8);
                answer.ShoppingCart.addProduct("cake", 5, 2, 23);
                answer.ShoppingCart.addProduct("beer", 2.5, 20, 8);
                answer.ShoppingCart.addProduct("bread", 1.5, 2, 7);
            });

            it('should delete product from shopping list', function () {
                answer.ShoppingCart.deleteProduct(4);
                expect(answer.ShoppingCart.getShoppingList()).not.toEqual([
                    ["milk", 1.2, 2, 7],
                    ["apple", 0.5, 10, 23],
                    ["butter", 2.5, 1, 8],
                    ["cake", 5, 2, 23],
                    ["beer", 2.5, 20, 8],
                    ["bread", 1.5, 2, 7]
                ]);
                expect(answer.ShoppingCart.getShoppingList()).toEqual([
                    ["milk", 1.2, 2, 7],
                    ["apple", 0.5, 10, 23],
                    ["butter", 2.5, 1, 8],
                    ["cake", 5, 2, 23],
                    ["bread", 1.5, 2, 7]
                ]);
                answer.ShoppingCart.deleteProduct(0);
                expect(answer.ShoppingCart.getShoppingList()).toEqual([
                    ["apple", 0.5, 10, 23],
                    ["butter", 2.5, 1, 8],
                    ["cake", 5, 2, 23],
                    ["bread", 1.5, 2, 7]
                ]);
                answer.ShoppingCart.deleteProduct(0);
                expect(answer.ShoppingCart.getShoppingList()).toEqual([
                    ["butter", 2.5, 1, 8],
                    ["cake", 5, 2, 23],
                    ["bread", 1.5, 2, 7]
                ]);
                answer.ShoppingCart.deleteProduct(2);
                expect(answer.ShoppingCart.getShoppingList()).toEqual([
                    ["butter", 2.5, 1, 8],
                    ["cake", 5, 2, 23]
                ]);
                answer.ShoppingCart.deleteProduct(1);
                expect(answer.ShoppingCart.getShoppingList()).toEqual([
                    ["butter", 2.5, 1, 8]
                ]);

            });

            it('should return false if index not exist', function () {
                expect(answer.ShoppingCart.deleteProduct(6)).toBe(false);
                expect(answer.ShoppingCart.deleteProduct(8)).toBe(false);
                expect(answer.ShoppingCart.deleteProduct(10)).toBe(false);
                expect(answer.ShoppingCart.deleteProduct(-1)).toBe(false);
                expect(answer.ShoppingCart.deleteProduct(-3)).toBe(false);
                expect(answer.ShoppingCart.deleteProduct(-7)).toBe(false);
            });
        });

        describe('applyShopping', function () {

            it('should call countPrice', function () {
                spyOn(answer.ShoppingCart, 'countPrice');
                answer.ShoppingCart.applyShopping();
                expect(answer.ShoppingCart.countPrice).toHaveBeenCalled();
            });

            it('should call countTax', function () {
                spyOn(answer.ShoppingCart, 'countTax');
                answer.ShoppingCart.applyShopping();
                expect(answer.ShoppingCart.countTax).toHaveBeenCalled();
            });

            it('should call emptyCart', function () {
                spyOn(answer.ShoppingCart, 'emptyCart');
                answer.ShoppingCart.applyShopping();
                expect(answer.ShoppingCart.emptyCart).toHaveBeenCalled();
            });

            it('should return price with tax', function () {
                answer.ShoppingCart.addProduct("milk", 1.2, 2, 7);
                answer.ShoppingCart.addProduct("apple", 0.5, 10, 23);
                answer.ShoppingCart.addProduct("butter", 2.5, 1, 8);
                answer.ShoppingCart.addProduct("cake", 5, 2, 23);
                expect(answer.ShoppingCart.applyShopping()).toEqual(23.72);
                answer.ShoppingCart.addProduct("beer", 2.5, 20, 8);
                answer.ShoppingCart.addProduct("bread", 1.5, 2, 7);
                expect(answer.ShoppingCart.applyShopping()).toEqual(57.21);
            });
        });


    });


});