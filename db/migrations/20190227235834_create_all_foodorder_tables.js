
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('menu_type', function(table){
      table.increments('id').primary();
      table.string('name');
    }),
    knex.schema.createTable('menu_items', function(table){
      table.increments('id').primary();
      table.integer('menu_type_id').references('menu_type.id');
      table.string('name');
      table.decimal('price');
      table.string('description');
    }),
    knex.schema.createTable('order_status', function(table){
      table.increments('id').primary();
      table.string('name');
    }),
    knex.schema.createTable('orders', function(table){
      table.increments('id').primary();
      table.integer('status_id').references('order_status.id');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.decimal('total_cost');
      table.string('customer_first_name');
      table.string('customer_last_name');
      table.string('customer_phone_number');
    }),
    knex.schema.createTable('order_menu_items', function(table){
      table.increments('id').primary();
      table.integer('order_id').references('orders.id');
      table.integer('menu_items_id').references('menu_items.id');
      table.integer('quantity');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('order_menu_items'),
    knex.schema.dropTable('orders'),
    knex.schema.dropTable('order_status'),
    knex.schema.dropTable('menu_items'),
    knex.schema.dropTable('menu_type')
  ])
};

