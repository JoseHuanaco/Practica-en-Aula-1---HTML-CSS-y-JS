let usuarios = []

function sendForm(event) {
  event.preventDefault();
  console.log(event);
  const name = event.target.name.value;
  // recupere los datos faltantes
  const lastName = event.target.lastName.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  const password2 = event.target.password2.value;

  const app = document.getElementById("app");
  if (password !== password2) {
    const error = document.createElement("p");
    error.textContent = "Las contraseñas no coinciden";
    app.appendChild(error);
    return;
  }

  // Añadiendo datos al vector
  const usuario = {
    nombre: name,
    apellido: lastName,
    email: email,
    password: password, 
  };
  usuarios.push(usuario);
  
  document.getElementById("name").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("password2").value = "";
  mostrarUsuarios();


  const user = [
    {
      label: "Nombre",
      value: name,
    },
    // complete el objeto
    {
      label: "Apellido",
      value: lastName,
    },
    {
      label: "Email",
      value: email,
    },
    {
      label: "Contraseña",
      value: password,
    },
    {
      label: "Repetir contraseña",
      value: password2,
    },
  ];

  const title = document.createElement("h1");
  title.innerHTML = `<h1 class="text-2xl title">
    Datos del usuario
  </h1>`;
  app.appendChild(title);
  app.style.height = "auto";

  user.forEach((item) => {
    const container = document.createElement("div"); // dentro de las comillas complete la etiqueta a crear
    container.innerHTML = `
            <div
                class="container__item"  
            > 
                <span
                    class="item__label"
                >${item.label}</span>
                <span
                    class="item__value"
                >${item.value}</span>
            </div>`;
    app.appendChild(container);
  });
}

// Mostrar usuarios agregados
function mostrarUsuarios() {
  var listaUsuarios = document.getElementById("listaUsuarios");
  listaUsuarios.innerHTML = "";
  usuarios.forEach(function(usuario) {
    var li = document.createElement("li");
    li.textContent = "Nombre: " + usuario.nombre + ", Apellido: " + usuario.apellido + ", Email: " + usuario.email + ", Contraseña: " + usuario.password;
    listaUsuarios.appendChild(li);
  });
};