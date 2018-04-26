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
});