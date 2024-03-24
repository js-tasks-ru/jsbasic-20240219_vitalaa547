function createElement(html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
}
export default class ProductCard {
    constructor(product) {
    
   

        this.product = product;
        this.render();
        this.elem.addEventListener('click', this.onButtonClick);
    }

    render() {
        this.elem = createElement (
        ` <div class="card">
        <div class="card__top">
            <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product"></img>
            <span class="card__price">€${this.product.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
            <div class="card__title">${this.product.name}</div>
            <button type="button" class="card__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon"></img>
            </button>
        </div>
    </div>`)
;
}

onButtonClick = () => {
if (event.target.closest('.card__button')) {
this.elem.dispatchEvent(new CustomEvent("product-add", {
    detail: this.product.id,
    bubbles: true
}));
}
}}let product = {
    name: "Laab kai chicken salad", // название товара
    price: 10, // цена товара
    category: "salads", // категория, к которой он относится, нам это понадобится чуть позже
    image: "laab_kai_chicken_salad.png", // название картинки товара
    id: "laab-kai-chicken-salad" // уникальный идентификатор товара, нужен для добавления товара в корзину
}