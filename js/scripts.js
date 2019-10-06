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
    function placeholder(size) {
        this.pzSize;
    }
    placeOrder.prototype.summary = function() {
        return "pizzasize:" + this.pzSize;
    };
    //user interface
    $("#sub").click(function(event){
        event.preventDefault();
        var size = $('#sizeoption')
    })
