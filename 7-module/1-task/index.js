import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.addEventListeners();
}

render() {
    this.elem = document.createElement('nav');
    this.elem.classList.add('ribbon');

    const ribbonInner = document.createElement('div');
    ribbonInner.classList.add('ribbon__inner');

    this.categories.forEach(category => {
        const categoryLink = document.createElement('a');
        categoryLink.href = '#';
        categoryLink.classList.add('ribbon__item');
        categoryLink.textContent = category.name;
        categoryLink.dataset.id = category.id;
        ribbonInner.appendChild(categoryLink);
    });

    this.elem.appendChild(ribbonInner);
}

addEventListeners() {
    const ribbonInner = this.elem.querySelector('.ribbon__inner');
    const leftArrow = document.createElement('button');
    leftArrow.classList.add('ribbon__arrow', 'ribbon__arrow_left', 'ribbon__arrow_visible');
    const rightArrow = document.createElement('button');
    rightArrow.classList.add('ribbon__arrow', 'ribbon__arrow_right', 'ribbon__arrow_visible');

    leftArrow.addEventListener('click', () => {
        ribbonInner.scrollBy(-350, 0);
    });

    rightArrow.addEventListener('click', () => {
        ribbonInner.scrollBy(350, 0);
    });

    ribbonInner.addEventListener('scroll', () => {
        const scrollLeft = ribbonInner.scrollLeft;
        const scrollWidth = ribbonInner.scrollWidth;
        const clientWidth = ribbonInner.clientWidth;
        let scrollRight = scrollWidth - scrollLeft - clientWidth;

        if (scrollLeft === 0) {
            leftArrow.classList.remove('ribbon__arrow_visible');
        } else {
            leftArrow.classList.add('ribbon__arrow_visible');
        }

        if (scrollRight <= 1) {
            rightArrow.classList.remove('ribbon__arrow_visible');
        } else {
            rightArrow.classList.add('ribbon__arrow_visible');
        }
    });

    ribbonInner.addEventListener('click', (event) => {
        if (event.target.classList.contains('ribbon__item')) {
            event.preventDefault();

            const activeCategory = this.elem.querySelector('.ribbon__item_active');
            if (activeCategory) {
                activeCategory.classList.remove('ribbon__item_active');
            }

            event.target.classList.add('ribbon__item_active');

            const selectEvent = new CustomEvent('ribbon-select', {
                detail: event.target.dataset.id,
                bubbles: true
            });
            this.elem.dispatchEvent(selectEvent);
        }
    });

    this.elem.appendChild(leftArrow);
    this.elem.appendChild(rightArrow);
}
}

let categories = [
{
    id: '',
    name: 'All'
},
{
    id: 'salads',
    name: 'Salads'
},
{
    id: 'soups',
    name: 'Soups'
}
];
