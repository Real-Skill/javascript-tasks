'use strict';

module.exports = function (db) {

    function getAllPhones() {
    }

    function getPhonesByOS(os) {
    }

    function getPhonesByNetwork(networks) {
    }

    function getPhonesWithConditions() {
    }

    function getPhonesWithWeightRange(range) {
    }

    function countPhonesWithRadio() {
    }

    function groupByTalkTime() {
    }

    function searchInFeatures(phrase, caseSensitive) {
    }

    return {
        getAllPhones: getAllPhones,
        getPhonesByOS: getPhonesByOS,
        getPhonesByNetwork: getPhonesByNetwork,
        getPhonesWithConditions: getPhonesWithConditions,
        getPhonesWithWeightRange: getPhonesWithWeightRange,
        countPhonesWithRadio: countPhonesWithRadio,
        groupByTalkTime: groupByTalkTime,
        searchInFeatures: searchInFeatures
    };
};
