import { galleryItems } from './gallery-items.js';
// Change code below this line
('user strict');

const galleryEl = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    galleryItem => `<div class="gallery__item">
  <a class="gallery__item" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`
  )
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', markup);
console.log(galleryItems);
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
