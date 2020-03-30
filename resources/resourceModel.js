const db = require('../data/dbConfig.js');

module.exports = {
    addResource,
    getResource
}

function addResource(resource) {
    return db('resource')
        .insert(resource, 'id')
}

function getResource() {
    return db('resource')
}