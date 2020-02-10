

$(document).ready(function(){
var slideIndex = 0;
showSliderImage();

  function showSliderImage() {

   var i;
  var slides = document.getElementsByClassName("SliderImage");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  

  setTimeout(showSliderImage, 4000); // Change image every 2 seconds
}

});









