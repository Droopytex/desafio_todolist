const listaDeTareas = document.querySelector("#tareas");
const tareaInput = document.querySelector("#nuevaTarea");
const btnAgregar = document.querySelector("#agregarTarea");
/*  contador de tareas: fijarse como se declara*/
const counterT = document.querySelector("#cuenta-tareas");
/*  contador de tareas realizadas: fijarse como se declara*/
const tareaOk = document.querySelector("#realizadas-text");

/*  buscador de tareas: fijarse como se declara*/
const btnBuscar = document.querySelector("#buscarTarea");

const tareas = [
  { id: 1, nombre: "Ir a la feria", completada: false },
  { id: 2, nombre: "Estudiar para el desafío", completada: false },
  { id: 3, nombre: "cocinar", completada: true },
];

// Agregar una tarea
btnAgregar.addEventListener("click", () => {
  const nuevaTarea = {
    id: Date.now(),
    nombre: tareaInput.value,
    completada: false,
  };
  tareas.push(nuevaTarea);
  tareaInput.value = "";
  renderTareas();
});

// Función actualizción de tarea
function renderTareas() {
  let html = "";
  for (let tarea of tareas) {
    const estilo = tarea.completada ? "text-decoration: line-through;" : "";
    html += `<li style="${estilo}">${tarea.nombre} <button onclick="borrar(${tarea.id})">x</button></li>
    <button onclick="tareaCompletada(${tarea.id})">Lista!!</button></li>`;
  }
  listaDeTareas.innerHTML = html;
  counterT.textContent = `Total de tareas: ${tareas.length}`;
  actualizarContadoresTareas();
}

// Función para eliminar una tarea
function borrar(id) {
  const index = tareas.findIndex((ele) => ele.id === id);
  tareas.splice(index, 1);
  renderTareas();
}

// Función para marcar una tarea como completada
function tareaCompletada(id) {
  const tarea = tareas.find((tarea) => tarea.id === id);
  if (tarea) {
    tarea.completada = !tarea.completada;
    renderTareas();
  }
}

// Función para actualizar los contadores de tareas
function actualizarContadoresTareas() {
  const totalTareas = tareas.length;
  const tareasCompletadas = tareas.filter((tarea) => tarea.completada).length;
  document.getElementById("totalTareas").textContent = totalTareas;
  document.getElementById("tareasCompletadas").textContent = tareasCompletadas;
}

renderTareas();
