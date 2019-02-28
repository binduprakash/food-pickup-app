$(() => {
  $.ajax({
    method: "GET",
    url: "/api/menu_items"
  }).done(menu_items => {
    console.log(menu_items);
    let $article = $("<article>").addClass("menuList");
    let $appRow = $("<tr>").addClass("appRow");
    menu_items.forEach(function(menuItem) {
      if (menuItem.menu_type_id === 1) {
        let $item = $("<td>")
          .addClass("itemName")
          .text(menuItem.name);
        $appRow.append($item);
      }
      $article.append($appRow);
    });
    $(".menu_container").append($article);
  });
});
