$(document).ready(function(){
    $("#d1-show").click(function(){
        $("#k-hidden").toggle();
    });
});

    $("#d2-show").click(function(){
        $("#l-hidden").toggle();
    });


    $("#d3-show").click(function(){
        $("#m-hidden").toggle();
    });


    $("#d4-show").click(function(){
        $("#n-hidden").toggle();
    });

    //business logic
    function Order(name, pizza,  crust,  delivery) {
        this.customerName = name;
        this.selectedPizza = pizza;
        this.selectedCrust = crust;
        this.deliveryOption = delivery;
      }
      function Address(location,){
        this.locationName = location;
        {
            function Price(pizzaPrice){
                this.priceForSelectedPizza = pizzaPrice;
              }
              Price.prototype.subtotal = function(){
                return this.priceForSelectedPizza ;
              }
    //user interface
    $("#sub").click(function(event){
        event.preventDefault();
        var size = $('#sizeoption').val();
        console.log(size);
    });
    

