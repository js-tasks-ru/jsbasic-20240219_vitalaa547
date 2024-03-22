export default class StepSlider {
  constructor({ steps, value = 0 }) {
   
    this.steps = steps;
    this.value = value;
    this.render();
    this.addClickEvent();
    this.addDragEvent();
  }
  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');
    this.elem.innerHTML =
    `<div class="slider__thumb" style="left: ${this.value / (this.steps - 1) * 100}%;">         <span class="slider__value">${this.value}</span>       </div>       <div class="slider__progress" style="width: ${this.value / (this.steps - 1) * 100}%;"></div>       <div class="slider__steps">         ${'<span></span>'.repeat(this.steps)}       </div>
    ;`
    this.stepsContainer = this.elem.querySelector('.slider__steps');
    
this.stepsContainer.children[this.value].classList.add('slider__step-active');
}

addClickEvent() {
  this.elem.addEventListener('click', (event) => {
  this.updateSlider(event);
  });
  }
  
  addDragEvent() {
  let thumb = this.elem.querySelector('.slider__thumb');
  let progress = this.elem.querySelector('.slider__progress');
  thumb.ondragstart = () => false;

thumb.addEventListener('pointerdown', (event) => {
  this.elem.classList.add('slider_dragging');

  document.addEventListener('pointermove', this.onPointerMove);
  document.addEventListener('pointerup', (event) => {
    document.removeEventListener('pointermove', this.onPointerMove);
    this.updateSlider(event);
    this.elem.classList.remove('slider_dragging');
  }, { once: true });
});
}
onPointerMove = (event) => {
  let left = event.clientX - this.elem.getBoundingClientRect().left;
  let leftRelative = left / this.elem.offsetWidth;
  let segments = this.steps - 1;
  let approximateValue = leftRelative * segments;
  let value = Math.round(approximateValue);
  let valuePercents = (value / segments) * 100;
  this.elem.querySelector('.slider__thumb').style.left = `${valuePercents}%`;
this.elem.querySelector('.slider__progress').style.width = `${valuePercents}%`;

this.stepsContainer.querySelector('.slider__step-active').classList.remove('slider__step-active');
this.stepsContainer.children[value].classList.add('slider__step-active');

this.value = value;
this.elem.querySelector('.slider__value').textContent = value;

let customEvent = new CustomEvent('slider-change', {
  detail: value,
  bubbles: true
});
this.elem.dispatchEvent(customEvent);
}
updateSlider(event) {
  const left = event.clientX - this.elem.getBoundingClientRect().left;
  const leftRelative = left / this.elem.offsetWidth;
  let segments = this.steps - 1;
  let approximateValue = leftRelative * segments;
  let value = Math.round(approximateValue);
  let valuePercents = (value / segments) * 100;
  this.elem.querySelector('.slider__thumb').style.left = `${valuePercents}%`;
this.elem.querySelector('.slider__progress').style.width = `${valuePercents}%`;

this.stepsContainer.querySelector('.slider__step-active').classList.remove('slider__step-active');
this.stepsContainer.children[value].classList.add('slider__step-active');

this.value = value;
this.elem.querySelector('.slider__value').textContent = value;

let customEvent = new CustomEvent('slider-change', {
  detail: value,
  bubbles: true
});
this.elem.dispatchEvent(customEvent);
}
}    