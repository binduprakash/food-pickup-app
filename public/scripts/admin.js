function loadOrders() {
  $.ajax("/admin/orders_json", {method: 'GET'})
    .then(function(ordersJson) {
      renderOrders(ordersJson);
    }
  );
}

function getFormattedTime(createdAt){
  let today = new Date();
  createdAt = new Date(createdAt);
  let timeDiffInSeconds = (today.getTime() - createdAt.getTime()) / 1000;
  if (timeDiffInSeconds < 1){
    return 'Just now';
  } else if (timeDiffInSeconds < 60) {
    return Math.round(timeDiffInSeconds) + ' sec ago';
  } else if ((timeDiffInSeconds / 60) < 60){
    return Math.round(timeDiffInSeconds / 60) + ' mins ago';
  } else if (((timeDiffInSeconds / 60)/60) < 24){
    return Math.round((timeDiffInSeconds / 60)/60) + ' hrs ago';
  } else if ((((timeDiffInSeconds / 60)/60)/24) < 27){
    return Math.round(((timeDiffInSeconds / 60)/60)/24) + ' days ago';
  } else {
    return createdAt.toLocaleString();
  }
}

function renderOrders(orders) {
  orders.forEach(function(order){
    var $order = createOrderElement(order);
    if(order.name == 'new'){
      $('#new_orders ul.order_type').append($order);
    } else if(order.name == 'in_progress'){
      $('#in_progress_orders ul.order_type').append($order);
    } else {
      $('#completed_orders ul.order_type').append($order);
    }
  });
}

function createOrderElement(order){
  //<li><a href="/admin/orders">Order ID</a></li>
  let $liTag = $("<li>").addClass("li");
  let $aTag = $("<a>").attr("href", "/admin/order_edit/?order_id=" + order.id);
  $aTag.text(order.id + ' - ' + order.customer_first_name);
  $liTag.append($aTag);
  $liTag.append($("<span>").text(' - ' + getFormattedTime(order.created_at)));
  return $liTag;
}

$(document).ready(function() {
  loadOrders();
});
