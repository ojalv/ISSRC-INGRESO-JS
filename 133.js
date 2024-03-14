/*133. Crea una cadena JSON que represente una lista de tareas pendientes. Luego, utiliza
JavaScript para convertir la cadena JSON en un objeto y muestra la lista de tareas en la
consola. */

const cadenaJSON = `
[
  {
    "tarea": "Completar el informe",
    "prioridad": "Alta",
    "fecha_limite": "2024-03-15"
  },
  {
    "tarea": "Hacer la compra",
    "prioridad": "Media",
    "fecha_limite": "2024-03-17"
  },
  {
    "tarea": "Llamar al cliente",
    "prioridad": "Baja",
    "fecha_limite": "2024-03-20"
  }
]
`;

const listaTareas = JSON.parse(cadenaJSON);

// console.log(cadenaJSON);

console.log(listaTareas);
