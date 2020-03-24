
exports.up = function(knex) { //responsavel apra criação databela
  return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  })
};

exports.down = function(knex) { //se der problema o que eu faço, metodo down
  return knex.schema.dropTable('ongs');
};
