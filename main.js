document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.github.com/users/luizsant")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".profile-avatar").src = data.avatar_url;
      document.querySelector(".profile-name").textContent = data.name;
      document.querySelector(".profile-username").textContent =
        "@" + data.login;
      document.querySelector(".profile-link").href = data.html_url;

      let numbersItems = document.querySelectorAll(".numbers-item");

      numbersItems[0].querySelector("p").textContent = data.public_repos;
      numbersItems[1].querySelector("p").textContent = data.followers;
      numbersItems[2].querySelector("p").textContent = data.following;
    })
    .catch((error) => console.error("Error:", error));
});

const projects = [
  "https://ebac-tech-talks-lime.vercel.app/",
  "https://todo-react-js-lsant.vercel.app/",
  "https://react-imc-lsant.vercel.app/",
  "https://todo-vue-five-phi.vercel.app/",
  "https://projeto-assassins-creed.vercel.app/",
  "https://luizclone-disneyplus.vercel.app/",
  "https://linktree-nine-gold.vercel.app/",
  "https://lawesc.vercel.app/",
  "https://restobootstp.vercel.app/",
  "https://bootstrp.vercel.app/",
  "https://responsive-gamma.vercel.app/",
  "https://pizza-store-one.vercel.app/",
  "https://site-veiculos-jquery.vercel.app/",
  "https://lista-supermercado-two.vercel.app/",
  "https://luizrpg-mini-project.vercel.app/",
  "https://luizgaleria-de-fotos.vercel.app/",
  "https://luizagenda-telefone.vercel.app/",
  "https://luizcalculadora-de-medias.vercel.app/",
  "https://site-games-shop-tan.vercel.app/",
];

function createProjectGallery() {
  const gallery = document.querySelector(".project-gallery");

  projects.forEach((projectUrl) => {
    const projectContainer = document.createElement("div");
    projectContainer.className = "project-container";

    const link = document.createElement("a");
    link.href = projectUrl;
    link.target = "_blank";

    const image = document.createElement("img");
    image.src = `http://mini.s-shot.ru/1024x768/JPEG/1024/Z100/?${projectUrl}`;
    image.alt = "Projeto";
    image.className = "project-window";

    link.appendChild(image);
    projectContainer.appendChild(link);
    gallery.appendChild(projectContainer);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  createProjectGallery();
});
