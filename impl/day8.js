/**
 * Created by piniu on 01.09.14.
 */
(function () {
    'use strict';

    function ShoppingCartCtrl() {

        this.cart = [];

        this.addProduct = function (product) {
            if (null == product.id) {
                if (0 == this.cart.length) {
                    product.id = 0;
                } else {
                    product.id = this.cart[this.cart.length - 1].id + 1;
                }
                this.cart.push(product);
            } else {
                for (var i in this.cart) {
                    if (this.cart[i].id == product.id) {
                        this.cart[i] = product;
                    }

                }

            }

        };

        this.deleteProduct = function (id) {
            for (var i = 0; this.cart.length > i; i++) {
                if (this.cart[i].id == id) {
                    this.cart.splice(i, 1);
                }

            }
        };

    }

    var module = angular.module('day8App', []);
    module.controller('ShoppingCartCtrl', [ShoppingCartCtrl]);


    var exerciseCtrl = function ($scope) {
        this.personsList = [];
        this.person = { firstName: $scope.firstName,
            lastName: $scope.lastName,
            pesel: $scope.pesel,
            email: $scope.email
        }
        this.checkEmail = function () {
            if (this.person.email.indexOf("@") > -1) {
                return true;
            }
            else {
                return false;
            }

        }
        this.checkPesel = function () {
            var pes = this.person.pesel;
            if (pes.length == 11 && ( parseInt(pes[0]) + 3 * parseInt(pes[1]) + 7 * parseInt(pes[2]) + 9 * parseInt(pes[3]) + parseInt(pes[4]) + 3 * parseInt(pes[5]) + 7 * parseInt(pes[6]) + 9 * parseInt(pes[7]) + parseInt(pes[8]) + 3 * parseInt(pes[9]) + parseInt(pes[10]) ) % 10 == 0) {
                return true;
            }
            else {
                return false;
            }
        }

        this.addPerson = function () {
            if (this.checkPesel() && this.checkEmail()) {
                this.personsList.push(this.person);
            }
        }
    }

    module.controller('exerciseCtrl', ['$scope', exerciseCtrl]);

})();