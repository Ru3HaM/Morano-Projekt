$(document).ready(function() {

    $( function() {
        $( "#datepicker" ).datepicker();
    });
       $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        if($input.val()> 9);
        $input.change();
        return false;
    });

    let priceSofa = 400,
        priceArmchair = 250,
        priceMatrass = 150,
        priceChair = 100,
        priceCarpet = 200,
        pricePouf = 150,
        priceKitchen = 300,
        priceFinal = 0,
        finalPriceSofa = 0,
        finalPriceArmchair = 0,
        finalPriceMatrass = 0,
        finalPriceChair = 0,
        finalPriceCarpet = 0,
        finalPricePouf = 0,
        finalPriceKitchen = 0

    finalPrice();

    $('.sofa-input').click(function() {
        finalPriceSofa = priceSofa * $('.quantity-input-sofa').val();
        finalPrice();
        return finalPriceSofa
    });

    $('.armchair-input').click(function() {
        finalPriceArmchair = priceArmchair * $('.quantity-input-armchair').val();
        finalPrice();
        return finalPriceArmchair
    });
    $('.matrass-input').click(function() {
        finalPriceMatrass = priceMatrass * $('.quantity-input-matrass').val();
        finalPrice();
        return finalPriceMatrass
    });
    $('.chair-input').click(function() {
        finalPriceChair = priceChair * $('.quantity-input-chair').val();
        finalPrice();
        return finalPriceChair
    });
    $('.carpet-input').click(function() {
        finalPriceCarpet = priceCarpet * $('.quantity-input-carpet').val();
        finalPrice();
        return finalPriceCarpet
    });
    $('.pouf-input').click(function() {
        finalPricePouf = pricePouf * $('.quantity-input-pouf').val();
        finalPrice();
        return finalPricePouf
    });
    $('.kitchen-input').click(function() {
        finalPriceKitchen = priceKitchen * $('.quantity-input-kitchen').val();
        finalPrice();
        return finalPriceKitchen
    });
    



    function finalPrice() {
        priceFinal = finalPriceCarpet + finalPriceArmchair + finalPriceSofa + finalPriceMatrass + finalPricePouf + finalPriceChair + finalPriceKitchen;
        $('.js-price-final').text(priceFinal + 'тнг');
        if (priceFinal < 450) {
            $('.discount-js').text('10%');
        }; 
        if (priceFinal > 450) {
            $('.discount-js').text('20%');
        };
        if (priceFinal > 900) {
            $('.discount-js').text('30%');
        };
        if (priceFinal > 3000) {
            $('.discount-js').text('45%');
        };
        $('.sofa-input').click(function(){
        $('.js-price-final').html('');ы
        });
    };
});

