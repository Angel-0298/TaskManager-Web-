const formulario = document.getElementById("formulario");
const entrada = document.getElementById("tarea");
const lista = document.getElementById("lista");

function agregarTarea(texto) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = texto;
  li.appendChild(span);

  span.addEventListener("click", () => li.classList.toggle("completada"));

  const btn = document.createElement("button");
  btn.textContent = "Eliminar";
  btn.className = "eliminar";
  btn.addEventListener("click", () => li.remove());
  li.appendChild(btn);

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