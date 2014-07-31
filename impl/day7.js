(function () {
    'use strict';

    function AuthViewCtrl($location, $rootScope, $window, Authenticator, CurrentUser, gettextCatalog) {
        this.credentials = {email: null, password: null};

        //noinspection JSUnusedGlobalSymbols
        /**
         * Template binds to this field, so it is actually used. Ignore the IDE.
         */
        this.remindPassword = false;

        this.login = function () {
            Authenticator.authenticate(this.credentials.email, this.credentials.password).then(function () {
                CurrentUser.reload().then(function (user) {
                    if (user && user._source && user._source.tags && -1 < user._source.tags.indexOf('training-required')) {
                        $location.path('/training-video');
                    }
                });
            }).catch(function (response) {
                if (412 === response.status) {
                    $location.path('/background-check-in-progress');
                    $rootScope.$broadcast('event:auth-loginNotRequired');
                } else if (413 === response.status) {
                    $location.path('/application-processing');
                    $rootScope.$broadcast('event:auth-loginNotRequired');
                } else {
                    var msg = gettextCatalog.getString('Incorrect password, please try again');
                    $window.alert(msg);
                }
            });
        };

        this.logout = function () {
            CurrentUser.resolve().then(function () {
                if ($location.path().match(/^\/dashboard$/)) {
                    $window.location.reload();
                } else {
                    $location.path('/dashboard');
                }
                Authenticator.logout();
            });

        };
    }

    var module = angular.module('day7App', []);
    module.controller('AuthViewCtrl', ['$location', '$rootScope', '$window', 'Authenticator', 'CurrentUser', 'gettextCatalog', AuthViewCtrl]);
})();