$(document).ready(function() {

    var genre = $('select');

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
            insertCd (data);
            insertSelect(data);
        },
        'error': function() {
        alert('Error');
        }
    });
});

function insertCd (data)  {
    var dischi = data.response;

    for (var i = 0; i < dischi.length; i++) {
        var disco = dischi[i];

        var source = $('#entry-template').html();
        var template = Handlebars.compile(source);
        var html = template(disco);
        $('.cds-container').append(html);
        // console.log(dischi[i].genre);
    }
}
function insertSelect (data)  {
    var source = $('#template-select').html();
    var template = Handlebars.compile(source);

    var arrayGenre= [];

    for (var i = 0; i < data.response.length; i++) {
        var genere = data.response[i].genre;
        if (!arrayGenre.includes(genere)){
            arrayGenre.push(genere);
            var context=data.response[i];
            var html=template(context);
            $('.genre').append(html);
        }
    }
}
