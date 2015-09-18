(function ()
{
    'use strict';

    var userManager = require('../business/user.manager');

    module.exports = function (router)
    {
        router.route('/api/user/auth').post(function (request, response)
        {
            userManager.authenticate(request.body.email, request.body.password).then(function (result)
            {
                response.status(200).send({token: result});
            }).catch(function (error)
            {
                if ('UNAUTHORIZED' === error) {
                    response.sendStatus(401);
                } else if ('NOT_FOUND' === error) {
                    response.sendStatus(404);
                } else {
                    response.sendStatus(500);
                }
            });
        });
    };
})();
