$(function(){

    $(".navbar a, footer a").on("click", function(event){
    
        event.preventDefault();
        var hash = this.hash;
        
        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
        
    });
})

let type = new Typed('#text', {
    strings : [ 'Développeur Web', 'Développeur mobile', 'UI UX Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
})