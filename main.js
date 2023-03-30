const inputTitulo = document.querySelector(".inputTitulo");
const inputTarea = document.querySelector(".inputTarea");
const addBtn = document.querySelector(".btn-add");
const listTareas = document.querySelector("#lista-tareas");
const listHist = document.querySelector("#lista-hist");
const emptyTareas = document.querySelector(".empty-tareas");
const emptyHist = document.querySelector(".empty-hist");
const histBtn = document.querySelector(".btn-hist");
const cerrarBtn = document.getElementById("btn-cerrar");
const containerHist = document.querySelector(".container-historial");
const historial = [];


//Agregar tarea
addBtn.addEventListener("click", (e)=>{

  e.preventDefault();

  const titulo = inputTitulo.value;
  const text = inputTarea.value;

  if (text !== ""){

    const liTarea = document.createElement("li");
    const pTarea = document.createElement("p");
    const tTarea = document.createElement("p");


    tTarea.textContent = `TITULO: ${titulo}`;
    pTarea.textContent = `TAREA: ${text}`;

    liTarea.appendChild(tTarea);
    liTarea.appendChild(pTarea);
    listTareas.appendChild(liTarea);
    liTarea.appendChild(addDeleteBtn());

    historial.push({TITULO: titulo, TAREA: text});

    inputTitulo.value = "";
    inputTarea.value = "";
    emptyTareas.style.display = "none";
  }
  });

//Botón visualizar historial
histBtn.addEventListener("click", (e)=>{

  e.preventDefault();

  listHist.innerHTML = "";

  if(historial.length > 0) {
    historial.forEach(hist => {
      const liHist = document.createElement("li");
      const pTituloH = document.createElement("p");
      const pTareaH = document.createElement("p");
      pTituloH.textContent = `TITULO: ${hist.TITULO}`;
      pTareaH.textContent = `TAREA: ${hist.TAREA}`;
      liHist.appendChild(pTituloH);
      liHist.appendChild(pTareaH);
      listHist.appendChild(liHist);
    });
  
    emptyHist.style.display = "none";
  }
  
  containerHist.style.display = "block";
});


//Eliminar tarea
function addDeleteBtn () {

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e)=>{
  
    const item = e.target.parentElement;
    
    listTareas.removeChild(item);
    
    const items = document.querySelectorAll("li");
    
    if(items.length === 0) {
      emptyTareas.style.display = "block"
    }
  });
 
  return deleteBtn;

}

//Boton cerrar historial
cerrarBtn.addEventListener("click", () => {
  containerHist.style.display = "none";
});