'use strict';

var chai = require('chai');
var expect = chai.expect;
chai.use(require('sinon-chai'));
var sinon = require('sinon');
var appFactory = require('../../app/app');

describe('Old app', function ()
{
    describe('getOwnerById', function ()
    {
        describe('when owner found', function ()
        {
            it('should respond with data retrieved from DB', function ()
            {
                var data;
                var storage;
                var db = {
                    get: function (type, id, callback)
                    {
                        callback(null, storage[type][id]);
                    }
                };
                var spy = sinon.spy();
                var app = appFactory(db);

                data = {id: 1};
                storage = {owner: {1: data}};
                app.getOwnerById(1, spy);
                expect(spy).to.have.been.calledWith(null, data);

                data = {id: 2};
                storage = {owner: {3: data}};
                app.getOwnerById(3, spy);
                expect(spy).to.have.been.calledWith(null, data);
            });
        });

        describe('when owner NOT found', function ()
        {
            it('should respond with error', function ()
            {
                var storage;
                var db = {
                    get: function (type, id, callback)
                    {
                        callback(null, storage[type][id]);
                    }
                };
                var spy = sinon.spy();
                var app = appFactory(db);

                storage = {owner: {}};
                app.getOwnerById(1, spy);
                expect(spy).to.have.been.calledWith(new Error('No owner found with id: 1'));
            });
        });
    });

    describe('getEquipmentById', function ()
    {
        describe('when equipment found', function ()
        {
            it('should respond with data retrieved from DB', function ()
            {
                var data;
                var storage;
                var db = {
                    get: function (type, id, callback)
                    {
                        callback(null, storage[type][id]);
                    }
                };
                var spy = sinon.spy();
                var app = appFactory(db);

                data = {id: 5};
                storage = {equipment: {5: data}};
                app.getEquipmentById(5, spy);
                expect(spy).to.have.been.calledWith(null, data);

                data = {id: 6};
                storage = {equipment: {6: data}};
                app.getEquipmentById(6, spy);
                expect(spy).to.have.been.calledWith(null, data);
            });
        });

        describe('when equipment NOT found', function ()
        {
            it('should respond with error', function ()
            {
                var storage;
                var db = {
                    get: function (type, id, callback)
                    {
                        callback(null, storage[type][id]);
                    }
                };
                var spy = sinon.spy();
                var app = appFactory(db);

                storage = {equipment: {}};
                app.getEquipmentById(1, spy);
                expect(spy).to.have.been.calledWith(new Error('No equipment found with id: 1'));
            });
        });
    });

    describe('getOwnerNameByEquipmentId', function ()
    {
        var app;
        var owner;
        var equipment;
        var storage;

        beforeEach(function ()
        {
            equipment = {
                id: new Date().getTime()
            };
            owner = {
                id: new Date().getTime()
            };
            storage = {
                equipment: {},
                owner: {}
            };
            storage.equipment[equipment.id] = equipment;
            storage.owner[owner.id] = owner;
            var db = {
                get: function (type, id, callback)
                {
                    callback(null, storage[type][id]);
                }
            };
            app = appFactory(db);
        });
        describe('when equipment found', function ()
        {
            describe('and owner found', function ()
            {
                it('should respond with owner`s name', function ()
                {
                    var spy = sinon.spy();
                    owner.name = 'Jack' + new Date().getTime();
                    equipment.owner = owner.id;

                    app.getOwnerNameByEquipmentId(equipment.id, spy);
                    expect(spy).to.have.been.calledWith(null, owner.name);
                });
            });
            describe('and owner NOT found', function ()
            {
                it('should respond with error', function ()
                {
                    var spy = sinon.spy();
                    owner.name = 'Jack' + new Date().getTime();
                    delete equipment.owner;

                    app.getOwnerNameByEquipmentId(equipment.id, spy);
                    expect(spy).to.have.been.calledWith(new Error());
                });
            });

        });

        describe('when equipment is NOT found', function ()
        {
            it('should respond with error', function ()
            {
                var spy = sinon.spy();
                app.getOwnerNameByEquipmentId(equipment.id + 1, spy);
                expect(spy).to.have.been.calledWith(new Error());
            });
        });
    });
});

