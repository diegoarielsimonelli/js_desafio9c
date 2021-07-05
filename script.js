


let titulo = document.createElement("H1");
let contenido1 = document.createTextNode("¡La revolución comienza en el plato!");
titulo.appendChild(contenido1);
document.body.appendChild(titulo);


let parrafo = document.createElement("p");
let contenido = document.createTextNode("20% OFF CON TU PRIMERA COMPRA");
parrafo.appendChild(contenido);
document.body.appendChild(parrafo);



const productos = [{ id: 1, nombre: "Ensalada Fattoush", precio: 1000 },
{ id: 2, nombre: "Escalativa Catalana Vegana", precio: 990 },
{ id: 3, nombre: "Vegetales Asados", precio: 1100 },
{ id: 4, nombre: "Sushi Vegano", precio: 1200 },
{ id: 5, nombre: "Hamburgueza de Lentejas", precio: 900 }
];


for (const producto of productos){
    let contenedor= document.createElement("div");
    contenedor.innerHTML=`<h3> nombre: ${producto.nombre}</h3> 
    <h2> precio: ${producto.precio}</h2>`;
    document.body.appendChild(contenedor);

}



const productoss = [{ id: 1, nombre: "Ensalada Fattoush", precio: 1000 },
{ id: 2, nombre: "Escalativa Catalana Vegana", precio: 990 },
{ id: 3, nombre: "Vegetales Asados", precio: 1100 },
{ id: 4, nombre: "Sushi Vegano", precio: 1200 },
{ id: 5, nombre: "Hamburgueza de Lentejas", precio: 900 }
];
let mi_tabla = document.createElement("table");
mi_tabla.setAttribute("class", "table table-striped");
let mi_tabla_body = document.createElement("tbody");
for (const producto of productoss) {
    let mi_fila = document.createElement("tr");
    let mi_celda = document.createElement("td");
    mi_celda.innerText = producto.id;
    mi_fila.appendChild(mi_celda);
    let mi_celda2 = document.createElement("td");
    mi_celda2.innerText = producto.nombre;
    mi_fila.appendChild(mi_celda2);
    let mi_celda3 = document.createElement("td");
    mi_celda3.innerText = producto.precio;
    mi_fila.appendChild(mi_celda3);
    mi_tabla_body.appendChild(mi_fila);
}
mi_tabla.appendChild(mi_tabla_body);
document.getElementById("tabla").appendChild(mi_tabla);