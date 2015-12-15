'use strict';

module.exports = function (db)
{

    function getEquipmentById(id, callback)
    {
        db.get('equipment', id, function (error, data)
        {
            if (!data) {
                callback(new Error('No equipment found with id: ' + id));
            } else {
                callback(null, data);
            }
        });
    }

    function getOwnerById(id, callback)
    {
        db.get('owner', id, function (error, data)
        {
            if (!data) {
                callback(new Error('No owner found with id: ' + id));
            } else {
                callback(null, data);
            }
        });
    }

    function getOwnerNameByEquipmentId(id, callback)
    {
        getEquipmentById(id, function (err, equipment)
        {
            if (err) {
                return callback(err);
            }
            getOwnerById(equipment.owner, function (err, owner)
            {
                if (err) {
                    return callback(err);
                }
                callback(null, owner.name);
            });
        });
    }

    return {
        getOwnerNameByEquipmentId: getOwnerNameByEquipmentId,
        getEquipmentById: getEquipmentById,
        getOwnerById: getOwnerById
    };
};
