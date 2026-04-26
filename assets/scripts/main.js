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
            <img class="product-image" src="${product.image.desktop}" alt="${product.name}">
           <div class= "cart-box">
            <button class="add-to-cart"> Add to Cart</button>
           </div>
            
          </picture>
          <p class="category">${product.category}</p>
          <h2>${product.name}</h2>
          <p class="price">$${product.price.toFixed(2)}</p>`;
          const cartbox = productElement.querySelector('.cart-box');
          let quantity = 0;
          function renderizar(){
          if ( quantity ===0) {
            cartbox.innerHTML = `<button class="add-to-cart"> Add to Cart</button>`;
            const addButton = cartbox.querySelector('.add-to-cart');
            addButton.addEventListener('click', () => {
              quantity++;
              renderizar();
            });
          } else {
            cartbox.innerHTML = `
            <div class="quantity-controls">
              <button class="decrease">-</button>
              <span class="quantity">${quantity}</span>
              <button class="increase">+</button>
            </div>`;
            
            const decreaseButton = cartbox.querySelector('.decrease');
            const increaseButton = cartbox.querySelector('.increase');
            decreaseButton.addEventListener('click', () => {
              quantity--;
              renderizar();
            });
            increaseButton.addEventListener('click', () => {
              quantity++;
              renderizar();
            });
          }}
          renderizar();
        main.appendChild(productElement);
      });
    });
