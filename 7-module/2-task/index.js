import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render();
   
  }


  render() {
     this.modal = createElement(`
       <div class="modal">
         <div class="modal__overlay"></div>
         <div class="modal__inner">
           <div class="modal__header">
             <button type="button" class="modal__close">
               <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
             </button>
             <h3 class="modal__title"></h3>
           </div>
           <div class="modal__body"></div>
         </div>
       </div>
     `);
  }
 

  open() {
    document.body.append(this.modal);
    document.body.classList.add('is-modal-open');
    document.addEventListener('keydown', this.handleKeyDown);
    this.modal.querySelector('button.modal__close').addEventListener('click', this.close);
   
  }

  setTitle(title) {
    this.modal.querySelector('.modal__title').textContent = title;

  }

  setBody(node) {
    this.modal.querySelector('.modal__body').innerHTML = ''; // очищаем старое body
    this.modal.querySelector('.modal__body').append(node);
    
  }

  close = () => {
    
      document.body.classList.remove('is-modal-open');
      document.removeEventListener('keydown', this.handleKeyDown);
      
      if (this.modal) {
        this.modal.remove();
      }
      if (this.overlayElement) {
        this.overlayElement.remove();
        this.overlayElement = null; 
      }
    
  }

  handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      event.preventDefault();
      this.close();
    }
  }
}

