import { products } from './productos.js';


// Función para mostrar productos filtrados
function displayProducts(filteredProducts) {
    const container = document.getElementById("products-container");
    container.innerHTML = "";

    if (filteredProducts.length === 0) {
        container.innerHTML = `<p class="text-muted">No hay productos que coincidan con el filtro.</p>`;
        return;
    }

    filteredProducts.forEach(product => {
        const col = document.createElement("div");
        col.className = "col-md-4";

        col.innerHTML = `
      <div class="card product-card">
        <img src="${product.image}" class="card-img-center" alt="${product.name}" />
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">$${product.price.toFixed(2)}</p>
          <button class="btn btn-primary" disabled>Comprar</button>
        </div>
      </div>
    `;

        container.appendChild(col);
    });
}

// Función para obtener tipos seleccionados y filtrar
function filterProducts() {
    const checkboxes = document.querySelectorAll(".type-filter");
    const selectedTypes = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    const filtered = products.filter(p => selectedTypes.includes(p.type));
    displayProducts(filtered);
}

// Evento para los checkboxes
document.querySelectorAll(".type-filter").forEach(cb => {
    cb.addEventListener("change", filterProducts);
});

// Mostrar todos los productos al cargar
window.addEventListener("DOMContentLoaded", () => {
    displayProducts(products);
});
