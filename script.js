var navtoggle=document.getElementById("nav_toggle")
var menu=document.querySelector(".menu")

function show_toggle(event){
    navtoggle=event.preventDefault()
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }

}
let slidePosition=0;
const sliders=document.querySelectorAll(".hero-section");
const totalSlider=sliders.length;
const btnPrev=document.getElementById("btn-prev");
const btnNext=document.getElementById("btn-next");


btnPrev.addEventListener('click',function(){
   prevSlide();
});
btnNext.addEventListener('click',function(){
    nextSlide();
});

function updatePosition(){
    sliders.forEach((slide, index)=>{
        slide.classList.remove('active');
        slide.classList.add('hidden');
    });
    sliders[slidePosition].classList.add('active');
    

    carouselIndicator.forEach((carouselIndicator, index)=>{
        carouselIndicator.classList.remove('carousel-active');
    });
    carouselIndicator[slidePosition].classList.add('carousel-active');
}

function prevSlide(){
    if(slidePosition===0){
        slidePosition=totalSlider-1;
    }
    else{
        slidePosition--;
    } 
    updatePosition();
}
function nextSlide(){
    if(slidePosition===totalSlider-1){
        slidePosition=0;
    }
    else{
        slidePosition++;
    }
    updatePosition();
}

const carouselContainer=document.querySelector(".carousel-container");
sliders.forEach((slide, index)=>{
    const div=document.createElement('div');
    div.classList.add('carousel-indicator');
    carouselContainer.appendChild(div);
});
const carouselIndicator=document.querySelectorAll('.carousel-indicator');
carouselIndicator[slidePosition].classList.add('carousel-active');

carouselIndicator.forEach((carouselIndicator, index)=>{
    carouselIndicator.addEventListener('click',function(){
        slidePosition=index;
        updatePosition();
    });     
});

setInterval(()=>{
   if(slidePosition==totalSlider-1){
    slidePosition=0;
   }
   else{
    slidePosition++;
   }
   updatePosition();
},5000);
