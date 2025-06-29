const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".testimonial-slider", {
    spaceBetween: 80,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true
    // },
    // on: {
    //     autoplayTimeLeft(s, time, progress) {
    //         progressCircle.style.setProperty("--progress", 1 - progress);
    //         progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    //     }
    // }
});

var swiper2 = new Swiper(".blog-slider", {
    spaceBetween: 30,    
    slidesPerView: 3,
    loop: true,
    autoplay:{
        delay: 3000,
        disableOnInteraction: false
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev"
    // },
})