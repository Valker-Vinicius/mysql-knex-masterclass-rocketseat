
exports.up = (knex) =>  knex.schema.createTable('projects', (table) => {
	table.increments('id');
	table.string('title', 255).notNullable();

	table.integer('user_id')
		.unsigned()
		.references('users.id')
		.notNullable()
		.onDelete('CASCADE');

	table.timestamps(true, true);
  });

exports.down = (knex) => knex.schema.dropTable('projects');