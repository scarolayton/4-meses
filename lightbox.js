const lightbox = document.querySelector(".agregar-imagen");
const close = document.querySelector(".close");
const img = document.querySelectorAll(".img-gallery");

const contenedorLight = document.querySelector(".imagen-light");

const aparecerImagen = (imagen) => {
  lightbox.src = imagen;
};

contenedorLight.addEventListener("click", (e) => {
  if (e.target != lightbox) {
    contenedorLight.classList.remove("showImage");
  }
});
img.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    aparecerImagen(imagen.getAttribute("src"));
    contenedorLight.classList.add("showImage");
    lightbox.classList.add("showImage");
  });
});
