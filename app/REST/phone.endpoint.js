(function ()
{
    'use strict';
    var businessContainer = require('../business/business.container');

    module.exports = function (router)
    {
        router.route('/api/phones').get(function (request, respond)
        {
            businessContainer.getPhonesManager(request).search(request.query).then(function (result)
            {
                respond.status(200).send(result);
            }).catch(function (error)
            {
                if ('UNAUTHORIZED' == error) {
                    respond.sendStatus(401);
                } else {
                    respond.sendStatus(500);
                }
            });
        }).post(function (request, respond)
        {
            businessContainer.getPhonesManager(request).createNewOrUpdate(request.body).then(function (result)
            {
                respond.status(201).send(result);
            }).catch(function (error)
            {
                if ('UNAUTHORIZED' === error) {
                    respond.sendStatus(401);
                } else {
                    respond.sendStatus(500);
                }
            });
        });

        router.route('/api/phones/:id').get(function (request, respond)
        {
            businessContainer.getPhonesManager(request).getDetails(request.params.id).then(function (results)
            {
                respond.status(200).send(results);
            }).catch(function (error)
            {
                if ('UNAUTHORIZED' === error) {
                    respond.sendStatus(401);
                } else {
                    respond.sendStatus(500);
                }
            });
        }).delete(function (request, respond)
        {
            businessContainer.getPhonesManager(request).removePhone(request.params.id).then(function ()
            {
                respond.sendStatus(200);
            }).catch(function (error)
            {
                if ('UNAUTHORIZED' === error) {
                    respond.sendStatus(401);
                } else {
                    respond.sendStatus(500);
                }
            });
        });
    };
})();
