function initCarousel() {
  // ваш код...
  
    let elem = document.querySelector('[data-carousel-holder]');
    let arrowLeft = elem.querySelector('.carousel__arrow_left');
    let arrowRight = elem.querySelector('.carousel__arrow_right');
    let sliderList = elem.querySelector('.carousel__inner');
    let slides = elem.querySelectorAll('.carousel__slide');
    let slideWidth = sliderList.offsetWidth;
    let counter = 0;
  
    arrowLeft.style.display = 'none';
  
    elem.addEventListener('click', function (event) {
      slideWidth = sliderList.offsetWidth; 
      
      let isLeftClick = event.target.closest('.carousel__arrow_left');
      let isRightClick = event.target.closest('.carousel__arrow_right');
  
      if (isLeftClick) {
        counter--;
        arrowLeft.style.display = counter > 0 ? '' : 'none';
        arrowRight.style.display = '';
      } else if (isRightClick) {
        counter++;
        arrowLeft.style.display = '';
        arrowRight.style.display = counter >= slides.length - 1 ? 'none' : '';
      }
  
      if (isLeftClick || isRightClick) {
        let offset = -slideWidth * counter;
        sliderList.style.transform = `translateX(${offset}px)`;
      }
    });
  }