//swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
  });

//navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = document.querySelectora("header")
  header.classlist.toggle("sticky", window.scrollY > 0)
  
})

//responsive navigation menu toggle