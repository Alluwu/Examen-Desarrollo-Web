

const btnBienvenida = document.getElementById("btnBienvenida");

//Alert
if (btnBienvenida) {
  btnBienvenida.addEventListener("click", function () {
    alert("¡Bienvenido/a a mi perfil!");
  });
}
//Cambio de color a la tabla
document.addEventListener("DOMContentLoaded", () => {
  const caja = document.getElementById("caja");
  const btnCambiarColor = document.getElementById("btnCambiarColor");

  if (caja && btnCambiarColor) {
    btnCambiarColor.addEventListener("click", () => {
      const colores = ["#ff9999", "#99ccff", "#99ff99", "#ffff99", "#ffccff"];
      const random = colores[Math.floor(Math.random() * colores.length)];
      caja.style.backgroundColor = random;
    });
  }
});

//Nuevo Elemento en Lista
document.addEventListener("DOMContentLoaded", () => 
{
    const nuevo = document.getElementById("nuevo");
    const btnAgregar = document.getElementById("btnAgregarItem")
    const lista = document.getElementById("listaD")
    if(nuevo && btnAgregar && lista)
    {
        btnAgregar.addEventListener("click", () => {
            const texto = nuevo.value.trim()
            if(texto === "")
            {
                alert("Escribe algo antes de agregar.")
                return
            }
            const nuevoElemento = document.createElement("li")
            nuevoElemento.textContent = texto;

            lista.appendChild(nuevoElemento);

            nuevo.value = ""
            nuevo.focus()
        });
    }
})