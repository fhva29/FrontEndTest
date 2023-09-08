document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const autocomplete = document.querySelector('.autocomplete');
    const productImages = document.querySelector('.product-images');

    const products = [
        { name: 'Bike', image: './static/bike.png' },
        { name: 'Bag', image: './static/bag.jpeg' },
        { name: 'Hanger', image: './static/hanger.png' },
        { name: 'Shirt', image: './static/shirt.jpeg' },
    ];

    function updateProductImages(productName) {
        const product = products.find((p) => p.name === productName);
        if (product) {
            const imageUrl = product.image;
            productImages.innerHTML = `<img src="${imageUrl}" alt="${productName}">`;
        } else {
            productImages.innerHTML = '';
        }
    }

    function handleSearchInput() {
        const searchText = searchBar.value.toLowerCase();
        const matchedProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchText)
        );

        const autocompleteResults = matchedProducts.map((product) => `
            <div class="autocomplete-item">
                <img src="${product.image}" alt="${product.name}">
                <span>${product.name}</span>
            </div>
        `).join('');

        autocomplete.innerHTML = autocompleteResults;

        autocomplete.querySelectorAll('.autocomplete-item').forEach((item) => {
            item.addEventListener('click', () => {
                searchBar.value = item.querySelector('span').textContent;
                autocomplete.innerHTML = '';
                updateProductImages(searchBar.value);
            });
        });
    }

    searchBar.addEventListener('input', handleSearchInput);
});
