'use strict';

var chance = require('chance').Chance();

function randomKey(len) {
    return chance.string({length: len, pool: 'absheuqwiqoSKMAKSIDJWQo12932197543'});
}

module.exports = {
    keysGenerator: function (k1, k2, k3, k4) {
        return {
            key1: {code: randomKey(k1) || 'SK1iDW27Si21W9aD43A3S'},
            key2: {code: randomKey(k2) || 'ihQeKoqa1q.3Sow2o15'},
            key3: {code: randomKey(k3) || 'SbK9WMQJ-2AA2S2Dio317iD'},
            key4: {code: randomKey(k4) || 'q5521SW7K1wKo91Whiq1ss'}
        };
    },
    findObj: function (o) {
        var max = 0;
        var code;
        for (var i in o) {
            if (o.hasOwnProperty(i)) {
                if (max < o[i].code.length) {
                    max = o[i].code.length;
                    code = o[i];
                }
            }
        }
        return code;
    }
};