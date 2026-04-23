fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const main = document.querySelector('main');
    data.forEach(product => {
      const productElement = document.createElement('section');
        productElement.classList.add('product');
        productElement.innerHTML = `
          <picture>
            <source media="(min-width: 768px)" srcset="${product.image.tablet}">
            <source media="(min-width: 375px)" srcset="${product.image.mobile}">
            <img src="${product.image.desktop}" alt="${product.name}">
          </picture>
          <h2>${product.name}</h2>
          <p class="price">$${product.price.toFixed(2)}</p>
          <button class="add-to-cart">Add to Cart</button>
        `;
        main.appendChild(productElement);
      });
    });