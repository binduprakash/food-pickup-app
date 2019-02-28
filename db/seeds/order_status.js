exports.seed = function(knex, Promise) {
  return knex('order_status').del()
    .then(function () {
        return knex.raw('ALTER SEQUENCE IF EXISTS order_status_id_seq RESTART 1').then(function (){
          return Promise.all([
            knex('order_status').insert({name: 'new'}),
            knex('order_status').insert({name: 'in_progress'}),
            knex('order_status').insert({name: 'completed'})
          ]);
        });
    });
};
