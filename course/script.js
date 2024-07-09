/* let cart = [];

function addToCart(courseName, coursePrice) {
    cart.push({name: courseName, price: coursePrice});
    alert(courseName + " has been added to your cart.");
    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById('cart');
    if (!cartElement) return;
    
    cartElement.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `<p>${item.name} - $${item.price}</p>
                              <button onclick="removeFromCart(${index})">Remove</button>`;
        cartElement.appendChild(cartItem);
    });
    updateTotal();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateTotal() {
    const totalElement = document.getElementById('total');
    if (!totalElement) return;
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalElement.textContent = 'Total: $' + total;
}

function completePurchase() {
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
}
*/

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(courseName, coursePrice) {
    cart.push({ name: courseName, price: coursePrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(courseName + " has been added to your cart.");
    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById('cart');
    if (!cartElement) return;
    
    cartElement.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `<p>${item.name} - $${item.price}</p>
                              <button onclick="removeFromCart(${index})">Remove</button>`;
        cartElement.appendChild(cartItem);
    });
    updateTotal();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function updateTotal() {
    const totalElement = document.getElementById('total');
    if (!totalElement) return;
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalElement.textContent = 'Total: $' + total;
}

function completePurchase() {
    alert('Thank you for your purchase!');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

document.addEventListener('DOMContentLoaded', () => {
    updateCart();
});
