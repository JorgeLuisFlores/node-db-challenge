const db = require('../data/dbConfig.js');

module.exports = {
    addTask,
    getTask,
    getTaskbyID
}

function addTask(task) {
    return db('task')
        .insert(task, 'id')
}

function getTask() {
    return db('task');
}

function getTaskbyID(id) {
    return db('posts')
        .where({
            id
        })
        .first();
}