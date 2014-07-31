'use strict';

/*jshint unused:false*/
function successfulPromise() {
    var theArguments = arguments;
    return {
        then: function (callback) {
            callback.apply(null, theArguments);
            return this;
        },
        catch: function () {
            return this;
        },
        finally: function (callback) {
            callback.apply(null, theArguments);
            return this;
        }
    };
}
function unsuccessfulPromise() {
    var theArguments = arguments;
    return {
        then: function () {
            return this;
        },
        catch: function (callback) {
            callback.apply(null, theArguments);
            return this;
        },
        finally: function (callback) {
            callback.apply(null, theArguments);
            return this;
        }
    };
}

function mockGettext(translation) {
    var gettextCatalog = jasmine.createSpyObj('gettextCatalog', ['getString']);
    gettextCatalog.getString.andCallFake(function (key) {
        return translation[key];
    });
    return gettextCatalog;
}

function io(url) {
    return {
        on: function (name, callback) {
            callback();
        },
        destroy: function () {
        },
        emit: function (name, data) {
            this.lastEmit[name] = data;
        },
        lastEmit: {}
    }
};
