document.addEventListener("DOMContentLoaded", () => {
    var productosContenedor = document.getElementById("productosContenedor");

    fetch('https://dummyjson.com/products?limit=20')
        .then(response => response.json())
        .then((data) => {
            var productos = data.products;
            // Limpio el contenedor de productos
            productosContenedor.innerHTML = "";

            productos.forEach((producto) => {
                const cardDiv = document.createElement("div");
                cardDiv.className = "card";

                cardDiv.innerHTML = `
                <img src="${producto.thumbnail}" alt="${producto.title}" class="">
                <div class="icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                        class="bi bi-heart" viewBox="0 0 16 16">
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                </div>
                <div class="card-body">
                    <h3 class="card-title mt-3">${producto.title}</h3>
                    <p class="nombreAutor">${producto.description}</p>
                    <p class="precioLibro">$ ${producto.price}</p>
                    <div class="containerBotonComprar">
                        <button type="button" class="btn botonCard">comprar</button>
                    </div>
                </div>
                `;

                // Agregar evento al botón "Comprar"
                const botonComprar = cardDiv.querySelector(".botonCard");
                botonComprar.addEventListener("click", () => {
                    agregarAlCarrito(producto);
                });

                // Añadir la card al contenedor de productos
                productosContenedor.appendChild(cardDiv);
            });
        })
        .catch((error) => console.log("Error de conexión", error));


        function agregarAlCarrito(producto){
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(producto);
            localStorage.setItem("cart", JSON.stringify(cart));
            Swal.fire({
                title: 'Producto agregado',
                text: `${producto.title} ha sido agregado al carrito`,
                icon: 'success',
                confirmButtonText: 'Aceptar',
            });
            

        }
});







