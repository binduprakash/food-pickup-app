
$('document').ready(function(e){

    var cart = [
        {
            item: "Pakora",
            quantity: 2,
            price: 600,
            itemID: 1
        }, 
        {
            item: "Naan Bread",
            quantity: 3,
            price: 300,
            itemID: 2
        }
    ]

    function createMenuElement (itemRow) {
        return (    
            
            `<div class="cart-items">
                <div class="cart-row">
                    <div class="cart-item cart-column">
                        <span class="cart-item-title">${itemRow.item}</span>
                    </div>
                    <span class="cart-price cart-column">${displayDollars(itemRow.price)}</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" data-id = ${itemRow.itemID} type="number" value="${itemRow.quantity}">
                        <button class="btn btn-remove-data" data-id =${itemRow.itemID} type="button">REMOVE</button>
                    </div>
                </div>
            </div>`
        )

    }

    //function to calculate the cost of each item on inital order details
    function subtotalCost (itemRow) {
        let itemCost = itemRow.quantity * itemRow.price;
        return itemCost;
    }

    let subtotal = 0;

    function mockData(cartData){
        for (let i = 0; i < cartData.length; i++) {
            
            var $cartRow = createMenuElement(cartData[i]);
            $('#cart-container').append($cartRow);
            
            subtotal += subtotalCost(cartData[i])
        }
        
    console.log(displayDollars(subtotal));
    }
    
    mockData(cart);




    var plant = document.getElementById('data-ID1');

    $()


    function displayDollars(number){
        var dollars = number / 100; 
        return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
    } 


    





});
