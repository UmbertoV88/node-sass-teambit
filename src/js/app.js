var $ = require('jquery');

$(document).ready(function() {

    tastoChat();
    errore404();
//----------------
//---FUNZIONI-----
//----------------





function tastoChat(){
    // intercetto il click sull'icona fissa della Chat
    $('.open-m').click(function(){
        // faccio scomparire l'icona del mess e compare la X
        $('.open-m').addClass('disactive');
        $('.close-m').addClass('active');

    })
    $('.close-m').click(function(){

        // faccio scomparire l'icona della x e compare quella del mess
        $('.close-m').removeClass('active');
        $('.open-m').removeClass('disactive');
    })
}


function errore404(){
    $("a").click(function(){
        $('.not-found-img').show();
        // $('.not-found-img').addClass('active');
    })


}


});
