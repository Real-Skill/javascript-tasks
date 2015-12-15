'use strict';

var chai = require('chai');
var expect = chai.expect;
chai.use(require('sinon-chai'));
var sinon = require('sinon');
var Promise = require('bluebird');
var appFactory = require('../../app/app');

describe('Promisified app', function ()
{

    var httpMock;

    beforeEach(function ()
    {
        httpMock = {
            get: function (url, callback)
            {
                this.callback = callback;
            }
        };
    });

    describe('when httpMock invokes callback with NO error', function ()
    {
        var thenSpy;
        var catchSpy;
        var payload;

        beforeEach(function ()
        {
            var app = appFactory(httpMock);
            thenSpy = sinon.spy();
            catchSpy = sinon.spy();
            payload = new Date();
            //When
            app.get('http://kontestacja.com').then(thenSpy).catch(catchSpy);
            httpMock.callback(null, {body: payload});
            return Promise.delay(1);
        });

        it('should invoke then callback', function ()
        {
            //Then
            expect(thenSpy).to.have.been.calledWith(payload);
        });
        it('should NOT invoke catch callback', function ()
        {
            //Then
            expect(catchSpy).to.have.been.callCount(0);
        });
    });

    describe('when httpMock invokes calback with error', function ()
    {
        var thenSpy;
        var catchSpy;

        beforeEach(function ()
        {
            var app = appFactory(httpMock);
            thenSpy = sinon.spy();
            catchSpy = sinon.spy();
            //When
            app.get('http://kontestacja.com').then(thenSpy).catch(catchSpy);
            httpMock.callback(new Error('No connection to host'));
            return Promise.delay(1);
        });

        it('should invoke catch callback', function ()
        {
            //Then
            expect(catchSpy).to.have.been.calledWith(new Error('No connection to host'));
        });
        it('should NOT invoke then callback', function ()
        {
            //Then
            expect(thenSpy).to.have.been.callCount(0);
        });
    });

});

