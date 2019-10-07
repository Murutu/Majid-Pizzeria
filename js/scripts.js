// $(document).ready(function(){
//     $("#d1-show").click(function(){
//         $("#k-hidden").toggle();
//     });


//     $("#d2-show").click(function(){
//         $("#l-hidden").toggle();
//     });


//     $("#d3-show").click(function(){
//         $("#m-hidden").toggle();
//     });


//     $("#d4-show").click(function(){
//         $("#n-hidden").toggle();
//     });

// });

    //business logic
    // function Order(name, pizza,  crust,  delivery) {
    //     this.customerName = name;
    //     this.selectedPizza = pizza;
    //     this.selectedCrust = crust;
    //     this.deliveryOption = delivery;
    //   }
    //   function Address(location,){
    //     this.locationName = location;
    //     {
    //         function Price(pizzaPrice){
    //             this.priceForSelectedPizza = pizzaPrice;
    //           }
    //           Price.prototype.subtotal = function(){
    //             return this.priceForSelectedPizza ;
    //           }

    //         }
    //     }
 //user interface
 $("document").ready( function(){


function calculateTotal(size,topping,crust,quantity){

    var result= size * quantity;
    
    var total = result + topping +crust;

    return total;


}

         $("form").submit(function(event){
                 event.preventDefault();

                // var trial = $("input[name='top']:checked").val();
                // console.log(trial);

                 var sizePrice=$("input[name='size']:checked").val();
                 var sizePart=sizePrice.split(", ");
                 var size=parseInt(sizePart[1]);

                 var toppingPrice=$("input[name='top']:checked").val();
                 console.log(toppingPrice);
                 var toppingPart=toppingPrice.split(", ");
                 var topping=parseInt(toppingPart[1]);

                 var crustPrice=$("input[name='crusty']:checked").val();
                 var crustPart=crustPrice.split(", ");
                 var crust=parseInt(crustPart[1]);

                var quantity=parseInt($(".quantity").val());

                
            
              var amount=calculateTotal(size,topping,crust,quantity);
              alert("Your order will be delivered to your location");

                 $(".display-size").text(sizePrice);
                 $(".display-quantity").text(quantity);
                 $(".display-toppings").text(toppingPrice);
                 $(".display-crusts").text(crustPrice);
                 $(".display-total").text(amount);

            //      var size = $("#sizes").find(":selected").val();
            //      var crust = $("#crusts").find(":selected").val();
            //      var toppings = [];
            //      $('#toppings :checked').each(function() {
            //        toppings.push($(this).val());
            //      });
            //      alert(toppings)
            //  }
         });
     }
 );


