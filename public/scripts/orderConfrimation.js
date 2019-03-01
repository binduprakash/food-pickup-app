
$('document').ready(function(e){

    var cart = [
        {
            item: "Pakora",
            quantity: 2,
            price: 600
        }, 
        {
            item: "Naan",
            quantity: 3,
            price: 300
        }
    ]

    function createMenuElement () {
        return (    
                `<div class="cart-row">
                <span class="cart-item cart-header cart-column">ITEM</span>
                <span class="cart-price cart-header cart-column">PRICE</span>
                <span class="cart-quantity cart-header cart-column">QUANTITY</span>
            </div>
            <div class="cart-items">
                <div class="cart-row">
                    <div class="cart-item cart-column">
                        <span class="cart-item-title">Pakora</span>
                    </div>
                    <span class="cart-price cart-column">$19.99</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" type="number" value="1">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>
                </div>
            </div>`
        )

    }



    function mockData(cartData){
        
        createMenuElement()
        /*
        cartData.forEach(function(element) {
            console.log(element.item);
            console.log(element.quantity);
            console.log(element.price)  
        });
        */
    
    }
    mockData(cart);

}


/*
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

*/