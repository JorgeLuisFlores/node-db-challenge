exports.up = function (knex) {
    return knex.schema
        .createTable('project', tbl => {
            tbl.increments()
                .unique();
            tbl.text('project_name', 128)
                .notNullable();
            tbl.text('project_description', 128);
            tbl.boolean('is_completed', false)
                .notNullable();


        })


        .createTable('resource', tbl => {
            tbl.increments()
                .unique();
            tbl.text('resource_name', 128)
                .notNullable()
                .unique();
            tbl.text('resource_description', 128);

            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');;

        })


        .createTable('task', tbl => {
            tbl.increments()
                .unique();
            tbl.text('task_description', 128)
                .notNullable();
            tbl.text('task_notes', 128);
            tbl.boolean('is_completed', false)
                .notNullable();

            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');;

        });

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('project')
        .dropTableIfExists('resource')
        .dropTableIfExists('task');

};