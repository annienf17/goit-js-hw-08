import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

    // add images to li elements
const galleryImages = galleryItems.map((img) => 
`<li>
<a class="gallery__item" href="${img.original}">
<img
      class="gallery__image"
      src="${img.preview}"
      alt="${img.description}"
    /></a>
    </li>`).join("");

    // add array of imgs to gallery
gallery.insertAdjacentHTML("afterbegin", galleryImages);

// SimpleLightbox.com
let simplelightbox = new SimpleLightbox('.gallery a', {
    /* options */
    captionsData: 'alt',
    captionPosition: 'bottom',
    showCounter: true,
    captionDelay: 250,
  });