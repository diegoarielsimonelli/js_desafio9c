


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


