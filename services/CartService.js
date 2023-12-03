class CartService {
    constructor() {
       this.cartItems = [];
    }
   
    addCartItem(name, price) {
       const cartItem = { name, price };
       this.cartItems.push(cartItem);
       return cartItem;
    }
   
    getCartItems() {
       return this.cartItems;
    }
   
    updateCartItem(index, updatedCartItem) {
       this.cartItems[index] = updatedCartItem;
       return this.cartItems[index];
    }
   }
   
   module.exports = CartService;