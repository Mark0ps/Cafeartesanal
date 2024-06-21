const datosProductos = [
    {
      nombre: "Proyecto 1",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi, quas qui illum laboriosam consequatur aliquid earum voluptates reiciendis quibusdam, quidem dolores temporibus ut esse porro. Eos aut minus error?",
      fechaInicio: "2021-01-01",
      fechaFin: "2021-01-31",
      imgUrl: "https://via.placeholder.com/150",
      done: false,
    },
    {
      nombre: "Proyecto 2",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi, quas qui illum laboriosam consequatur aliquid earum voluptates reiciendis quibusdam, quidem dolores temporibus ut esse porro. Eos aut minus error?",
      fechaInicio: "2021-02-01",
      fechaFin: "2021-02-28",
      imgUrl: "https://via.placeholder.com/150",
      done: true,
    },
    {
      nombre: "Proyecto 3",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi, quas qui illum laboriosam consequatur aliquid earum voluptates reiciendis quibusdam, quidem dolores temporibus ut esse porro. Eos aut minus error?",
      fechaInicio: "2021-03-01",
      fechaFin: "2021-03-31",
      imgUrl: "https://via.placeholder.com/150",
      done: false,
    },
  ];
  
  let myModal = null;
function page_load() {
    myModal = new ModalClass();
    populateProjects();
}

// funcion para carga sitios web al dom
function populateProjects() {
    const contendorSitiosWeb = document.getElementById("sitiosWebProjects");
  datosProyectos.forEach((proyectos) => {
    const card = document.createElement("div");
    card.classList.add("card");
    if (proyecto.done) {
      card.classList.add("done");
    }
    const img = document.createElement("img");
    img.src = productos.imgUrl;
    img.alt = "Imagen del Proyecto";
    const h4 = document.createElement("h4");
    h4.textContent = productos.nombre;
    h4.addEventListener("click", () => {
        const htmlDetail = `<p>${proyecto.descripcion}</p><p>${proyecto.descripcion}</p><img src="${proyecto.imgUrl}" />`;
        myModal.showModal(proyecto.nombre, htmlDetail);
    });
    const p = document.createElement("p");
    p.textContent = `${proyecto.descripcion} | ${proyecto.fechaInicio} - ${proyecto.fechaFin}`;

    card.appendChild(img);
    card.appendChild(h4);
    card.appendChild(p);

    contendorSitiosWeb.appendChild(card);
  });
}
