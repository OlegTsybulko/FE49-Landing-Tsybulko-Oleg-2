console.log('hello');

const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

});



