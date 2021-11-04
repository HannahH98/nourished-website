let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-gerelateerd');
const totalSlides = slides.length;

let ImagesPosition = 0;
const images = document.getElementsByClassName('carousel-journal');
const totalImages = images.length;


document.
  getElementById('volgendegerelateerd')
  .addEventListener("click", function() {
    moveToNextSlide();
  });

document.
  getElementById('vorigegerelateerd')
  .addEventListener("click", function() {
    moveToNextSlide();
});

document.
  getElementById('volgendejournal')
  .addEventListener("click", function() {
    moveToNextImages();
  });

document.
  getElementById('vorigejournal')
  .addEventListener("click", function() {
    moveToNextImages();
});



function updateSlidePosition(){
    for(let slide of slides) {
        slide.classList.remove('visible-gerelateerd');
        slide.classList.add('hidden-gerelateerd');
    }

    slides[slidePosition].classList.add('visible-gerelateerd')
}


function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {
      slidePosition++;
    }

  updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition === 0) {
      slidePosition = totalSlides - 1;
    } else {
      slidePosition--;
    }
  
    updateSlidePosition();
}

function updateImagesPosition(){
    for(let image of images) {
        image.classList.remove('visible-journal');
        image.classList.add('hidden-journal');
    }

    images[ImagesPosition].classList.add('visible-journal')
}

function moveToNextImages() {
    if (ImagesPosition === totalImages - 1) {
        ImagesPosition = 0;
    } else {
        ImagesPosition++;
    }

  updateImagesPosition();
}

function moveToPrevImages() {
    if (ImagesPosition === 0) {
        ImagesPosition = totalImages - 1;
    } else {
        ImagesPosition--;
    }
  
    updateImagesPosition();
}


