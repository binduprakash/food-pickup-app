exports.seed = function(knex, Promise) {
  return knex('menu_items').del()
    .then(function () {
      return knex.raw('ALTER SEQUENCE IF EXISTS menu_items_id_seq RESTART 1').then(function(){
        return knex('menu_type').del().then(function(){
          return knex.raw('ALTER SEQUENCE IF EXISTS menu_type_id_seq RESTART 1').then(function(){
            return Promise.all([
              knex('menu_type').insert({name: 'Appetizers'}),
              knex('menu_type').insert({name: 'Tandoori Creations'}),
              knex('menu_type').insert({name: 'Biryanis'}),
              knex('menu_type').insert({name: 'Breads'}),
              knex('menu_type').insert({name: 'Curries'}),
              knex('menu_type').insert({name: 'Desserts'}),
              knex('menu_type').insert({name: 'Beverages'})
            ]).then(function(){
              return Promise.all([
                knex('menu_items').insert({
                  name: 'Vegetable Samosa',
                  price: 6.00,
                  description:'Triangular flaky stuffed vegetable pastries.',
                  menu_type_id: 1
                }),
                knex('menu_items').insert({
                  name: 'Chili Paneer',
                  price: 12.00,
                  description:'Cottage cheese cooked with onions and bell peppers.',
                  menu_type_id: 1,
                }),
                 knex('menu_items').insert({
                  name: 'Vegetable Pakora',
                  price: 8.00,
                  description:'Mix vegetables are dipped in a spicy chickpea batter and deep fried and served with sauce.',
                  menu_type_id: 1,
                }),
                knex('menu_items').insert({
                  name: 'Chicken Pakora',
                  price: 10.00,
                  description:'Chicken breast in special batter deep fried.',
                  menu_type_id: 1,
                }),
                knex('menu_items').insert({
                  name: 'Fish Pakora',
                  price: 10.00,
                  description:'Cod fish marinated overnight in yogurt & spices deep fried in batter.',
                  menu_type_id: 1,
                }),
                knex('menu_items').insert({
                  name: 'Paneer Tikka',
                  price: 17.00,
                  description:'Cottage cheese and vegetables kabob marinated then cooked in clay oven.',
                  menu_type_id: 2
                }),
                knex('menu_items').insert({
                  name: 'Tandoori Chicken',
                  price: 17.00,
                  description:'Chicken marinated overnight in yogurt, spices, and grilled in spicy clay oven.',
                  menu_type_id: 2
                }),
                knex('menu_items').insert({
                  name: 'Kalmi Chicken Kabob',
                  price: 17.00,
                  description:'Chicken marinated in roasted chickpea flour and cashew cream cooked in clay oven',
                  menu_type_id: 2
                }),
                knex('menu_items').insert({
                  name: 'Tandoori Prawn',
                  price: 19.00,
                  description:'Jumbo prawns marinated in grounded mustard, yogurt and spiced cooked in clay oven.',
                  menu_type_id: 2
                }),
                knex('menu_items').insert({
                  name: 'Lamb Sheekh Kabob',
                  price: 18.00,
                  description:'Ground lamb mixed Indian spices grilled in tandoor.',
                  menu_type_id: 2
                }),
                knex('menu_items').insert({
                  name: 'Vegetable Biryani',
                  price: 15.95,
                  description:'Rice dish cooked with mixed vegetable and spices.',
                  menu_type_id: 3
                }),
                knex('menu_items').insert({
                  name: 'Egg Biryani',
                  price: 16.95,
                  description:'Rice dish cooked with egg and spices.',
                  menu_type_id: 3
                }),
                knex('menu_items').insert({
                  name: 'Lamb Biryani',
                  price: 17.95,
                  description:'Rice dish cooked with lamb and spices.',
                  menu_type_id: 3
                }),
                knex('menu_items').insert({
                  name: 'Chicken Biryani',
                  price: 17.95,
                  description:'Rice dish cooked with chicken and spices.',
                  menu_type_id: 3
                }),
                knex('menu_items').insert({
                  name: 'Shrimp Biryani',
                  price: 20.95,
                  description:'Rice dish cooked with shrimp and spices.',
                  menu_type_id: 3
                }),
                knex('menu_items').insert({
                  name: 'Naan',
                  price: 3.00,
                  description:'Indian leavened bread baked in the tandoor oven.',
                  menu_type_id: 4
                }),
                knex('menu_items').insert({
                  name: 'Garlic & Basil Naan',
                  price: 4.00,
                  description:'Indian leavened bread flavoured with chopped garlic & basil.',
                  menu_type_id: 4
                }),
                knex('menu_items').insert({
                  name: 'Spinach & Cheese Naan',
                  price: 5.00,
                  description:'Leavened bread stuffed with homemade cheese & spinach.',
                  menu_type_id: 4
                }),
                knex('menu_items').insert({
                  name: 'Roti',
                  price: 3.00,
                  description:'Whole wheat bread thin baked in the tandoor oven.',
                  menu_type_id: 4
                }),
                knex('menu_items').insert({
                  name: 'Palak Panner',
                  price: 17.00,
                  description:'Spinach cooked in a creamy sauce with Paneer',
                  menu_type_id: 5
                }),
                knex('menu_items').insert({
                  name: 'Malai Kofta',
                  price: 16.00,
                  description:'Vegetable balls cooked in a tomato-onion cream sauce',
                  menu_type_id: 5
                }),
                knex('menu_items').insert({
                  name: 'Butter Chicken',
                  price: 17.00,
                  description:'Tender pieces of chicken tikka cooked in a creamy tomato sauce.',
                  menu_type_id: 5
                }),
                knex('menu_items').insert({
                  name: 'Chicken Curry',
                  price: 17.00,
                  description:'Chicken cooked in onion and spice based curry.',
                  menu_type_id: 5
                }),
                knex('menu_items').insert({
                  name: 'Lamb Korma',
                  price: 17.00,
                  description:'Tender pieces of lamb cooked in cashew curry sauce.',
                  menu_type_id: 5
                }),
                knex('menu_items').insert({
                  name: 'Kheer',
                  price: 6.00,
                  description:'Rice pudding.',
                  menu_type_id: 6
                }),
                knex('menu_items').insert({
                  name: 'Gulab Jamun',
                  price: 6.00,
                  description:'Sweet milk dumplings dipped in rose water and honey syrup.',
                  menu_type_id: 6
                }),
                knex('menu_items').insert({
                  name: 'Ras Malai',
                  price: 6.00,
                  description:'Sweet milk patties dipped in cardamom flavoured milk with pistachios.',
                  menu_type_id: 6
                }),
                knex('menu_items').insert({
                  name: 'Kulfi',
                  price: 6.00,
                  description:'Home made Indian ice cream with nuts',
                  menu_type_id: 6
                }),
                knex('menu_items').insert({
                  name: 'Mango Lassi',
                  price: 3.00,
                  description:'Refreshing Mango and yoghurt drink',
                  menu_type_id: 7
                }),
                knex('menu_items').insert({
                  name: 'Sweet Lassi',
                  price: 3.00,
                  description:'Yoghurt blended with sugar',
                  menu_type_id: 7
                }),
                knex('menu_items').insert({
                  name: 'Soda',
                  price: 3.00,
                  description:'',
                  menu_type_id: 7
                }),
                knex('menu_items').insert({
                  name: 'Masala Chai',
                  price: 3.00,
                  description:'',
                  menu_type_id: 7
                })
              ])
            });
          });
        });
      });
    })
};
