let Enviar = document.getElementById("Enviar");
let Nombre = document.getElementById("Nombre");
let Correo = document.getElementById("Correo");
let Pelicula = document.getElementById("Pelicula");
let image = document.getElementById("Imagen");
let Boletos = document.getElementById("Boletos");
let Editar = document.getElementById("Guardar");
let Ready = false;
let FilaEditar
Enviar.addEventListener("click", () => {
    Ready?pushOnTable():alert("Lo sentimos, pero no has llenado todos los campos");
})
function pushOnTable(){
    //alert("Listo");
    Ready = false;
    const myList = document.querySelector("tbody");
    console.log(myList);
    const Fila = document.createElement("tr");
    Fila.classList.add("text-white");
    let ENombre = document.createElement("td");
    ENombre.innerHTML = `<td> ${Nombre.value} </td>`;
    ENombre.value = `${Nombre.value}`;
    let ECorreo = document.createElement("td");
    ECorreo.innerHTML = `<td> ${Correo.value} </td>`;
    ECorreo.value = `${Correo.value}`;
    let EPelicula = document.createElement("td");
    EPelicula.innerHTML = `<td> ${Pelicula.value} </td>`;
    EPelicula.value = `${Pelicula.value}`;
    let Eimage = document.createElement("td");
    Eimage.innerHTML = `<td> <img src="${image.src}" alt="NotFound"class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="Imagen">  </td>`;
    Eimage.value = `${image.src}`;
    let EBoletos = document.createElement("td");
    EBoletos.innerHTML = `<td> ${Boletos.value} </td>`;
    EBoletos.value = `${Boletos.value}`;
    let ETotal = document.createElement("td");
    ETotal.innerHTML = `<td> ${CalculeTotal(EBoletos.value)} </td>`;
    ETotal.value = `${CalculeTotal(EBoletos.value)}`;
    let EBotones = document.createElement("td");
    let BotonEliminarx1 = document.createElement("button");
    let BotonEditarx1 = document.createElement("button");
    BotonEliminarx1.innerText = "Eliminar";
    BotonEliminarx1.classList.add("btn", "btn-danger");
    BotonEditarx1.innerText = "Editar";
    BotonEditarx1.classList.add("btn", "btn-primary");
    BotonEliminarx1.addEventListener("click", e =>{
        e.target.parentElement.parentElement.remove();
    })
    BotonEditarx1.addEventListener("click", e =>{
        FilaEditar = e.target.parentElement.parentElement;
        Nombre.value = FilaEditar.children[0].innerText;
        Correo.value = FilaEditar.children[1].innerText;
        Pelicula.value = FilaEditar.children[2].innerText;
        if (Pelicula.value != ""){
            image.src = `Resources/${Pelicula.value}.jpg`;
        }
        Boletos.value = FilaEditar.children[4].innerText;
        Enviar.style.display = "none";
        Editar.style.display = "Block";
    })
    EBotones.appendChild(BotonEliminarx1);
    EBotones.appendChild(BotonEditarx1);
    Fila.append(ENombre, ECorreo, EPelicula, Eimage, EBoletos, ETotal, EBotones);
    myList.appendChild(Fila);
    Nombre.value = "";
    Correo.value = "";
    Pelicula.value = "";
    image.src = `Resources/Default.jpg`;
    Boletos.value = "";
    Ready = false;
}


Editar.addEventListener("click", e => {
    FilaEditar.children[0].innerText = Nombre.value;
    FilaEditar.children[1].innerText = Correo.value;
    FilaEditar.children[2].innerText = Pelicula.value;
    FilaEditar.children[3].children[0].setAttribute("src", image.src);
    FilaEditar.children[4].innerText = Boletos.value;
    FilaEditar.children[5].innerText = CalculeTotal(Boletos.value);
    Editar.style.display = "none";
    Enviar.style.display = "Block";
    Nombre.value = "";
    Correo.value = "";
    Pelicula.value = "";
    image.src = `Resources/Default.jpg`;
    Boletos.value = "";
    Ready = false;
})


Pelicula.addEventListener("change", () => {
    if (Pelicula.value != ""){
        image.src = `Resources/${Pelicula.value}.jpg`;
    }
    Ready = CheckEverythingIsFull();
})
Nombre.addEventListener("change", () => {
    Ready = CheckEverythingIsFull();
})
Correo.addEventListener("change", () => {
    Ready = CheckEverythingIsFull();
})
Boletos.addEventListener("change", () => {
    Ready = CheckEverythingIsFull();
})
image.addEventListener("change", () => {
    Ready = CheckEverythingIsFull();
})

self.addEventListener("DOMContentLoaded", () =>{
    Pelicula.value = "";
})
function CalculeTotal(a){
    return a*50;
}
function CheckEverythingIsFull(){
    if(Nombre.value != "" && Correo.value != "" && Pelicula.value != "" && image.src != "" && Boletos.value != ""){
        return true;
    }
    else{
        return false;
    }
}
const BotonesEditar = document.getElementsByClassName('CustomEditar');
function mostrarClick(e){
    console.log(e.target.innerHTML);
}
for (const BotonEditar of BotonesEditar){
 BotonEditar.addEventListener('click',mostrarClick);
}
const BotonesEliminar = document.getElementsByClassName('CustomEliminar');
function NoClick(e){
    console.log(e.target.innerHTML);
}
for (const BotonEliminar of BotonesEliminar){
 BotonEliminar.addEventListener('click',NoClick);
}
