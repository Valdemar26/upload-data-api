/**
 * Created by valdemar on 04.09.17.
 */
$(document).ready(function () {
    var root = 'https://jsonplaceholder.typicode.com';

    //var dataObject;
    $.ajax({
        url: root + '/photos',
        method: 'GET'
    }).then(function(data) {
        useReturnData(data);
    });

    function useReturnData(data){
        for (var i = 0; i < 10; i++) {
            //console.log(data[i].id);
            $('.flex-item.template').clone()
                .removeClass('template')
                .appendTo('.flex-photo')
                .attr('data-id', data[i].id)
                .find('.flex-img')
                .css("background-image", "url(" + data[i].thumbnailUrl + ")")
                .end()
                .find('.flex-desc')
                .text(data[i].title)
                .end();
            //.find('h3').text(formats[type + 'Type'][j].header)
            //console.log(id);
        }
    }



});