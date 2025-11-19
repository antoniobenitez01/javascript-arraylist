var articulos = [];
var totalPagar = 0.00;

function resetArticulos()
{
    let articulosText = document.getElementById("lista_articulos");
    articulosText.style.display = "none";
    articulosText.innerHTML = "";
    articulos = [];
    totalPagar = 0.00;
    mostrarTotal();
}

function mostrarTotal()
{
    let resultadoText = document.getElementById("Resultado");
    resultadoText.style.display = "block";
    resultadoText.innerHTML = "<strong>Total:</strong> " + totalPagar + "€";
}

function pagar()
{
    let pago = validarPago();
    if(totalPagar <= 0)
    {
        let box = document.getElementById("pago");
        var mensajeRetorno = document.getElementById("EX_Pago");
        mensajeRetorno.style.display = "flex";
        box.classList.add("inputEX");
        mensajeRetorno.innerHTML = "El total es 0€";
    }
    else if(pago != null)
    {
        mostrarResultado(pago);
    }
}

function mostrarResultado(pago)
{
    let resultadoText = document.getElementById("Resultado");
    resultadoText.style.display = "block";
    let cambio = pago - totalPagar;
    resultadoText.innerHTML = "<strong>Total:</strong> " + totalPagar +"€<br><strong>Efectivo:</strong> " + pago + "€<br><strong>Cambio:</strong> " + cambio + "€";
}

function validarInputs()
{
    validarNombre();
    validarPrecio();
    validarCantidad();
}

function anadirArticulo()
{
    let nombre = validarNombre();
    let precio = validarPrecio();
    let cantidad = validarCantidad();
    if(nombre != null && precio != null && cantidad != null)
    {
        var lista = document.getElementById("lista_articulos");
        if(lista_articulos.style.display = "none")
        {
            lista_articulos.style.display = "block";
        }
        var li = document.createElement("li");
        let nuevoArticulo = nombre + "                                                   " + precio + "€                                                          " + parseInt(cantidad);
       
        li.textContent = nuevoArticulo;
        lista.appendChild(li);
        totalPagar += (precio*(parseInt(cantidad)));
    }
    mostrarTotal();
}

function validarPago()
{
    let pago = document.getElementById("pago").value;
    let box = document.getElementById("pago");
    var resultado = null;
    var mensajeRetorno = document.getElementById("EX_Pago");
    if(pago < totalPagar)
    {
        mensajeRetorno.style.display = "flex";
        box.classList.add("inputEX");
        mensajeRetorno.innerHTML = "Debe introducir más de " + totalPagar + "€";
        resultado = null;
    }
    else
    {
        box.classList.remove("inputEX");
        mensajeRetorno.style.display = "none";
        resultado = pago;
    }

    return resultado;
}

function validarNombre(precio, cantidad)
{
    let nombre = document.getElementById("nombre").value.toString();
    let box = document.getElementById("nombre");
    var resultado = null;
    var mensajeRetorno = document.getElementById("EX_Nombre");
    if(nombre == "")
    {
        mensajeRetorno.style.display = "flex";
        box.classList.add("inputEX");
        mensajeRetorno.innerHTML = "Nombre del artículo no puede estar vacío";
        resultado = null;
    }
    else
    {
        box.classList.remove("inputEX");
        mensajeRetorno.style.display = "none";
        resultado = nombre;
    }

    return resultado;
}

function validarPrecio()
{
    let precio = document.getElementById("precio").value;
    let precioTexto = document.getElementById("precio").value.toString();
    let box = document.getElementById("precio");
    var mensajeRetorno = document.getElementById("EX_Precio");
    var resultado = null;
    if(precioTexto == "")
    {
        mensajeRetorno.style.display = "flex";
        box.classList.add("inputEX");
        mensajeRetorno.innerHTML = "Precio no puede estar vacío";
        resultado = null;
    }
    else if(precio < 0)
    {
        mensajeRetorno.style.display = "flex";
        box.classList.add("inputEX");
        mensajeRetorno.innerHTML = "Precio no puede ser negativo";
        resultado = null;
    }
    else
    {
        box.classList.remove("inputEX");
        mensajeRetorno.style.display = "none";
        resultado = precio;
    }
    return resultado;
}

function validarCantidad()
{
    let cantidad = document.getElementById("cantidad").value;
    let box = document.getElementById("cantidad");
    var mensajeRetorno = document.getElementById("EX_Cantidad");
    var resultado = null;
    if(cantidad < 1)
    {
        mensajeRetorno.style.display = "flex";
        box.classList.add("inputEX");
        mensajeRetorno.innerHTML = "La cantidad no puede ser menor que 1";
        resultado = null;
    }
    else
    {
        box.classList.remove("inputEX");
        mensajeRetorno.style.display = "none";
        resultado = cantidad;
    }
    return resultado;
}

function resetInputs()
{
    let mensaje1 = document.getElementById("EX_Nombre");
    let mensaje2 = document.getElementById("EX_Precio");
    let mensaje3 = document.getElementById("EX_Cantidad");
    let box1 = document.getElementById("nombre");
    let box2 = document.getElementById("precio");
    let box3 = document.getElementById("cantidad");

    mensaje1.style.display = "none";
    mensaje2.style.display = "none";
    mensaje3.style.display = "none";
    box1.classList.remove("inputEX");
    box2.classList.remove("inputEX");
    box3.classList.remove("inputEX");
}

function resetPago()
{
    let mensaje1 = document.getElementById("EX_Pago");
    let box1 = document.getElementById("pago");
    mensaje1.style.display = "none";
    box1.classList.remove("inputEX");
}
