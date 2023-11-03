import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import 'simplelightbox/dist/simple-lightbox.min.css';
const list=document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createMarcup(galleryItems))

function createMarcup(arr){
    return arr.map(({preview, original, description})=>
   `<li style="list-style-type: none;" class="gallery__item">
   <a class="gallery__link" href=${original}>
     <img
       class="gallery__image"
       src=${preview}
       data-source=${original}
       alt=${description}
       title="${description}"
     />
   </a>
 </li>` 
    ).join("")
}

var lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250  });