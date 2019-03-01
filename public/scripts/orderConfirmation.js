
$('document').ready(function(e){

    var cart = [
        {
            item: "Pakora",
            quantity: 2,
            price: 600
        }, 
        {
            item: "Naan Bread",
            quantity: 3,
            price: 300
        }
    ]

    function createMenuElement (itemRow) {
        return (    
                `<div class="cart-row">
                <span class="cart-item cart-header cart-column">ITEM</span>
                <span class="cart-price cart-header cart-column">PRICE</span>
                <span class="cart-quantity cart-header cart-column">QUANTITY</span>
            </div>
            <div class="cart-items">
                <div class="cart-row">
                    <div class="cart-item cart-column">
                        <span class="cart-item-title">Parkora</span>
                    </div>
                    <span class="cart-price cart-column">$19.99</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" type="number" value="5">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>
                </div>
            </div>`
        )

    }

    function mockData(cartData){
        
        let $cart = createMenuElement();
        
        
        $('#cart-container').prepend($cart);
        
        cartData.forEach(function(element) {
            
            console.log(element.item);
            console.log(element.quantity);
            console.log(element.price)  
        });
        
    
    }
    mockData(cart);

});
