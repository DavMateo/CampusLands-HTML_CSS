const principal = document.getElementById("principal");
const imgSectionTarea = principal.querySelectorAll(".tareaHtml_imagen");
// console.log(imgSectionTarea);
const iconSectionTarea = principal.querySelectorAll("#iconoDesplegar");
// console.log(iconSectionTarea);
const contenidoSectionTarea = principal.querySelectorAll(".contenido");
// console.log(contenidoSectionTarea);

//Recorrer los Nodos de lista creados en las constantes.


function checkedEstadoDataset() {
    const valorEstadoDataset = contenidoSectionTarea.dataset.estado
    
    if (valorEstadoDataset === "1") {
        iconSectionTarea.classList.remove("iconoActivo--clicked");
    } else if (valorEstadoDataset === "0") {
        iconSectionTarea.classList.add("iconoActivo--clicked");
    }
}

function alternarClasesDefault() {
    imgSectionTarea.classList.toggle("tareaHtml_imagen--desplegar");
    iconSectionTarea.classList.toggle("iconoActivo");
    contenidoSectionTarea.classList.toggle("contenido--disabled");
}

function atributosPredeterminados() {
    alternarClasesDefault();
    contenidoSectionTarea.dataset.estado = "1";
    checkedEstadoDataset();
}

// Este addEventListener escuchará cuando se le haga click al ícono de la flecha hacia abajo.
iconSectionTarea.addEventListener("click", () => {
    alternarClasesDefault();
    
    if (contenidoSectionTarea.dataset.estado === "1") {
        contenidoSectionTarea.dataset.estado = "0";
    } else if (contenidoSectionTarea.dataset.estado === "0") {
        contenidoSectionTarea.dataset.estado = "1";
    }

    checkedEstadoDataset();
});

window.onload = atributosPredeterminados();


// tareaHtml_imagen--desplegar
// iconoDesactivado
// contenido--disabled