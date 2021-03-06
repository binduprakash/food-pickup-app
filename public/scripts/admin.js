/*
  Function to load all the order by making GET api call to server
*/
function loadOrders() {
  $.ajax("/admin/orders_json", { method: "GET" }).then(function(ordersJson) {
    renderOrders(ordersJson);
  });
}

/*
  Function to render all the orders according to the order status
*/
function renderOrders(orders) {
  orders.forEach(function() {
    orders.sort(function(a, b) {
      if (a.created_at < b.created_at) {
        return 1;
      }
      if (a.created_at > b.created_at) {
        return -1;
      }
    });
  });
  orders.forEach(function(order) {
    var $order = createOrderElement(order);
    if (order.name == "new") {
      $("#new_orders ul.order_type").append($order);
    } else if (order.name == "in_progress") {
      $("#in_progress_orders ul.order_type").append($order);
    } else if (order.name == "completed") {
      $("#completed_orders ul.order_type").append($order);
    }
  });
}

/*
  Function to create order element as a li tag
*/
function createOrderElement(order) {
  let $liTag = $("<li>").addClass("li");
  let $aTag = $("<a>").attr("href", "/admin/order_edit/?order_id=" + order.id);
  $aTag.text("#" + order.id + " - " + order.customer_first_name + " " + order.customer_last_name);
  $liTag.append($aTag);
  return $liTag;
}

$(document).ready(function() {
  // Load all the order once page is completed loading.
  loadOrders();
});
