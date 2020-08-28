$(document).ready(function() {

    var genre = $("select");

	genre.change(function (){
	    var myGenre = $(this).val();

		$(".cd").each(function(){
            if (myGenre == 'All'){
                $(".cd").show();
                return
            }else if ($(this).hasClass(myGenre)){
				$(this).show();
			} else {
				$(this).hide();
			}
		});
	});



    $.ajax({
        'url': 'https://flynn.boolean.careers/exercises/api/array/music',
        'method': 'get',
        'success': function(data) {
            var dischi = data.response;

            for (var i = 0; i < dischi.length; i++) {
                var disco= dischi[i];

                var source = $('#entry-template').html();
                var template = Handlebars.compile(source);
                var html = template(disco);
                $('.cds-container').append(html);
                // console.log(dischi[i].genre);
            }

            // $('select.genre').change(function(){
            //     // $('.cd').hide();
            //     var genre = $(this).val();
            //     console.log(genre);
            //
            //     var select = $('.cd').hasClass(genre);
            //     console.log(select);
            //
            //
            // });








        },
        'error': function() {
        alert('Error');
        }
    });
});
