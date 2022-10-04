import { galleryItems } from './gallery-items.js';
// Change code below this line
('user strict');

const galleryEl = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    galleryItem => `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`
  )
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', markup);
let instance = 0;

function handlerClick(event) {
  event.preventDefault();
  const selectedImg = event.target.dataset.source;
  instance = basicLightbox.create(`<img width="1400" height="900" src="${selectedImg}">`);
  instance.show(() => {
    document.addEventListener('keydown', handlerKeydown);
  });
}
galleryEl.addEventListener('click', handlerClick);

function handlerKeydown(event) {
  console.log(event.code);
  if (event.code === 'Escape') {
    instance.close(() => {
      document.removeEventListener('keydown', handlerKeydown);
    });
  }
}
