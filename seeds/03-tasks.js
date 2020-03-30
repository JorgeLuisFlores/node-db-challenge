exports.seed = function (knex) {
  return knex('task').truncate()
    .then(function () {
      return knex('task').insert([{
        task_description: "Test",
        task_notes: "Test",
        is_completed: false,
        project_id: 2

      }]);
    });
};