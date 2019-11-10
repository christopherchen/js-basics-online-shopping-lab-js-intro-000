var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var obj = {itemName: item, itemPrice: Math.floor(Math.random() * 100)};
 cart.push(obj);
 return `${obj.itemName} has been added to your cart.`; 
}

function viewCart() {
  // write your code here
  var items = [];
  var numItems = 0;
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    for (var i = 0; i < cart.length; i++) {
      items.push([cart[i].itemName, cart[i].itemPrice]);
      numItems++;
    }
    return `In your cart, you have `
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
