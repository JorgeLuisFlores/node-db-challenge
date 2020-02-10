exports.seed = function (knex) {
  return knex('resource').truncate()
    .then(function () {
      return knex('resource').insert([{
        resource_name: "Test",
        resource_description: "Test",
        project_id: 2

      }]);
    });
};