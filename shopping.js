const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cartList = document.getElementById('cartList');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
const cart = [];

addProductButton.addEventListener('click', () => {
    const nameValue = productNameInput.value.trim();
    const priceValue = Number(productPriceInput.value);

    // 1. Guard check comes FIRST
    if (!nameValue || !productPriceInput.value || priceValue > 100 || priceValue <= 0) {
        return;
        alert("Please enter a value!");
    }
    // 2. Create the list item
    const li = document.createElement('li');
    li.textContent = `${nameValue} - $${priceValue.toFixed(2)} `;

    // 3. Create the remove button for THIS specific item
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove'; // or '❌'

    // Add click listener to the remove button
    removeBtn.addEventListener('click', () => {
        // Subtract item price from total
        updateTotalPrice(-priceValue);
        
        // Remove the <li> from the page
        li.remove();
    });

    // 4. Attach button inside the li, then append li to the list
    li.append(removeBtn);
    cartList.append(li);

    // 5. Update total cost
    updateTotalPrice(priceValue);

    // 6. Reset inputs
    productNameInput.value = '';
    productPriceInput.value = '';
});

// Helper function to update total
function updateTotalPrice(amount) {
    totalPrice += amount;
    totalPriceSpan.textContent = totalPrice.toFixed(2);
}