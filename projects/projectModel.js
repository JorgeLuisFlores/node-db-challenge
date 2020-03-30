const db = require('../data/dbConfig.js');

module.exports = {
    addProject,
    getProjects,
    getProjectById,
    getProjectTask

}

function addProject(project) {
    return db('project')
        .insert(project, 'id')
}

function getProjects() {
    return db('project')
}

function getProjectById(id) {
    return db('project')
        .where({
            id
        })
        .first()
}

function getProjectTask(projectId) {
    return db('task')
        .join('project', 'project.id', 'task.project_id')
        .select('task.id', 'task.description', 'task.notes', 'task.completed')
        .where('task.project_id)', projectId);
}