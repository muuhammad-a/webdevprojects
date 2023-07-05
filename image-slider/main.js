let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let slider = document.getElementById('slider');
let slides = slider.getElementsByTagName('div');
let slideIndex = 0;
let dots = document.querySelectorAll('.dots span');
dots.forEach( dot => {
   dot.addEventListener('click', function(){
    let index = Array.from(this.parentElemnt.children).indexOf(this);
    showSlide(index);
   })
});

function showSlide(index){
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display= 'none';
        dots[i].style.backgroundColor='grey';
    }
    slides[index].style.display='block';
    dots[index].style.backgroundColor = 'black';
};

function next(){
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
        clearInterval(interval);
    }
    showSlide(slideIndex);
};

function prev(){
    slideIndex--;
    if(slideIndex < 0){
        slideIndex = slides.length - 1;
        clearInterval(interval);
    }
    showSlide(slideIndex)
}


let interval = setInterval(next, 1000)

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);