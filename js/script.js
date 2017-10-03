$(document).ready(function(){
	$(document).on('click', '#back-call', function(){
	    $('#back-call-form').fadeIn(500);
	    $('#back-call').hide();
	})
	$('#back-call').hover(function(){
	    $('.back-call-text').fadeIn(300);
	}, 
	  function () {
	    $('.back-call-text').fadeOut(300);
	  })

	$(document).on('click', '#terminals a', function(e){
		e.preventDefault();
	})
	$(document).mouseup(function(e) 
	{
	    var container = $("#back-call-form");

	    // if the target of the click isn't the container nor a descendant of the container
	    if (!container.is(e.target) && container.has(e.target).length === 0) 
	    {
	        container.fadeOut(500);
	        $('#back-call').show();
	    }
	});
	$(document).on('click', '#back-call-submit', function(e){
		e.preventDefault();
		var name = $('#name');
		var tel = $('#tel');
		var check = false;
		if(name.val() == '' || typeof name.val() == 'undefined')
		{
			name.css('border', '2px solid #f5563c');
			check = true;
		}
		if(tel.val() == '' || typeof tel.val() == 'undefined')
		{
			tel.css('border', '2px solid #f5563c');
			check = true;
		}
		if(check)
			return false;
		$('#loading').fadeIn(700);
		$.ajax({
		  method: "POST",
		  url: "../email.php",
		  data: { name: name.val(), tel: tel.val() }
		})
		  .done(function( msg ) {
		  	$('#loading').fadeOut(500);
		    $('#back-call-form').fadeOut(500);
		    $('#back-call').show();
		    $('#phone-icon').removeClass('fa-phone');
		    $('#phone-icon').addClass('fa-check-square-o');
		    $('.back-call-text').text('Запрос отправлен');
		  });
	})
	$(document).on('change', '#name', function(){
		$(this).css('border', '0px');
	})
	$(document).on('change', '#tel', function(){
		$(this).css('border', '0px');
	})
})