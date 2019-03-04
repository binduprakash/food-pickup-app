/*
  Seed 1 : Cleans up all the table data
*/
exports.seed = function(knex, Promise) {
  return knex("order_menu_items")
    .del()
    .then(function() {
      return knex("orders").del();
    })
    .then(function() {
      return knex("order_status").del();
    })
    .then(function() {
      return knex("menu_items").del();
    })
    .then(function() {
      return knex("menu_type").del();
    });
};
