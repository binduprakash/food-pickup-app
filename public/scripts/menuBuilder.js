$(() => {
  $.ajax({
    method: "GET",
    url: "/api/menu_items"
  }).done(menu_items => {
    // console.log(menu_items);
    let $article = $("<table>").addClass("menuList");
    let $appHead = $("<tr>")
      .addClass("typeHead")
      .attr("id", "app")
      .text("Appetizers:");
    let $tandHead = $("<tr>")
      .addClass("typeHead")
      .attr("id", "tandoori")
      .text("Tandoori Creations:");
    let $biryHead = $("<tr>")
      .addClass("typeHead")
      .attr("id", "biryani")
      .text("Biryanis:");
    let $breadHead = $("<tr>")
      .addClass("typeHead")
      .attr("id", "bread")
      .text("Breads:");
    let $curryHead = $("<tr>")
      .addClass("typeHead")
      .attr("id", "curries")
      .text("Curries:");
    let $dessertHead = $("<tr>")
      .addClass("typeHead")
      .attr("id", "dessert")
      .text("Desserts:");
    let $bevHead = $("<tr>")
      .addClass("typeHead")
      .attr("id", "beverages")
      .text("Beverages:");
    menu_items.forEach(function(menuItem) {
      if (menuItem.menu_type_id === 1) {
        let $itemRow = $("<tr>").addClass("itemRow");
        let $item = $("<td>")
          .addClass("itemName")
          .text(menuItem.name);
        $itemRow.append($item);
        let $itemPrice = $("<td>")
          .addClass("itemPrice")
          .text("$" + menuItem.price);
        $itemRow.append($itemPrice);
        let $qty = $("<input type='number' min='0' value='0'>")
          .addClass("qtyForm")
          .attr("name", menuItem.id);
        $itemRow.append($qty);
        $appHead.append($itemRow);
        let $itemDesc = $("<tr>")
          .addClass("itemDesc")
          .text(menuItem.description);
        $appHead.append($itemDesc);
      }
      if (menuItem.menu_type_id === 2) {
        let $itemRow = $("<tr>").addClass("itemRow");
        let $item = $("<td>")
          .addClass("itemName")
          .text(menuItem.name);
        $itemRow.append($item);
        let $itemPrice = $("<td>")
          .addClass("itemPrice")
          .text("$" + menuItem.price);
        $itemRow.append($itemPrice);
        let $qty = $("<input type='number' min='0'value='0'>")
          .addClass("qtyForm")
          .attr("name", menuItem.id);
        $itemRow.append($qty);
        $tandHead.append($itemRow);
        let $itemDesc = $("<tr>")
          .addClass("itemDesc")
          .text(menuItem.description);
        $tandHead.append($itemDesc);
      }
      if (menuItem.menu_type_id === 3) {
        let $itemRow = $("<tr>").addClass("itemRow");
        let $item = $("<td>")
          .addClass("itemName")
          .text(menuItem.name);
        $itemRow.append($item);
        let $itemPrice = $("<td>")
          .addClass("itemPrice")
          .text("$" + menuItem.price);
        $itemRow.append($itemPrice);
        let $qty = $("<input type='number' min='0' value='0'>")
          .addClass("qtyForm")
          .attr("name", menuItem.id);
        $itemRow.append($qty);
        $biryHead.append($itemRow);
        let $itemDesc = $("<tr>")
          .addClass("itemDesc")
          .text(menuItem.description);
        $biryHead.append($itemDesc);
      }
      if (menuItem.menu_type_id === 4) {
        let $itemRow = $("<tr>").addClass("itemRow");
        let $item = $("<td>")
          .addClass("itemName")
          .text(menuItem.name);
        $itemRow.append($item);
        let $itemPrice = $("<td>")
          .addClass("itemPrice")
          .text("$" + menuItem.price);
        $itemRow.append($itemPrice);
        let $qty = $("<input type='number' min='0' value='0'>")
          .addClass("qtyForm")
          .attr("name", menuItem.id);
        $itemRow.append($qty);
        $breadHead.append($itemRow);
        let $itemDesc = $("<tr>")
          .addClass("itemDesc")
          .text(menuItem.description);
        $breadHead.append($itemDesc);
      }
      if (menuItem.menu_type_id === 5) {
        let $itemRow = $("<tr>").addClass("itemRow");
        let $item = $("<td>")
          .addClass("itemName")
          .text(menuItem.name);
        $itemRow.append($item);
        let $itemPrice = $("<td>")
          .addClass("itemPrice")
          .text("$" + menuItem.price);
        $itemRow.append($itemPrice);
        let $qty = $("<input type='number' min='0' value='0'>")
          .addClass("qtyForm")
          .attr("name", menuItem.id);
        $itemRow.append($qty);
        $curryHead.append($itemRow);
        let $itemDesc = $("<tr>")
          .addClass("itemDesc")
          .text(menuItem.description);
        $curryHead.append($itemDesc);
      }
      if (menuItem.menu_type_id === 6) {
        let $itemRow = $("<tr>").addClass("itemRow");
        let $item = $("<td>")
          .addClass("itemName")
          .text(menuItem.name);
        $itemRow.append($item);
        let $itemPrice = $("<td>")
          .addClass("itemPrice")
          .text("$" + menuItem.price);
        $itemRow.append($itemPrice);
        let $qty = $("<input type='number' min='0' value='0'>")
          .addClass("qtyForm")
          .attr("name", menuItem.id);
        $itemRow.append($qty);
        $dessertHead.append($itemRow);
        let $itemDesc = $("<tr>")
          .addClass("itemDesc")
          .text(menuItem.description);
        $dessertHead.append($itemDesc);
      }
      if (menuItem.menu_type_id === 7) {
        let $itemRow = $("<tr>").addClass("itemRow");
        let $item = $("<td>")
          .addClass("itemName")
          .text(menuItem.name);
        $itemRow.append($item);
        let $itemPrice = $("<td>")
          .addClass("itemPrice")
          .text("$" + menuItem.price);
        $itemRow.append($itemPrice);
        let $qty = $("<input type='number' min='0' value='0'>")
          .addClass("qtyForm")
          .attr("name", menuItem.id);
        $itemRow.append($qty);
        $bevHead.append($itemRow);
        let $itemDesc = $("<tr>")
          .addClass("itemDesc")
          .text(menuItem.description);
        $bevHead.append($itemDesc);
      }
      $article.append($appHead);
      $article.append($tandHead);
      $article.append($biryHead);
      $article.append($breadHead);
      $article.append($curryHead);
      $article.append($dessertHead);
      $article.append($bevHead);
    });
    $(".menu_container").append($article);
    let $div = $("<div>").addClass("submitDiv");
    let $submit = $("<button type='submit'>")
      .addClass("submit")
      .text("Review Order");

    $div.append($submit);
    $(".menu_container").append($div);

    // const qty = $(".qtyForm");

    // // save subtotal to a var, then send THAT final var to the subtotal.text ****************
    // qty.on("input", function(event) {
    //   let $qtyform = $(this);
    //   let previousItem = $qtyform.prev();

    //   let price = previousItem.text();

    //   let temp = $qtyform.val();
    //   price = price.substring(1);
    //   var finalQty = parseFloat(temp);
    //   var finalPrice = parseFloat(price);
    //   let $subtotal = $("#subtotal");
    //   $subtotal.text(Number(finalPrice * finalQty));
    // });
    // console.log(finalQty * finalPrice);
  });
});
