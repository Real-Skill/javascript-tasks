'use strict';

module.exports = {
    search: function search(phoneCollection) {
        return phoneCollection.find({$text: {$search:'\'Share photos videos\' and movies'}}).project({name: 1, description: 1, _id: 0}).toArray();
    }
};
