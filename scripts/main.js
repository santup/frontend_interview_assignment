$(function(){
	$('.alert').hide();

	$('#find-weather').click(function(event){
		event.preventDefault();		

		$('.alert').hide();
		if($('#city').val()!==""){

			$.get('reader.php?city='+$('#city').val(),function(data){

				if(data===""){
					
					$('#fail').fadeIn();
				}
				else{
					$('#success').html(data).fadeIn();	
				}
			});

		}else{
			$('#nocity').fadeIn();
		}	
	});

});