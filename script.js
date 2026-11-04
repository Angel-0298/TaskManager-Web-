const formulario = document.getElementById("formulario");
const entrada = document.getElementById("tarea");
const lista = document.getElementById("lista");

function agregarTarea(texto) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = texto;
  li.appendChild(span);
  lista.appendChild(li);
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const texto = entrada.value.trim();
  if (texto === "") return;
  agregarTarea(texto);
  entrada.value = "";
  entrada.focus();
});