$(document).ready(function(){
    $("#d1-show").click(function(){
        $("#k-hidden").toggle();
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
    $(document).ready(function(){
        $('#sizeoption').submit(function(event){
          event.preventDefault();
          var inputtedName = $('input#pass').val();
          var selectedPizza = parseInt($('select#sizeoption').val());
          var pizzas = ['Talioni:SMALL','Talioni:MEDIUM','Talioni:LARGE','Barbacao:SMALL','Barbacao:MEDIUM','Barbacao:LARGE','Chicken Silica:SMALL','Chicken Silica:MEDIUM','Chicken Silica:LARGE','Cupon:SMALL','Cupon:MEDIUM','Cupon:SMALL'];
          var deliveryOptions = ['Collect', 'Deliver'];
          var pizzaPrices = [400, 600, 1000, 600, 800, 1200, 650, 850, 1250, 500, 700, 1100, 550, 750, 1150, 700, 900, 1300];
        

