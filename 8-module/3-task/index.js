export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (!product) {
      return;  // ваш код
  } let existingItem = this.cartItems.find(item => item.product.id === product.id);

  if (existingItem) {
    existingItem.count++;
  } else {
    this.cartItems.push({ product: product, count: 1 });
  }

  this.onProductUpdate(existingItem || { product, count: 1 });
}


  updateProductCount(productId, amount) {
    let itemToUpdate = this.cartItems.find(item => item.product.id === productId);

    if (itemToUpdate) {
      itemToUpdate.count += amount;

      if (itemToUpdate.count <= 0) {
        this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
      }

      this.onProductUpdate(itemToUpdate);
    } // ваш код
  }

  isEmpty() {
    return this.cartItems.length === 0;// ваш код
  }

  getTotalCount() {
    return this.cartItems.reduce((total, item) => total + item.count, 0);// ваш код
  }

  getTotalPrice() {
    return this.cartItems.reduce((totalPrice, item) => totalPrice + (item.product.price * item.count), 0);// ваш код
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

