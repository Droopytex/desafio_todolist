const listaDeTareas = document.querySelector("#tareas");
const tareaInput = document.querySelector("#nuevaTarea");
const btnAgregar = document.querySelector("#agregarTarea");
const counterT = document.querySelector("#cuenta-tareas");
const tareaOk = document.querySelector("#realizadas-text");
var idIncial = 3;

const tareas = [
  { id: 1, nombre: "Ir a la feria", completada: false },
  { id: 2, nombre: "Estudiar para el desafío", completada: false },
  { id: 3, nombre: "Cocinar algo", completada: true },
];
// agregar nuevas tareas
btnAgregar.addEventListener("click", () => {
  const nuevaTarea = {
    id: IdsConsecutivos(),
    nombre: tareaInput.value,
    completada: false,
  };
  tareas.push(nuevaTarea);
  tareaInput.value = "";
  renderTareas();
});

// crear id de tareas cosnsecutivos
function IdsConsecutivos() {
  idIncial += 1;
  return idIncial;
}
// borrar según id de tarea
function borrar(id) {
  const index = tareas.findIndex((ele) => ele.id === id);
  tareas.splice(index, 1);
  renderTareas();
}
// Tabla + Checklist
function renderTareas() {
  let html = "";
  for (let tarea of tareas) {
    html += "<tr>";
    html += `<td>${tarea.id}</td>`;
    html += `<td>${tarea.nombre}</td>`;
    html += `<td><input type="checkbox" onclick="tareaCompletada(${tarea.id})" 
    ${tarea.completada ? "checked" : ""}></td>`;
    html += `<td><button onclick="borrar(${tarea.id})">x</button></td>`;
    html += `</tr>`;
  }

  listaDeTareas.innerHTML = html;
  actualizarContadoresTareas();
}
console.log(renderTareas);

function tareaCompletada(id) {
  const tarea = tareas.find((t) => t.id === id);
  if (tarea) {
    tarea.completada = !tarea.completada;
    renderTareas();
  }
}

function actualizarContadoresTareas() {
  const totalTareas = tareas.length;
  const tareasCompletadas = tareas.filter((tarea) => tarea.completada).length;
  document.getElementById("totalTareas").textContent = totalTareas;
  document.getElementById("tareasCompletadas").textContent = tareasCompletadas;
}

renderTareas();
