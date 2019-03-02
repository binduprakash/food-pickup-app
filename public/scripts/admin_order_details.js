function loadOrder() {
  $.ajax("/admin/orders_details_json/" + getUrlParameter("order_id"), {method: 'GET'})
    .then(function(orderDetailsJson) {
      console.log(orderDetailsJson)
      renderOrderDetails(orderDetailsJson);
    }
  );
}

function renderOrderDetails(order){
  if (!order) {
    return;
  }
  $("#customer_name").text("Customer Name: " + order[0].customer_first_name + " " + order[0].customer_last_name)
  $("#customer_phone").text("Customer Phone: " + order[0].customer_phone_number)
  order.forEach(function(menuItem, idx){
    let $tr = $("<tr>");
    let $tdSlNo = $("<td>").addClass("sl_no");
    $tdSlNo.text((idx + 1).toString());
    let $tdMenuName = $("<td>").addClass("menu_name");
    $tdMenuName.text(menuItem.name);
    let $tdQuanity = $("<td>").addClass("quanity");
    $tdQuanity.text(menuItem.quantity);
    let $tdCurrency = $("<td>").addClass("currency");
    $tdCurrency.text("$" + (menuItem.quantity * menuItem.price).toFixed(2));
    $tr.append([$tdSlNo, $tdMenuName, $tdQuanity, $tdCurrency]);
    $("#menu_table").append($tr);
  });
  let $tr = $("<tr>");
  let $tdEmpty = $("<td>").attr("colspan", "2");
  let $tdTax = $("<td>");
  $tdTax.text("Taxes");
  let $tdCurrency = $("<td>").addClass("currency");
  $tdCurrency.text("$" + (order[0].total_cost * 0.05).toFixed(2));
  $tr.append([$tdEmpty, $tdTax, $tdCurrency]);
  $("#menu_table").append($tr);
  let $trTotalRow = $("<tr>");
  let $trTotal = $("<td>");
  $trTotal.text("Total");
  let $tdTaxEmpty = $("<td>").attr("colspan", "2");
  $tdCurrency = $("<td>").addClass("currency");
  $tdCurrency.text("$" + (order[0].total_cost * 1.0).toFixed(2));
  $trTotalRow.append([$tdTaxEmpty, $trTotal, $tdCurrency]);
  $("#menu_table").append($trTotalRow);
  $("#order_status_select").val(order[0].status_id);
}

//parsing the url query parameter
function getUrlParameter(sParam) {
  let sPageURL = window.location.search.substring(1);
  let sURLVariables = sPageURL.split('&');
  let sParameterName;
  for(let i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
}

$(document).ready(function() {
  $("form").on("submit", function(event) {

    // Prevents defaults
    event.preventDefault();

    $.ajax("/admin/order_edit", {
      method: 'POST',
      data: {
        order_status_select:$("#order_status_select").children("option:selected").val(),
        order_id:getUrlParameter("order_id")
      }
    })
      .then(function (response) {
        alert("order status changed successfully");
        window.location.replace("/admin/orders");
    });
  });
  loadOrder();
});

