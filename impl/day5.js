/**
 * Created by kronos on 25.08.14.
 */
(function () {
    'use strict';


    window.day5 = {
//  Stworz obiekt ARMORY w ktorym beda  istanialy dwie zmienne prywatne takie jak availableWeapon=['123'], availableArmory=['123'](zainicjowany dla testów)  bedą one tablicami stringow
//  dopisz do tego metody publiczne ktore będą dodawać nowe zbroje i bronie jak też usuwać z nich,gdzie dopuszczalne zboje to "Heavy Armor" i "Light Armor"
//  a dopuszczalne bronie to 'M-16' i 'M-22'


        ARMORY: (function () {
            var availableWeapon = ['123'];
            var availableArmory = ['123'];

            return{
//                Napisz funkcje która będzie dodawać pancerze do listy availableArmory jako kolejne elementy tablicy
//                jako parametr może przyjmować pojedynczy string lub tablice

                addArmory: function (addArmory) {
                    var heavyA = 'Heavy Armor', lightA = 'Light Armor';
                    if (heavyA === addArmory || lightA === addArmory) {
                        availableArmory.push(addArmory);
                        return 0;
                    } else if (addArmory instanceof Array) {
                        for (var i = 0, x = addArmory.length; i < x; i++) {
                            if (lightA === addArmory[i] || heavyA === addArmory[i]) {
                                availableArmory.push(addArmory[i]);


                            } else {
                                return -1;
                            }
                        }
                    } else {
                        return -1;
                    }
                },
//                Napisz funkcje która będzie dodawać bronie do listy availableWeapon jako kolejne elementy tablicy
//                jako parametr może przyjmować pojedynczy string lub tablice

                addWeapon: function (addWeapon) {
                    var possibleWeapon1 = 'M-16', possibleWeapon2 = 'M-22';
                    if (possibleWeapon1 === addWeapon || possibleWeapon2 === addWeapon) {
                        availableWeapon.push(addWeapon);
                        return 0;
                    } else if (addWeapon instanceof Array) {
                        for (var i = 0, x = addWeapon.length; i < x; i++) {
                            if (possibleWeapon1 === addWeapon[i] || possibleWeapon2 === addWeapon[i]) {
                                availableWeapon.push(addWeapon[i]);

                            } else {
                                return -1;
                            }
                        }
                    } else {
                        return -1;
                    }
                },
//                Napisz funckje która będzie wyjmować z tablicy bron i zwracac jeśli ją znajdzie jako parametr może przyjmować
//                string, jeśli natomiast nie znajdzie zwraca undefined

                getWeapon: function (takeWeapon) {

                    for (var i = 0, x = availableWeapon.length; i < x; i++) {
                        if (availableWeapon[i] == takeWeapon) {
                            availableWeapon.splice(i, 1);

                            return takeWeapon;
                        } else {
                            return;
                        }
                    }
                },
//                Napisz funckje która będzie wyjmować z tablicy pancerz i zwracac jeśli ją znajdzie jako parametr może przyjmować
//                string, jeśli natomiast nie znajdzie zwraca undefined
                getArmory: function (takeArmory) {
                    var x = availableArmory.indexOf(takeArmory);
                    if (0 <= x) {
                        availableArmory.splice(x, 1);

                        return takeArmory;
                    } else {
                        return;
                    }

                },
//                Napisz funckje ktora będzie czyścić tablicę availableArmory i zwracać 0
                flushArmory: function () {
                    availableArmory = [];
                    return 0;
                },
//                Napisz funckje ktora będzie czyścić tablicę availableWeapon i zwracać 0
                flushWeapon: function () {
                    availableWeapon = [];
                    return 0;
                },
//                Napisz funckje która będzie zwracać tablicę availableArmory która jest prywatna
                writeAllArmory: function () {

                    return availableArmory;
                },
//                Napisz funckje która będzie zwracać tablicę availableWeapon która jest prywatna
                writeAllWeapon: function () {
                    return availableWeapon;
                }
            };
        })(),

        PetrolStation: function () {
            var gasoline95;
            var gasoline98;
            var oil;
            // Do podanego obiektu stworz metody manipulujace danymi prywatnymi: setFuel, getFuel modifyFuel o argumentach ( choose, liters )
            return {
                setFuel: function (choose, liters) {
                    switch (choose) {
                        case "gasoline95":
                            gasoline95 = liters;
                            break;
                        case "gasoline98":
                            gasoline98 = liters;
                            break;

                        case "oil":
                            oil = liters;
                            break;
                    }

                },
                getFuel: function (choose) {
                    switch (choose) {
                        case "gasoline95":
                            return gasoline95;
                        case "gasoline98":
                            return gasoline98;

                        case "oil":
                            return oil;
                    }

                },
                modifyFuel: function (choose, liters) {
                    switch (choose) {
                        case "gasoline95":
                            gasoline95 += liters;
                            break;
                        case "gasoline98":
                            gasoline98 += liters;
                            break;

                        case "oil":
                            oil += liters;
                            break;

                    }

                },
                // napisz funkcje przyjmujaca  3 argumenty reprezentujace kolejno ilosc tankowanego paliwa (95, 98, diesel) zwracajaca koszt wedlug cen (5.35, 5:56, 5,61), funkcja ma zmniejszasc ilosc paliwa na stacji
                tankFuel: function (gas95, gas98, oill) {
                    this.modifyFuel("gasoline95", -gas95);
                    this.modifyFuel("gasoline98", -gas98);
                    this.modifyFuel("oil", -oill);
                    return Math.round((gas95 * 5.35 + gas98 * 5.56 + oill * 5.61) * 100) / 100;


                }
            };
        }(),
        ShoppingCart: function () {

            var shoppingList = [];
            var sumPrice = 0;
            var sumTax = 0;

            return{

                addProduct: function (product, price, number, percentTax) {
                    try {
                        if ("string" == typeof product &&
                            "number" == typeof price &&
                            "number" == typeof number &&
                            "number" == typeof percentTax) {

                            shoppingList.push([product, price, number, percentTax]);
                        } else {
                            throw new TypeError();
                        }
                    } catch (error) {
                        console.log("TypeError");
                    }

                },

                getShoppingList: function () {
                    return shoppingList;
                },

                getPrice: function () {
                    return sumPrice;
                },

                getTax: function () {
                    return sumTax;
                },

                emptyCart: function () {
                    shoppingList = [];
                },

                countPrice: function () {
                    sumPrice = 0;
                    for (var i = 0, x = shoppingList.length; x > i; i++) {
                        sumPrice += shoppingList[i][1] * shoppingList[i][2];
                    }
                    sumPrice = parseFloat(sumPrice.toFixed(2));
                },

                countTax: function () {
                    sumTax = 0;
                    for (var i = 0, x = shoppingList.length; x > i; i++) {
                        sumTax += shoppingList[i][2] * (shoppingList[i][1] * (shoppingList[i][3] / 100));
                    }
                    sumTax = parseFloat(sumTax.toFixed(2));
                },

                searchProduct: function (name) {
                    if ("string" == typeof name) {
                        for (var i = 0, x = shoppingList.length; x > i; i++) {
                            if (name == shoppingList[i][0]) {
                                return i;
                            }
                        }
                        return false;
                    } else {
                        return false;
                    }
                },

                makeProductObject: function (index) {
                    if (0 <= index && index < shoppingList.length) {
                        return {name: shoppingList[index][0], price: shoppingList[index][1], amount: shoppingList[index][2], taxPercent: shoppingList[index][3]};
                    } else {
                        return false;
                    }
                },

                deleteProduct: function (index) {
                    if (0 <= index && index < shoppingList.length) {
                        shoppingList.splice(index, 1);
                    } else {
                        return false;
                    }

                },

                applyShopping: function () {
                    this.countPrice();
                    this.countTax();
                    this.emptyCart();
                    return sumPrice + sumTax;

                }


            }

        }()
    };


})();