import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    
      
       
        this.filteredProducts = products;
        
        this.render();
      }
    
      render() {
        this.elem = document.createElement('div');
        this.elem.classList.add('products-grid');
        this.elem = createElement('<div class="products-grid"><div class="products-grid__inner"></div></div>');
        this.elem.innerHTML = `
          <div class="products-grid__inner">
            <!--ВОТ ТУТ БУДУТ КАРТОЧКИ ТОВАРОВ-->
          </div>
        `;
        
        this.products.forEach(product => {
          const productCard = new ProductCard(product);
          this.elem.querySelector('.products-grid__inner').appendChild(productCard.elem);
        });
      }
    
      updateFilter(filters) {
        Object.assign(this.filters, filters);
        this.filteredProducts = this.products.filter(product => {
          if (this.filters.noNuts && product.nuts) {
            return false;
          }
          
          if (this.filters.vegeterianOnly && !product.vegeterian) {
            return false;
          }
          
          if (this.filters.maxSpiciness !== undefined && product.spiciness > this.filters.maxSpiciness) {
            return false;
          }
          
          if (this.filters.category && product.category != this.filters.category) {
            return false;
          }
          
          return true;
        });
    
        this.elem.querySelector('.products-grid__inner').innerHTML = '';
        this.filteredProducts.forEach(product => {
          const productCard = new ProductCard(product);
          this.elem.querySelector('.products-grid__inner').appendChild(productCard.elem);
        });
      }
    }
    
   
    
  
