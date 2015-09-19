'use strict';

var validToken;

module.exports = {
    authenticate: function (token) {
        return validToken === token;
    },
    setValidToken: function (token) {
        validToken = token;
    }
};
