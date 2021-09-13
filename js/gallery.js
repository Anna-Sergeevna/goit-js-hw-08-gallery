import galleryItems from './app.js';

const list = document.querySelector('.js-gallery');
// console.log(list);
const modal = document.querySelector('.js-lightbox');
// console.log(modal);
const imgModal = document.querySelector('.lightbox__image');
// console.log(imgModal);
const modalClose = document.querySelector('.lightbox__button');
// console.log(modalClose);


const imagesList = galleryItems.map(({ preview, original, description } = el) => {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"

    />
  </a>
</li>`
}).join('');

console.log(imagesList);

list.innerHTML = imagesList;

/ Открытие модалки/

list.addEventListener('click', onModalOpen);

function onModalOpen(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  } else {
    modal.classList.add('is-open');
    imgModal.src = e.target.dataset.source;
  }
}

/ Закрытие модалки /

modalClose.addEventListener('click', onModalClose);

function onModalClose(e) {
  imgModal.src = '';
  modal.classList.remove('is-open');
}