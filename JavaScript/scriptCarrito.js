document.addEventListener("DOMContentLoaded", () => {
    const carritoitemStorage = JSON.parse(localStorage.getItem('cart')) || [];
    const carritoTableBody = document.getElementById("carritoItems");
    const totalGeneral = document.getElementById("totalCarrito");
    let total = 0;

    //Cargar productos en la tabla del carrito
    carritoitemStorage.forEach(item => {
        const row = document.createElement('tr');
        //Nombre del producto
        var nombreCelda = document.createElement('td');
        nombreCelda.textContent = item.title;
        row.appendChild(nombreCelda);
        //Precio del producto
        var precioCelda = document.createElement('td');
        precioCelda.textContent = `$${item.price}`;
        row.appendChild(precioCelda);
        //Cantidad (hardcodeado 1)
        var cantidadCelda = document.createElement('td');
        cantidadCelda.textContent = 1;
        row.appendChild(cantidadCelda);
        //Subtotal
        const subtotal = item.price;
        const subtotalCelda = document.createElement('td');
        subtotalCelda.textContent = `$${subtotal}`;
        row.appendChild(subtotalCelda);

        //Agregar fila a la tabla
        carritoTableBody.appendChild(row);

        // sumar al total
        total += subtotal;
    })

    //mostrar el total
    totalGeneral.textContent = total.toFixed(2);
    
    //Vaciar el carrito y volver al inicio
    document.getElementById("limpiarCarrito").addEventListener('click', () => {
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    });

    //Finalizar la compra

    document.getElementById('finalizarCompra').addEventListener('click', () => {
        
        Swal.fire({
            title: "Se ha procesado su compra!",
            icon: "success",
            draggable: true
          });

        

        //Limpiar el carrito
        localStorage.removeItem('cart');

        //Refirigir al inicio despues de 4 segundos
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 4000);
    })
    

    
});