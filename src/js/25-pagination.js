import BSN from 'bootstrap.native';
import NewsApiService from './25-Fetch-Api-class';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  imagesContainer: document.querySelector('.js-images-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(event) {
  event.preventDefault();
  newsApiService.query = event.currentTarget.query.value;

  clearImgContainer();
  
  newsApiService.resetPage();

  newsApiService.fetchImg().then(appendImgMarkup);
}
function onLoadMore() {
  newsApiService.fetchImg().then(appendImgMarkup);
}

function renderImgMarkup(arr) {
  return arr
    .map(
      ({
        largeImageURL: img,
        tags,
        type,
        user,
        likes,
      }) => `<li class="images__item">
      <img class="images__picture" src="${img}" alt="${tags}" width="240" height="140"/>
      <p class="images__tags">Tags:${tags}</h2>
      <p class="images__author">Posted by: ${user}</p>
      <p class="images__type">Picture type:${type}</p>
      <p class="images__likes">Picture likes: ${likes}</p>
  </li>
  `
    )
    .join('');
}

function appendImgMarkup(images) {
  refs.imagesContainer.insertAdjacentHTML('beforeend', renderImgMarkup(images));
}

function clearImgContainer() {
  refs.imagesContainer.innerHTML = '';
}
