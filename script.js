console.dir(document.body);
const productos = [{ id: 1, nombre: "Ensalada Fattoush", precio: 1000 },
{ id: 2, nombre: "Escalativa Catalana Vegana", precio: 990 },
{ id: 3, nombre: "Vegetales Asados", precio: 1100 },
{ id: 4, nombre: "Sushi Vegano", precio: 1200 },
{ id: 5, nombre: "Hamburgueza de Lentejas", precio: 900 }
];
let mi_tarjeta = document.createElement("card-group");
mi_tarjeta.setAttribute("class", "card-group");
let mi_tarjeta_body = document.createElement("card-body");
for (const producto of productos) {
let tarjeta_titulo = document.createElement("card-title");
let tarjeta_footer = document.createElement("card-footer");
tarjeta_footer.innerText=producto.id;
tarjeta_titulo.appendChild(tarjeta_footer);
let tarjeta_footer2= document.createElement("card-footer");
tarjeta_footer2.innerText=producto.nombre;
tarjeta_titulo.appendChild(tarjeta_footer2);
let tarjeta_footer3=document.createElement("card_footer")
tarjeta_footer3.innerText=producto.precio;
tarjeta_titulo.appendChild(tarjeta_footer3);
mi_tarjeta.appendChild(tarjeta_titulo);
}
mi_tarjeta.appendChild(mi_tarjeta_body);
document.getElementsById("tarjeta").appendChild(mi_tarjeta);

