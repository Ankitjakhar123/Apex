const products = [
    { name: 'Smartphone', category: 'electronics', price: 499, rating: 4.5, img: 'https://via.placeholder.com/120?text=Phone' },
    { name: 'Laptop', category: 'electronics', price: 899, rating: 4.7, img: 'https://via.placeholder.com/120?text=Laptop' },
    { name: 'Novel', category: 'books', price: 19, rating: 4.2, img: 'https://via.placeholder.com/120?text=Book' },
    { name: 'T-Shirt', category: 'clothing', price: 25, rating: 4.0, img: 'https://via.placeholder.com/120?text=Shirt' },
    { name: 'Headphones', category: 'electronics', price: 99, rating: 4.3, img: 'https://via.placeholder.com/120?text=Headphones' },
    { name: 'Jeans', category: 'clothing', price: 45, rating: 4.1, img: 'https://via.placeholder.com/120?text=Jeans' },
    { name: 'Cookbook', category: 'books', price: 29, rating: 4.6, img: 'https://via.placeholder.com/120?text=Cookbook' }
];

const productList = document.getElementById('productList');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');

function renderProducts(list) {
    productList.innerHTML = '';
    list.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Category: ${product.category}</p>
            <p>Rating: ${product.rating}</p>
            <div class="price">$${product.price}</div>
        `;
        productList.appendChild(card);
    });
}

function filterAndSort() {
    let filtered = products;
    const cat = categoryFilter.value;
    if (cat !== 'all') {
        filtered = filtered.filter(p => p.category === cat);
    }
    const sort = sortFilter.value;
    if (sort === 'price-asc') {
        filtered = filtered.slice().sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
        filtered = filtered.slice().sort((a, b) => b.price - a.price);
    } else if (sort === 'rating-desc') {
        filtered = filtered.slice().sort((a, b) => b.rating - a.rating);
    }
    renderProducts(filtered);
}

categoryFilter.onchange = filterAndSort;
sortFilter.onchange = filterAndSort;

renderProducts(products);
