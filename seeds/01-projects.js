exports.seed = function (knex) {
  return knex('project').truncate()
    .then(function () {
      return knex('project').insert([{
          project_name: "Test",
          project_description: "Test",
          is_completed: true
        },
        {
          project_name: "Testing",
          project_description: "Testing",
          is_completed: false
        }

      ]);
    });
};