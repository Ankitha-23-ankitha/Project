const productUrlInput = document.getElementById('product-url');
const targetPriceInput = document.getElementById('target-price');
const addProductBtn = document.getElementById('add-product-btn');
const productList = document.getElementById('product-list');

addProductBtn.addEventListener('click', () => {
    const productUrl = productUrlInput.value;
    const targetPrice = parseFloat(targetPriceInput.value);

    if (!productUrl || isNaN(targetPrice)) {
        alert('Please enter valid URL and target price.');
        return;
    }

    // Create a list item for the new product
    const listItem = document.createElement('li');
    listItem.textContent = URL: ${productUrl}, Target Price: $${targetPrice.toFixed(2)};

    // Add the list item to the product list
    productList.appendChild(listItem);

    // Clear input fields
    productUrlInput.value = '';
    targetPriceInput.value = '';d
});