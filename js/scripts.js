
$(document).ready(() => {

    // let slider = $('.slider')
    // let options = {
    //     dots : slider.attr('data-dots') ? slider.attr('data-dots'): true,
    //     arrows : slider.attr('data-arrows') ? slider.attr('data-arrows'): true,
    //     infinite : slider.attr('data-infinite') ? slider.attr('data-infinite'): true,
    //     speed : slider.attr('data-speed') ? slider.attr('data-speed'): 3000,
    //     autoplay : slider.attr('data-autoplay') ? slider.attr('data-autoplay'): 3000
        
    // }

    // slider.slick(options)


    $('.slider').slick();

    let isotope = $('.portfolio').isotope({
        itemSelector: '.portfolio__item',
        percentPosition:true,
        layoutMode: 'masonry',
        masonry: {
            columnWidth: '.sizer',
            gutter:'.sizer'
        }
    })

    $('.filter__link').on('click',(e)=>{
        e.preventDefault();
        let filter = $(e.target).attr('data-filter');
        filter = filter == '*' ? filter : '.' + filter;
        console.log(filter)

        isotope.isotope({
            filter:filter
        })

        $('.filter__link').removeClass('active');
        $(e.target).addClass('active')
    })

    $('.toggler').on('click', (e)=>{
        e.preventDefault();

        $('body').toggleClass('menu-opened');
    })

    $('.menu__link').on('click', (e)=>{
        
        $('body').removeClass('menu-opened');
    })


    let lastY=0;
    $('.menu').on('touchstart', (e)=>{
        lastY = e.originalEvent.touches[0].clientY;
    });

    $('.menu').on('touchend', (e)=>{
        console.log(e)
        let currentY = e.originalEvent.changedTouches[0].clientY;
        if(currentY < lastY - 30) {
            $('body').removeClass('menu-opened');
        }
    });

})