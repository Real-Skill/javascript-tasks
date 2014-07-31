describe('AuthViewCtrl', function () {
    'use strict';

    beforeEach(module('day7App'));
    var CurrentUserMock;
    var gettextCatalogMock;
    var locationMock;
    var spy;
    var controller;
    var authenticatorMock;

    beforeEach(function () {
        authenticatorMock = jasmine.createSpyObj('Authenticator', ['authenticate', 'logout']);
        gettextCatalogMock = mockGettext({'Incorrect password, please try again': 'Shagadelic'});
        locationMock = jasmine.createSpyObj('$location', ['path']);
        CurrentUserMock = jasmine.createSpyObj('CurrentUser', ['resolve']);
    });

    describe('login', function () {
        describe('on failure', function () {

            beforeEach(inject(function ($controller, $window) {
                $window.alert = jasmine.createSpy('alert');
                authenticatorMock.authenticate.andReturn(unsuccessfulPromise({status: 401}));

                controller = $controller('AuthViewCtrl', {$location: locationMock, Authenticator: authenticatorMock, CurrentUser: CurrentUserMock, gettextCatalog: gettextCatalogMock});
                controller.login('admin', 'pass');
            }));
            it('should display internationalized message', inject(function ($window) {
                expect($window.alert).toHaveBeenCalledWith('Shagadelic');
            }));
        });
    });

    describe('logout', function () {
        beforeEach(inject(function ($controller, $window) {
            spy = spyOn($window.location, 'reload').andReturn(null);

            controller = $controller('AuthViewCtrl', {$location: locationMock, Authenticator: authenticatorMock, CurrentUser: CurrentUserMock, gettextCatalog: gettextCatalogMock});
        }));
        function itShouldDelegateToAuthenticator() {
            it('should delegate to Authenticator', function () {
                expect(authenticatorMock.logout).toHaveBeenCalled();
            });
        }

        beforeEach(function () {
            CurrentUserMock.resolve.andReturn(successfulPromise());
        });
        describe('and current page is /dashboard', function () {
            beforeEach(function () {
                locationMock.path.andReturn('/dashboard');
                controller.logout();
            });
            it('should reload the page', function () {
                expect(spy).toHaveBeenCalled();
            });
            itShouldDelegateToAuthenticator();
        });
        describe('and current page is not dashboard', function () {
            beforeEach(function () {
                locationMock.path.andReturn('/dashboards');
                controller.logout();
            });
            it('should redirect to /dashboard', function () {
                expect(locationMock.path).toHaveBeenCalledWith('/dashboard');
            });
            itShouldDelegateToAuthenticator();
        });
    });
});