$(function() {
  if($('input[name=address]').length) {
    $('input[name=address]').autocomplete({
    	delay: 350,
    	minLength: 5,
    	source: function(request, response) {
      		$.get('/api/geocode', 
            	{search: request.term,
             	country_code: $('select[name=country_code]').val()},
                function(data){
        			response(data.objects);
      		});
    	}
  	})
  }
})
