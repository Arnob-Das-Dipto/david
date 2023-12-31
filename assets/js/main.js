

$(document).ready(function() {


    $(window).scroll(function() {
        if($(this).scrollTop() > 100 ) {
            $('.header-area').addClass('sticky');
        }
        else {
            $('.header-area').removeClass('sticky');
        }
    })

    $('.header ul li a').click(function() {
        $('header ul li a').removeClass('active');
        $(this).addClass('active');
    })

    var typed = new Typed('#element', {
      strings: ['Web Developer', 'Youtuber', 'Teacher'],
      typeSpeed: 50,
    });

    ScrollReveal({
        distance: '100px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.header a, .bannar-content, .about-content', {origin: 'left'});
    ScrollReveal().reveal('.header ul, .bannar-img, .about-skills', {origin: 'right'});
    ScrollReveal().reveal('.section-title', {origin: 'top'});
    ScrollReveal().reveal('.services, .projects, .contact, .footer-area', {origin: 'bottom'});


    let menu_icon = document.querySelector('.menu-icon i');
    let menu_list = document.querySelector('.header ul');


    menu_icon.onclick = () => {
        menu_icon.classList.toggle('bx-x');
        menu_list.classList.toggle('show');
    }
    
})