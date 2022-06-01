$(document).ready(function(){
    $(".chatbot-icon").click(function(e){
        $(".chatbot-icon i").toggleClass("active-i");
        $(".chat-box").toggleClass("activated");
    })

    const navbar = $('.nav-page');
    const chatbox = $('#chatbot-box');
    const navbarLength = navbar.length;

    window.onload = function(e){
        navbar[0].classList.toggle('active');
    }


    for( let i = 0; i < navbarLength; i++){
        
        navbar[i].onclick = function(e) {
            for( let i = 0; i < navbarLength; i++){
                navbar[i].classList.remove('active');
            }
            navbar[i].classList.toggle('active');
        };
    }

    jQuery(function($){
        convForm = $('#chat').convform({selectInputStyle: 'disable'});
        console.log(convForm);
    });

});