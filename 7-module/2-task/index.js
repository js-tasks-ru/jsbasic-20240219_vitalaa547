import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render();
    // this.modalElement = null;
    // this.modalTitleElement = null;
    // this.modalBodyElement = null;
    // this.closeButtonElement = null;
    // this.isOpen = false;
    // this.tempTitle = null;
    // this.tempBody = null;
    // this.overlayElement = null;

    // this.open = this.open.bind(this);
    // this.close = this.close.bind(this);
    // this.handleKeyDown = this.handleKeyDown.bind(this);
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
  // Зачем так сложно?
  /*createOverlay() {
    this.overlayElement = document.createElement('div');
    this.overlayElement.classList.add('modal-overlay');
    document.body.appendChild(this.overlayElement);
  }

  createModal() {
    this.modalElement = document.createElement('div');
    this.modalElement.classList.add('modal');

    
    this.modalTitleElement = document.createElement('h2');
    this.modalTitleElement.classList.add('modal__title');
    if (this.tempTitle) {
      this.modalTitleElement.textContent = this.tempTitle;
      this.tempTitle = null;
    }
    this.modalElement.appendChild(this.modalTitleElement);

    
    this.modalBodyElement = document.createElement('div');
    this.modalBodyElement.classList.add('modal__body');
    if (this.tempBody) {
      this.modalBodyElement.appendChild(this.tempBody);
      this.tempBody = null;
    }
    this.modalElement.appendChild(this.modalBodyElement);

    
    this.closeButtonElement = document.createElement('button');
    this.closeButtonElement.innerHTML = 'X';
    this.closeButtonElement.classList.add('modal__close');
    this.closeButtonElement.addEventListener('click', this.close);
    this.modalElement.appendChild(this.closeButtonElement);

    document.body.appendChild(this.modalElement);
  }*/

  open() {
    document.body.append(this.modal);
    document.body.classList.add('is-modal-open');
    document.addEventListener('keydown', this.handleKeyDown);
    this.modal.querySelector('button.modal__close').addEventListener('click', this.close);
    /*if (!this.isOpen) {
      if (!this.overlayElement) {
        this.createOverlay();
      }
      if (!this.modalElement) {
        // this.createModal();
      }
      document.body.appendChild(this.modal);
    
      document.body.classList.add('is-modal-open');
      window.addEventListener('keydown', this.handleKeyDown);
      this.isOpen = true;
    }*/
  }

  setTitle(title) {
    this.modal.querySelector('.modal__title').textContent = title;
    // if (this.isOpen && this.modalTitleElement) {
    //   this.modalTitleElement.textContent = title;
    // } else {
    //   this.tempTitle = title;
    // }
  }

  setBody(node) {
    this.modal.querySelector('.modal__body').innerHTML = ''; // очищаем старое body
    this.modal.querySelector('.modal__body').append(node);
    // if (this.isOpen && this.modalBodyElement) {
     
    //   this.modalBodyElement.appendChild(node);
    // } else {
    //   this.tempBody = node;
    // }
  }

  close = () => {
    // if (this.isOpen) {
      document.body.classList.remove('is-modal-open');
      document.removeEventListener('keydown', this.handleKeyDown);
      // this.isOpen = false;
      if (this.modal) {
        this.modal.remove();
      }
      if (this.overlayElement) {
        this.overlayElement.remove();
        this.overlayElement = null; 
      }
    // }
  }

  handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      event.preventDefault();
      this.close();
    }
  }
}

// let modal = new Modal();
// modal.setTitle('Заголовок модального окна');
// let modalBody = document.createElement('div');
// modalBody.innerHTML = '<b>Тут содержится тело модального окна</b>';
// modal.setBody(modalBody);
// modal.open();
