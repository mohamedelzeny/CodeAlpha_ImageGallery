const images = [
  "assets/images/img1.avif",
  "assets/images/img2.avif",
  "assets/images/img3.avif",
  "assets/images/img4.avif",
  "assets/images/img5.avif",
  "assets/images/img6.avif",
  "assets/images/img7.avif",
  "assets/images/img8.avif",
  "assets/images/img9.avif",
  "assets/images/img10.avif",
    "assets/images/img1.avif",
  "assets/images/img2.avif",
  "assets/images/img3.avif",
  "assets/images/img4.avif",
  "assets/images/img5.avif",
  "assets/images/img6.avif",
  "assets/images/img7.avif",
  "assets/images/img8.avif",
  "assets/images/img9.avif",
  "assets/images/img10.avif",
    "assets/images/img1.avif",
  "assets/images/img2.avif",
  "assets/images/img3.avif",
  "assets/images/img4.avif",
  "assets/images/img5.avif",
  "assets/images/img6.avif",
  "assets/images/img7.avif",
  "assets/images/img8.avif",
  "assets/images/img9.avif",
  "assets/images/img10.avif",
    "assets/images/img1.avif",
  "assets/images/img2.avif",
  "assets/images/img3.avif",
  "assets/images/img4.avif",
  "assets/images/img5.avif",
  "assets/images/img6.avif",
  "assets/images/img7.avif",
  "assets/images/img8.avif",
  "assets/images/img9.avif",
  "assets/images/img10.avif",
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  gallery.appendChild(img);
  img.addEventListener("click", () => {
    lightboxImg.src = src;
    lightbox.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});
