// Referencias a elementos HTML
const nombreInput = document.getElementById("nombreInput");
const adicionarBtn = document.getElementById("adicionarBtn");
const reiniciarListaBtn = document.getElementById("reiniciarListaBtn");
const seleccionarBtn = document.getElementById("seleccionarBtn");
const listaPersonas = document.getElementById("listaPersonas");
const resultado = document.querySelector("#resultado span");

// Lista donde se almacenan los nombres
const personas = [];

// Función para adicionar un nombre
adicionarBtn.addEventListener("click", () => {
  const nombre = nombreInput.value.trim();

  if (nombre) {
    personas.push(nombre); // Agregar el nombre a la lista
    actualizarLista(); // Actualizar la lista en la página
    nombreInput.value = ""; // Limpiar el input
  } else {
    alert("Por favor, ingresa un nombre válido.");
  }
});

// Función para eliminar un nombre específico
function eliminarNombre(indice) {
  personas.splice(indice, 1); // Eliminar el nombre de la lista
  actualizarLista(); // Actualizar la lista visible
}

// Función para reiniciar la lista completa
reiniciarListaBtn.addEventListener("click", () => {
  if (confirm("¿Estás seguro de que deseas reiniciar la lista?")) {
    personas.length = 0; // Vaciar el array
    actualizarLista(); // Limpiar la lista visible
    resultado.textContent = ""; // Limpiar el resultado
  }
});

// Función para actualizar la lista en la página
function actualizarLista() {
  listaPersonas.innerHTML = ""; // Limpiar lista
  personas.forEach((persona, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${persona}`;

    // Crear un botón para eliminar
    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.addEventListener("click", () => eliminarNombre(index));

    li.appendChild(eliminarBtn); // Añadir el botón al elemento de la lista
    listaPersonas.appendChild(li); // Añadir el elemento a la lista
  });
}

// Función para seleccionar un nombre aleatoriamente
seleccionarBtn.addEventListener("click", () => {
  if (personas.length === 0) {
    alert("La lista está vacía. Agrega personas primero.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * personas.length);
  const personaSeleccionada = personas[indiceAleatorio];
  resultado.textContent = personaSeleccionada; // Mostrar el nombre seleccionado
});
