
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  const totalSlides = slides.length;
  if (index >= totalSlides) 
  {
    currentIndex = 0;
  }
  else if (index < 0)
    { 
        currentIndex = totalSlides - 1;
    } 
  else 
  {
    currentIndex = index
  }

  const offset = -currentIndex * 600;
  document.querySelector('.slides').style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  showSlide(currentIndex - 1);
}

function prevSlide() {
  showSlide(currentIndex + 1);
}