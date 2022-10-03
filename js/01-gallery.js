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
let selectedImg = 0;

function handlerClick(event) {
  event.preventDefault();
  return (selectedImg = event.target.dataset.source);
}
galleryEl.addEventListener('click', handlerClick);

galleryEl.onclick = () => {
  basicLightbox.create(`<img width="1400" height="900" src="${selectedImg}">`).show();
};
