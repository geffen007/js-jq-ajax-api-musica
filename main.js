$(document).ready(function() {



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


        },
        'error': function() {
        alert('Error');
        }
    });
});
