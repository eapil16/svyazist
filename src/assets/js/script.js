'use strict';
document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('body').addEventListener('click', e => {
        if(e.target.closest('.header-phones__button')) {
            e.preventDefault();
            $('.header-phones__block').slideToggle();
            e.target.classList.toggle('selected') 
        }
        if (!e.target.closest('.header-phones__button') && !e.target.closest('.header-phones__block')) {
            $('.header-phones__block').fadeOut();
            $('.header-phones__button').removeClass('selected'); 
        }
        if(e.target.closest('.form-disabled')) {
            e.preventDefault(); 
            e.target.closest('.form-disabled').classList.remove('form-disabled')     
            e.target.closest('.button-form').classList.add('form-search')     
            $('.header-search .form').addClass('open');      
        }
        if(!e.target.closest('.form-disabled') && !e.target.closest('.header-search')) {
            document.querySelector('.button-form').classList.add('form-disabled');     
            document.querySelector('.button-form').classList.remove('form-search');     
            $('.header-search .form').removeClass('open');      
        }
        if(e.target.closest('.link-prompt')) {
            e.preventDefault(); 
            const collection = document.querySelectorAll('.swiper-slide');
            collection.forEach(e => e.classList.remove('active'));
            const collectionPromt = document.querySelectorAll('.rates-card-prompt');
            collectionPromt.forEach(e => e.classList.remove('show'));
            const collLinks = document.querySelectorAll('.link-prompt');
            collLinks.forEach(e => e.classList.remove('active'));
            const target = e.target.closest('.swiper-slide');
            target.classList.add('active');
            e.target.closest('.rates-card__values_item').querySelector('.link-prompt').classList.add('active');
            e.target.closest('.rates-card__values_item').querySelector('.rates-card-prompt').classList.add('show');  
        }
        if(!e.target.closest('.link-prompt') && !e.target.closest('.rates-card-prompt')) {
            const collection = document.querySelectorAll('.swiper-slide');
            collection.forEach(e => e.classList.remove('active'));
            const collectionPromt = document.querySelectorAll('.rates-card-prompt');
            collectionPromt.forEach(e => e.classList.remove('show'));
            const collLinks = document.querySelectorAll('.link-prompt');
            collLinks.forEach(e => e.classList.remove('active'));
        }
        if(e.target.closest('.catalog-menu__bisiness')) {
            const coll = document.querySelectorAll('.catalog-menu__dropdown');
            coll.forEach(e => e.classList.remove('show'));
            const target = e.target.parentNode.querySelector('.catalog-menu__dropdown');
            target.classList.add('show');
            $('.fixed-menu').fadeOut(); 
            $('.menu-toggle-cont').removeClass('menu-toggle-cont_active'); 
            $('body').addClass('hidd'); 
        }
        if(e.target.closest('.channel-list a')) {
            e.preventDefault();
            const collBlock = document.querySelectorAll('.channel-list__block');
            collBlock.forEach(e => e.classList.remove('show'));
            const collLinks = document.querySelectorAll('.channel-list a');
            collLinks.forEach(e => e.classList.remove('active'));
            
            e.target.classList.add('active');
            e.target.closest('.channel-list li').querySelector('.channel-list__block').classList.add('show');
        }
        if(e.target.closest('.channel-list__block__close')) {
            e.preventDefault();
            const collBlock = document.querySelectorAll('.channel-list__block');
            collBlock.forEach(e => e.classList.remove('show'));
            const collLinks = document.querySelectorAll('.channel-list a');
            collLinks.forEach(e => e.classList.remove('active'));
        }
        if(!e.target.closest('.channel-list__block') && !e.target.closest('.channel-list a'))  {
            const collBlock = document.querySelectorAll('.channel-list__block');
            collBlock.forEach(e => e.classList.remove('show'));
            const collLinks = document.querySelectorAll('.channel-list a');
            collLinks.forEach(e => e.classList.remove('active'));
        }
        if(!e.target.closest('.catalog-menu__bisiness') && !e.target.closest('.catalog-menu__dropdown')  && !e.target.closest('.menu-toggle-cont')  && !e.target.closest('.fixed-menu '))  {
            const coll = document.querySelectorAll('.catalog-menu__dropdown');
            coll.forEach(e => e.classList.remove('show'));
            $('body').removeClass('hidd');
            $('.fixed-menu').slideUp(300);
            $('body').removeClass('hidd');
            $('.menu-toggle-cont').removeClass('menu-toggle-cont_active'); 
        }
    });


    $('.message-close').click(function (e) {
        e.preventDefault(); 
        $('.message').slideUp();
    });
    
    $('.menu-toggle-cont').click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('menu-toggle-cont_active')) { 
            const coll = document.querySelectorAll('.catalog-menu__dropdown');
            coll.forEach(e => e.classList.remove('show'));
            $(this).addClass('menu-toggle-cont_active'); 
            $('.fixed-menu').slideDown(300); 
            $('body').addClass('hidd'); 
        } else { 
            $(this).removeClass('menu-toggle-cont_active'); 
            $('.fixed-menu').slideUp(300);
            $('body').removeClass('hidd');
        } 
    });
    
    const mainSlider = new Swiper(".main-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 800,
        navigation: {
            nextEl: ".main-next",
            prevEl: ".main-prev",
        },
        pagination: {
            el: ".main-pagination",
            clickable: true,
        },
    });

    const ratesSlider = new Swiper(".rates-slider", {
        allowTouchMove: true,
        slidesPerView: 1.2,
        // loop: true,
        spaceBetween: 20,
        speed: 800,
        navigation: {
            nextEl: ".rates-next",
            prevEl: ".rates-prev",
        },
        pagination: {
            el: ".rates-pagination",
            type: "progressbar",
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            }
        },
    });

    const rateshomeSlider = new Swiper(".rates-slider-home", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        // loop: true,
        spaceBetween: 20,
        speed: 800,
        navigation: {
            nextEl: ".rates-home-next",
            prevEl: ".rates-home-prev",
        },
        pagination: {
            el: ".rates-home-pagination",
            type: "progressbar",
        },
    });

    const equipment1Slider = new Swiper(".equipment-1-slider", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        // loop: true,
        spaceBetween: 20,
        speed: 800,
        navigation: {
            nextEl: ".equipment-1-next",
            prevEl: ".equipment-1-prev",
        },
        pagination: {
            el: ".equipment-1-pagination",
            type: "progressbar",
        },
    });

    const equipment2Slider = new Swiper(".equipment-2-slider", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        // loop: true,
        spaceBetween: 20,
        speed: 800,
        navigation: {
            nextEl: ".equipment-2-next",
            prevEl: ".equipment-2-prev",
        },
        pagination: {
            el: ".equipment-2-pagination",
            type: "progressbar",
        },
    });

    const equipment3Slider = new Swiper(".equipment-3-slider", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        // loop: true,
        spaceBetween: 20,
        speed: 800,
        navigation: {
            nextEl: ".equipment-3-next",
            prevEl: ".equipment-3-prev",
        },
        pagination: {
            el: ".equipment-3-pagination",
            type: "progressbar",
        },
    });

    const equipment4Slider = new Swiper(".equipment-4-slider", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        // loop: true,
        spaceBetween: 20,
        speed: 800,
        navigation: {
            nextEl: ".equipment-4-next",
            prevEl: ".equipment-4-prev",
        },
        pagination: {
            el: ".equipment-4-pagination",
            type: "progressbar",
        },
    });

    $(function() {
        let header = $('.header');
         
        $(window).scroll(function() {
          if($(this).scrollTop() > 1) {
           header.addClass('header_fixed');
          } else {
           header.removeClass('header_fixed');
          }
        });
    });

	$('[data-role=toggle-block]').each(function() {
		var $block = $(this);
		$block.on('click.toggle', '[data-role=toggle-btn]', function() {
            console.log(1)
			var $btn = $(this);
			var $data = $block.find('[data-role=toggle-data]');

			// toggle $btn
			$btn.toggleClass('shown');
			// show/hide $data
			$data.slideToggle(200);
		});
	});

    const captionblockSlider = new Swiper(".caption-block-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 800,
        navigation: {
            nextEl: ".caption-block-next",
            prevEl: ".caption-block-prev",
        },
        pagination: {
            el: ".caption-block-pagination",
            clickable: true,
        },
    });

    const internetotherSlider = new Swiper(".internet-other", {
        allowTouchMove: true,
        slidesPerView: 1.2,
        // loop: true,
        spaceBetween: 20,
        speed: 800,
        navigation: {
            nextEl: ".internet-other-next",
            prevEl: ".internet-other-prev",
        },
        pagination: {
            el: ".internet-other-pagination",
            type: "progressbar",
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            }
        },
    });

    const businessinternetotherSlider = new Swiper(".business-int-other", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        // loop: true,
        spaceBetween: 20,
        speed: 800,
        navigation: {
            nextEl: ".business-int-other-next",
            prevEl: ".business-int-other-prev",
        },
        pagination: {
            el: ".business-int-other-pagination",
            type: "progressbar",
        },
    });

    const cctvotherSlider = new Swiper(".cctv-other", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        // loop: true,
        spaceBetween: 20,
        speed: 800,
        navigation: {
            nextEl: ".cctv-other-next",
            prevEl: ".cctv-other-prev",
        },
        pagination: {
            el: ".cctv-other-pagination",
            type: "progressbar",
        },
    }); 
    
    const intotherSlider = new Swiper(".int-other", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        // loop: true,
        spaceBetween: 20,
        speed: 800,
        navigation: {
            nextEl: ".int-other-next",
            prevEl: ".int-other-prev",
        },
        pagination: {
            el: ".int-other-pagination",
            type: "progressbar",
        },
    }); 

    // if (document.querySelector('.rates-card-tv')) {
	// 	const blockHeiht = () => {
	// 		const collBrands = document.querySelectorAll('.rates-card-tv');
    //         const fisrtHeight = document.querySelector('.tv-text').clientHeight;
	// 		collBrands.forEach(element => {
	// 			element.addEventListener("mouseenter", (e) => {                  
	// 				const height = e.target.querySelector('.tv-text p').clientHeight;
    //                 if (height > fisrtHeight) {
    //                     e.target.querySelector('.tv-text').style.height = `${height}px`;
    //                 }					
	// 			});
	// 			element.addEventListener("mouseleave", (e) => {
    //                e.target.querySelector('.tv-text').style.height = `${fisrtHeight}px`;
	// 			});
	// 		});
	// 	};	
		
	// 	if (window.innerWidth > 991) {
	// 		blockHeiht();
	// 	}

	// 	window.addEventListener('resize', () => {
	// 		if (window.innerWidth > 991) {
	// 			blockHeiht();
	// 		}
	// 	});
	// }

    const cctvSlider = new Swiper(".cctv-small-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 800,
        navigation: {
            nextEl: ".cctv-next",
            prevEl: ".cctv-prev",
        },
        pagination: {
            el: ".cctv-pagination",
            clickable: true,
        },
    });


    const partnersSlider = new Swiper(".partners-slider", {
        allowTouchMove: true,
        slidesPerView: 2,
        loop: true,
        spaceBetween: 30,
        speed: 800,
        navigation: {
            nextEl: ".partners-next",
            prevEl: ".partners-prev",
        },
        breakpoints: {
            1200: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            }
        },
        pagination: {
            el: ".partners-pagination",
            type: "progressbar",
        },
    });

    const accordionSlider = new Swiper(".accordion-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 800,
        navigation: {
            nextEl: ".accordion-next",
            prevEl: ".accordion-prev",
        },
        pagination: {
            el: ".accordion-pagination",
            clickable: true,
        },
    });
    
    
});

