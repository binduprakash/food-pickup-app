/*
  Seed 3 : This file seeds order status data and sample orders for all the order status
*/
exports.seed = function(knex, Promise) {
  return knex("order_status")
    .del()
    .then(function() {
      return knex.raw("ALTER SEQUENCE IF EXISTS order_status_id_seq RESTART 1").then(function() {
        return Promise.all([
          knex("order_status").insert({ id: 1, name: "new" }),
          knex("order_status").insert({ id: 2, name: "in_progress" }),
          knex("order_status").insert({ id: 3, name: "completed" }),
          knex("order_status").insert({ id: 4, name: "deleted"})
        ]).then(function() {
          return knex("order_menu_items")
            .del()
            .then(function() {
              return knex("orders")
                .del()
                .then(function() {
                  return knex.raw("ALTER SEQUENCE IF EXISTS orders_id_seq RESTART 1").then(function() {
                    return Promise.all([
                      knex("orders").insert({
                        status_id: 1,
                        total_cost: 97.0,
                        customer_first_name: "Bindu",
                        customer_last_name: "Prakash",
                        customer_phone_number: "+16046006082"
                      }),
                      knex("orders").insert({
                        status_id: 1,
                        total_cost: 63.45,
                        customer_first_name: "John",
                        customer_last_name: "Connolly",
                        customer_phone_number: "+17788775276"
                      }),
                      knex("orders").insert({
                        status_id: 1,
                        total_cost: 10.3,
                        customer_first_name: "Tyler",
                        customer_last_name: "Tomczyk",
                        customer_phone_number: "+17789274265"
                      }),
                      knex("orders").insert({
                        status_id: 2,
                        total_cost: 75.5,
                        customer_first_name: "John",
                        customer_last_name: "Connolly",
                        customer_phone_number: "+17788775276"
                      }),
                      knex("orders").insert({
                        status_id: 2,
                        total_cost: 87.0,
                        customer_first_name: "Tyler",
                        customer_last_name: "Tomczyk",
                        customer_phone_number: "+17789274265"
                      }),
                      knex("orders").insert({
                        status_id: 2,
                        total_cost: 76.0,
                        customer_first_name: "Bindu",
                        customer_last_name: "Prakash",
                        customer_phone_number: "+16046006082"
                      }),
                      knex("orders").insert({
                        status_id: 3,
                        total_cost: 87.55,
                        customer_first_name: "Tyler",
                        customer_last_name: "Tomczyk",
                        customer_phone_number: "+17789274265"
                      }),
                      knex("orders").insert({
                        status_id: 3,
                        total_cost: 19.95,
                        customer_first_name: "Bindu",
                        customer_last_name: "Prakash",
                        customer_phone_number: "+16046006082"
                      }),
                      knex("orders").insert({
                        status_id: 3,
                        total_cost: 47.8,
                        customer_first_name: "John",
                        customer_last_name: "Connolly",
                        customer_phone_number: "+17788775276"
                      })
                    ]).then(function() {
                      return Promise.all([
                        knex("order_menu_items").insert({
                          order_id: 1,
                          menu_items_id: 3,
                          quantity: 2
                        }),
                        knex("order_menu_items").insert({
                          order_id: 1,
                          menu_items_id: 12,
                          quantity: 1
                        }),
                        knex("order_menu_items").insert({
                          order_id: 1,
                          menu_items_id: 18,
                          quantity: 2
                        }),
                        knex("order_menu_items").insert({
                          order_id: 2,
                          menu_items_id: 30,
                          quantity: 2
                        }),
                        knex("order_menu_items").insert({
                          order_id: 2,
                          menu_items_id: 32,
                          quantity: 2
                        }),
                        knex("order_menu_items").insert({
                          order_id: 2,
                          menu_items_id: 14,
                          quantity: 1
                        }),
                        knex("order_menu_items").insert({
                          order_id: 3,
                          menu_items_id: 17,
                          quantity: 2
                        }),
                        knex("order_menu_items").insert({
                          order_id: 3,
                          menu_items_id: 24,
                          quantity: 1
                        }),
                        knex("order_menu_items").insert({
                          order_id: 3,
                          menu_items_id: 15,
                          quantity: 2
                        }),
                        knex("order_menu_items").insert({
                          order_id: 4,
                          menu_items_id: 23,
                          quantity: 2
                        }),
                        knex("order_menu_items").insert({
                          order_id: 4,
                          menu_items_id: 12,
                          quantity: 1
                        }),
                        knex("order_menu_items").insert({
                          order_id: 4,
                          menu_items_id: 28,
                          quantity: 2
                        }),
                        knex("order_menu_items").insert({
                          order_id: 5,
                          menu_items_id: 13,
                          quantity: 2
                        }),
                        knex("order_menu_items").insert({
                          order_id: 5,
                          menu_items_id: 8,
                          quantity: 1
                        }),
                        knex("order_menu_items").insert({
                          order_id: 5,
                          menu_items_id: 18,
                          quantity: 2
                        }),
                        knex("order_menu_items").insert({
                          order_id: 6,
                          menu_items_id: 13,
                          quantity: 2
                        }),
                        knex("order_menu_items").insert({
                          order_id: 6,
                          menu_items_id: 27,
                          quantity: 1
                        }),
                        knex("order_menu_items").insert({
                          order_id: 6,
                          menu_items_id: 19,
                          quantity: 2
                        }),
                        knex("order_menu_items").insert({
                          order_id: 7,
                          menu_items_id: 16,
                          quantity: 2
                        }),
                        knex("order_menu_items").insert({
                          order_id: 7,
                          menu_items_id: 12,
                          quantity: 1
                        }),
                        knex("order_menu_items").insert({
                          order_id: 7,
                          menu_items_id: 28,
                          quantity: 2
                        }),
                        knex("order_menu_items").insert({
                          order_id: 8,
                          menu_items_id: 19,
                          quantity: 2
                        }),
                        knex("order_menu_items").insert({
                          order_id: 8,
                          menu_items_id: 7,
                          quantity: 1
                        }),
                        knex("order_menu_items").insert({
                          order_id: 8,
                          menu_items_id: 6,
                          quantity: 2
                        }),
                        knex("order_menu_items").insert({
                          order_id: 9,
                          menu_items_id: 4,
                          quantity: 2
                        }),
                        knex("order_menu_items").insert({
                          order_id: 9,
                          menu_items_id: 12,
                          quantity: 1
                        }),
                        knex("order_menu_items").insert({
                          order_id: 9,
                          menu_items_id: 31,
                          quantity: 2
                        })
                      ]);
                    });
                  });
                });
            });
        });
      });
    });
};
