// const sobreTexto = document.querySelector(".sobre-texto");

// const observerDiv = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       entry.target.classList.toggle("expand-div", entry.isIntersecting);
//       if (entry.isIntersecting) observerDiv.unobserve(entry.target);
//     });
//   },

//   {
//     threshold: 0.25,
//   }
// );

// observerDiv.observe(sobreTexto);

const cardServicos = document.querySelectorAll(".maq-div");
const observerCardServico = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("expand-div", entry.isIntersecting);
      if (entry.isIntersecting) observerCardServico.unobserve(entry.target);
    });
  },
  {
    threshold: 0.25,
  }
);

cardServicos.forEach((cardServico) => {
  observerCardServico.observe(cardServico);
});

const cardServicos2 = document.querySelectorAll(".maq-div2");
const observerCardServico2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("expand-div", entry.isIntersecting);
      if (entry.isIntersecting) observerCardServico2.unobserve(entry.target);
    });
  },
  {
    threshold: 0.25,
  }
);

cardServicos2.forEach((cardServico2) => {
  observerCardServico2.observe(cardServico2);
});

const header = document.querySelector(".header-bg");
function verificarScroll() {
  if (window.pageYOffset >= 300) {
    header.classList.add("visible-background");
  } else if (window.pageYOffset < 300) {
    header.classList.remove("visible-background");
  }
}

window.addEventListener("scroll", verificarScroll);

const openBtn = document.querySelectorAll(".open-modal");
const closeBtn = document.querySelector("#close-modal");
const modal = document.querySelector(".modal");
const fade = document.querySelector("#modal-fade");

openBtn.forEach((el) => {
  el.addEventListener("click", () => modal.showModal());
});

closeBtn.addEventListener("click", () => modal.close());
