window.addEventListener('load', function() {
    new Glider(document.querySelector('.carrousel_lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carrousel_indentificador',
        arrows: {
            prev: '.carrousel_anterior',
            next: '.carrousel_siguiente'
        },
        responsive: [{

            breakpoint: 411,
            settings: {

                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }

        }, {
            breakpoint: 1440,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }]
    });
});