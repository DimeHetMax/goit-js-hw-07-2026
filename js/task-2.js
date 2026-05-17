const ul = document.querySelector(".gallery");
const body = document.querySelector("body");
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

images.forEach((image) => {
  const li = document.createElement("li");
  li.classList.add("gallery-item");
  const img = document.createElement("img");
  img.src = `${image.url}`;
  img.alt = `${image.alt}`;
  li.append(img);
  ul.append(li);
});

const imgLogic = () => {
  const html = ` <div class="modal-backdrop">
      <div class="modal">
       <div class="close-modal-button">X</div>
        <img class="modal-img" src="#" alt="#">
      </div>
    </div>`;
  body.insertAdjacentHTML("beforeend", html);
  const img = document.querySelector(".modal-img");
  const modalBackDrop = document.querySelector(".modal-backdrop");
  const closeModal = document.querySelector(".close-modal-button");
  const handleImgClick = (e) => {
    const element = e.target;
    img.src = element.src;
    img.alt = element.alt;
    modalBackDrop.classList.add("is-open");
  };
  const handleCloseModal = () => {
    modalBackDrop.classList.remove("is-open");
  };
  const handleCloseModalButton = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    modalBackDrop.classList.remove("is-open");
  };

  ul.addEventListener("click", handleImgClick);
  closeModal.addEventListener("click", handleCloseModal);
  document.addEventListener("keydown", handleCloseModalButton);
};
imgLogic();
