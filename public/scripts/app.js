$(() => {
  $.ajax({
    method: "GET",
    url: "/api/menu_items"
  }).done(users => {
    for (item of menu_items) {
      $("<div>")
        .text(item.name)
        .appendTo($("body"));
    }
  });
});
