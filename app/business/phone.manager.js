(function ()
{
    'use strict';
    var phoneDAO = require('../DAO/phoneDAO');
    var security = require('./security');

    function create(context)
    {
        if (null == context) {
            throw new Error('Context may not be null');
        }
        function search(query)
        {
            return phoneDAO.search(query);
        }

        function createNewOrUpdate(phone)
        {
            return security.isAuthenticated(context).then(function ()
            {
                return phoneDAO.createNewOrUpdate(phone);
            });
        }

        function getDetails(phoneId)
        {
            return security.isAuthenticated(context).then(function ()
            {
                return phoneDAO.getDetails(phoneId);
            });
        }

        function removePhone(phoneId)
        {
            return security.isAuthenticated(context).then(function ()
            {

                return phoneDAO.removePhone(phoneId);
            });
        }

        return {
            search: search,
            removePhone: removePhone,
            getDetails: getDetails,
            createNewOrUpdate: createNewOrUpdate
        };
    }

    module.exports = {
        create: create
    };

})();
