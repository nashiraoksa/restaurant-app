import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <div class="content">
          <h2 class="content__heading judul_page" tabindex="0">Your Favorite Restaurant</h2>
          <div id="resto-fav" class="restaurantList">
     
          </div>
        </div>
      `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restoContainer = document.querySelector('#resto-fav');

    if (!restos.length) {
      restoContainer.innerHTML += `<div class="resto-item__not__found">Tidak ada restaurant untuk ditampilkan</div>`;
    } else {
      restos.forEach((resto) => {
        restoContainer.innerHTML += createRestoItemTemplate(resto);
      });
    }
  },
};

export default Like;
