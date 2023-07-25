const menuBtn = document.querySelector('.nav-toggle');
const closeBtn = document.querySelector('.nav-close');
const navigation = document.querySelector('.nav-menu');
const slides = document.querySelectorAll('.video-slide');

menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
})
closeBtn.addEventListener("click",()=>{
    navigation.classList.remove("active");
})
// video navigation slider
const btns = document.querySelectorAll(".nav-btn")

let sliderNav = manual => {
    btns.forEach((btn) =>{
        btn.classList.remove("active");
    })

    slides.forEach((slide) =>{
        slide.classList.remove("active");
    })
    
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
};

btns.forEach((btn,i ) => {
    btn.addEventListener("click", ()=>{
        sliderNav(i)
    })
});