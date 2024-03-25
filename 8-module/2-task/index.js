import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    
      
        this.products = products;
        this.filteredProducts = products;
        
        this.render();
      }
    
      render() {
        this.elem = document.createElement('div');
        this.elem.classList.add('products-grid');
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
        this.filteredProducts = this.products.filter(product => {
          if (filters.noNuts && product.nuts === true) {
            return false;
          }
          
          if (filters.vegetarianOnly && product.vegetarian !== true) {
            return false;
          }
          
          if (filters.maxSpiciness !== undefined && filters.maxSpiciness < product.spiciness) {
            return false;
          }
          
          if (filters.category !== undefined && filters.category !== '' && filters.category !== product.category) {
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
    
    let productGrid = new ProductGrid(products);
    
  
