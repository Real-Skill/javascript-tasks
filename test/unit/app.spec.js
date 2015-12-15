'use strict';

var chai = require('chai');
var expect = chai.expect;
chai.use(require('sinon-chai'));
var sinon = require('sinon');
var appFactory = require('../../app/app');

describe('New app', function ()
{
    describe('getOwnerById', function ()
    {
        describe('when owner found', function ()
        {
            it('should respond with data retrieved from DB', function ()
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

                storage = {owner: {1: {id: 1}}};
                return app.getOwnerById(1).then(spy).then(function ()
                {
                    storage = {owner: {3: {id: 2}}};
                    return app.getOwnerById(3).then(spy);
                }).finally(function ()
                {
                    expect(spy).to.have.been.calledWith({id: 1});
                    expect(spy).to.have.been.calledWith({id: 2});
                });
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
                return app.getOwnerById(1).catch(spy).finally(function ()
                {
                    expect(spy).to.have.been.calledWith(new Error('No owner found with id: 1'));
                });
            });
        });
    });

    describe('getEquipmentById', function ()
    {
        describe('when equipment found', function ()
        {
            it('should respond with data retrieved from DB', function ()
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

                storage = {equipment: {5: {id: 5}}};
                return app.getEquipmentById(5).then(spy).then(function ()
                        {
                            storage = {equipment: {6: {id: 6}}};
                            return app.getEquipmentById(6).then(spy);
                        })
                        .finally(function ()
                        {
                            expect(spy).to.have.been.calledWith({id: 5});
                            expect(spy).to.have.been.calledWith({id: 6});
                        });
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
                return app.getEquipmentById(1).catch(spy).finally(function ()
                {
                    expect(spy).to.have.been.calledWith(new Error('No equipment found with id: 1'));
                });
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

                    return app.getOwnerNameByEquipmentId(equipment.id).then(spy).finally(function ()
                    {
                        expect(spy).to.have.been.calledWith(owner.name);
                    });
                });
            });
            describe('and owner NOT found', function ()
            {
                it('should respond with error', function ()
                {
                    var spy = sinon.spy();
                    owner.name = 'Jack' + new Date().getTime();
                    delete equipment.owner;

                    return app.getOwnerNameByEquipmentId(equipment.id).catch(spy).finally(function ()
                    {
                        expect(spy).to.have.been.calledWith(new Error());
                    });
                });
            });

        });

        describe('when equipment is NOT found', function ()
        {
            it('should respond with error', function ()
            {
                var spy = sinon.spy();
                return app.getOwnerNameByEquipmentId(equipment.id + 1, spy).catch(spy).finally(function ()
                {
                    expect(spy).to.have.been.calledWith(new Error());
                });
            });
        });
    });
});

