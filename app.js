// JavaScript Document
let cart = [];
let totalPrice = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    totalPrice += itemPrice;
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; // Clear previous items

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - $${item.price}`;
        cartItemsDiv.appendChild(itemDiv);
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
    document.getElementById('cart-count').textContent = cart.length;
}

// Optional: Handle checkout action
document.getElementById('checkout').addEventListener('click', () => {
    alert('Checkout feature is not implemented yet.');
    // Implement checkout logic here (e.g., form submission, payment gateway)
});


			// pop up image add on start>>



// Get elements
const popupTrigger = document.getElementById('popup-trigger');
const popupOverlay = document.getElementById('popup-overlay');
const closeBtn = document.getElementById('close-btn');

// Event listener for opening the pop-up
popupTrigger.addEventListener('click', function() {
    popupOverlay.style.display = 'flex';  // Show the overlay
});

// Event listener for closing the pop-up
closeBtn.addEventListener('click', function() {
    popupOverlay.style.display = 'none';  // Hide the overlay
});

// Close the pop-up if the user clicks outside of the image
popupOverlay.addEventListener('click', function(event) {
    if (event.target === popupOverlay) {
        popupOverlay.style.display = 'none';  // Hide the overlay if clicked outside the image
    }
});
// pop up image add on end<<