const contenedor =
    document.getElementById("contenedorMapa");

const modal =
    document.getElementById("modal");

const titulo =
    document.getElementById("titulo");

const descripcion =
    document.getElementById("descripcion");

const foto =
    document.getElementById("foto");

const cerrar =
    document.getElementById("cerrar");

fetch("json/atractivos.json")
.then(response => response.json())
.then(datos => {
    
    datos.forEach(atractivo => {
        const punto =
            document.createElement("div");
        punto.className = "punto";
        punto.style.top =
            atractivo.top;
        punto.style.left =
            atractivo.left;
        punto.onclick = () => {
            mostrarAtractivo(
                atractivo
            );
        };

        contenedor.appendChild(
            punto
        );

    });

});

function mostrarAtractivo(atractivo)
{
    titulo.textContent = atractivo.nombre;
    descripcion.textContent = atractivo.descripcion;
    foto.src = atractivo.imagen;
    modal.style.display =
        "block";
}

cerrar.onclick = () => 
{
    modal.style.display ="none";
}