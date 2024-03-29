const listaDeTareas = document.querySelector("#tareas");
const tareaInput = document.querySelector("#nuevaTarea");
const btnAgregar = document.querySelector("#agregarTarea");
/*  contador de tareas: fijarse como se declara*/
const counterT = document.querySelector("#cuenta-tareas");
/*  buscador de tareas: fijarse como se declara*/
const btnBuscar = document.querySelector("#buscarTarea");

const tareas = [
  { id: "001", nombre: "Barrer" },
  { id: "002", nombre: "Comprar en la feria" },
  { id: "003", nombre: "Cocinar" },
];
btnAgregar.addEventListener("click", () => {
  const nuevaTarea = {
    id: Date.now(),
    nombre: tareaInput.value,
  };
  tareas.push(nuevaTarea);
  tareaInput.value = "";
  renderTareas();
});

function borrar(id) {
  const index = tareas.findIndex((ele) => ele.id === id);
  tareas.splice(index, 1);
  renderTareas();
}

function renderTareas() {
  let html = "";
  for (let tarea of tareas) {
    html += `<li>${tarea.nombre} <button onclick="borrar(${tarea.id})">x</button></li>`;
  }
  listaDeTareas.innerHTML = html;
  counterT.textContent = `Total de tareas: ${tareas.length}`;
}

btnBuscar.addEventListener("click", () => {
  const tareaBuscada = buscadorInput.value;
  const tareasFiltradas = tareas.filter((tarea) =>
    tarea.tarea.includes(tareaBuscada)
  );
  renderList(tareasFiltradas);
});

/*  contador de tareas: fijarse como se decla*/
