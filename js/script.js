const navbar = $('.nav-page');
const navbarLength = navbar.length;

console.log(navbar)
window.onload = function(){
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

$(document).ready(function() {
    $(".chatbot-icon").click(function(event){
        $(".chat-box").toggleClass("active");
    })
})

jQuery(function($){
    convForm = $('#chat').convform({selectInputStyle: 'disable'});
    console.log(convForm);
});
