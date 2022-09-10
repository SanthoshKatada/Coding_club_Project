var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlides(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}


//----------------------------------------------------------//


var slidesIndex = 2;
showSlide(slidesIndex);

function plus(n) {
  showSlide(slidesIndex += m);
}

function currentSlide(m) {
  showSlide(slidesIndex = m);
}

function showSlide(m) {
  var j;
  var slide = document.getElementsByClassName("slide2");
  if (m > slide.length) {slidesIndex = 1}    
  if (m < 1) {slidesIndex = slide.length}
  for (j = 0; j < slide.length; j++) {
      slide[j].style.display = "none";  
  }
  slide[slidesIndex-1].style.display = "block";  
}


