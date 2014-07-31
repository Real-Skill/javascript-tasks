describe('AuthViewCtrl', function () {

    var authView;
    var AuthenticatorMock;
    var CurrentUserMock;
    var gettextCatalogMock;
    var windowMock;
    var locationMock;
    var rootScopeMock;

    describe("login()", function () {
        beforeEach(function () {

            AuthenticatorMock = jasmine.createSpyObj('Authenticator', ['authenticate']);
            AuthenticatorMock.authenticate.andReturn({then: function (callback) {
                callback();
                return this;
            }, catch: function (callback) {
                callback({status: 'status'});
            }});

            CurrentUserMock = jasmine.createSpyObj('CurrentUser', ['reload']);
            CurrentUserMock.reload.andReturn({then: function (callback) {
                callback();

            }});

            gettextCatalogMock = jasmine.createSpyObj('gettextCatalog', ['getString']);
            gettextCatalogMock.getString.andReturn('message');

            windowMock = jasmine.createSpyObj('$window', ['alert']);

            locationMock = jasmine.createSpyObj('$location', ['path']);

            rootScopeMock = jasmine.createSpyObj('$rootScope', ['$broadcast']);

            authView = new AuthViewCtrl(null, null, windowMock, AuthenticatorMock, CurrentUserMock, gettextCatalogMock);
            authView.login();

        });
        describe("when login() is called", function () {
            it("should call Authenticator.authenticate()", function () {
                expect(AuthenticatorMock.authenticate).toHaveBeenCalled();
            });
            it("should call CurrentUser.reload()", function () {
                expect(CurrentUserMock.reload).toHaveBeenCalled();
            });
            describe("when user.tags contain ['training-required']", function () {
                beforeEach(function () {
                    CurrentUserMock = jasmine.createSpyObj('CurrentUser', ['reload']);
                    CurrentUserMock.reload.andReturn({then: function (callback) {
                        callback({tags: ['training-required']});

                    }});
                    authView = new AuthViewCtrl(locationMock, null, windowMock, AuthenticatorMock, CurrentUserMock, gettextCatalogMock);
                    authView.login();
                });
                it("should call $location.path()", function () {
                    expect(locationMock.path).toHaveBeenCalledWith('/training-video');
                });
            });
            describe("when response.status != 412 & !=413", function () {
                it("should call gettextCatalog.getString()", function () {
                    expect(gettextCatalogMock.getString).toHaveBeenCalled();
                });
                it("should call $window.alert()", function () {
                    expect(windowMock.alert).toHaveBeenCalledWith('message');
                });
            });
            describe("when response.status = 412", function () {
                beforeEach(function () {
                    AuthenticatorMock = jasmine.createSpyObj('Authenticator', ['authenticate']);
                    AuthenticatorMock.authenticate.andReturn({then: function (callback) {
                        callback();
                        return this;
                    }, catch: function (callback) {
                        callback({status: 412});
                    }});

                    authView = new AuthViewCtrl(locationMock, rootScopeMock, null, AuthenticatorMock, CurrentUserMock, null);
                    authView.login();

                });
                it("should call $location.path();", function () {
                    expect(locationMock.path).toHaveBeenCalledWith('/background-check-in-progress');
                });
                it("should $rootScope.$broadcast()", function () {
                    expect(rootScopeMock.$broadcast).toHaveBeenCalledWith('event:auth-loginNotRequired');
                });
            });
            describe("when response.status = 413", function () {
                beforeEach(function () {
                    AuthenticatorMock = jasmine.createSpyObj('Authenticator', ['authenticate']);
                    AuthenticatorMock.authenticate.andReturn({then: function (callback) {
                        callback();
                        return this;
                    }, catch: function (callback) {
                        callback({status: 413});
                    }});

                    authView = new AuthViewCtrl(locationMock, rootScopeMock, null, AuthenticatorMock, CurrentUserMock, null);
                    authView.login();

                });
                it("should call $location.path()", function () {
                    expect(locationMock.path).toHaveBeenCalledWith('/application-processing');
                });
                it("should call $rootScope.$broadcast()", function () {
                    expect(rootScopeMock.$broadcast).toHaveBeenCalledWith('event:auth-loginNotRequired');
                });
            });
        });
    });

    describe("logout()", function () {
        beforeEach(function () {

            AuthenticatorMock = jasmine.createSpyObj('Authenticator', ['logout']);

            CurrentUserMock = jasmine.createSpyObj('CurrentUser', ['resolve']);
            CurrentUserMock.resolve.andReturn({then: function (callback) {
                callback();

            }});


            windowMock = jasmine.createSpyObj('$window', ['location']);
            windowMock.location = {reload: jasmine.createSpy()};

            locationMock = jasmine.createSpyObj('$location', ['path']);
            locationMock.path.andReturn({match: function () {
            }});

            authView = new AuthViewCtrl(locationMock, null, windowMock, AuthenticatorMock, CurrentUserMock);
            authView.logout();
        });
        describe("when logout() is called", function () {
            it("should call CurrentUser.resolve()", function () {
                expect(CurrentUserMock.resolve).toHaveBeenCalled();
            });
            it("should call Authenticator.logout()", function () {
                expect(AuthenticatorMock.logout).toHaveBeenCalled();
            });
            describe("when $location.path() is not /dashboard", function () {
                it("should call $location.path()", function () {
                    expect(locationMock.path).toHaveBeenCalledWith('/dashboard');
                });
                it("should not call $window.location.reload()", function () {
                    expect(windowMock.location.reload).not.toHaveBeenCalled();
                });
            });
            describe("when $location.path() is /dashboard", function () {
                beforeEach(function () {
                    locationMock = jasmine.createSpyObj('$location', ['path']);
                    locationMock.path.andReturn({match: function () {
                        return true;
                    }});

                    authView = new AuthViewCtrl(locationMock, null, windowMock, AuthenticatorMock, CurrentUserMock);
                    authView.logout();
                });
                it("should call $window.location.reload()", function () {
                    expect(windowMock.location.reload).toHaveBeenCalled();
                });
                it("should not call $location.path()", function () {
                    expect(locationMock.path).not.toHaveBeenCalledWith('/dashboard');
                });
            });
        });

    });

});