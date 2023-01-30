// // https://dog.ceo/api/breeds/image/random/3

// const refs = {
//   gallery: document.querySelector('.gallery'),
// };

// console.log(refs.gallery);

// fetch('https://dog.ceo/api/breeds/image/random/50')
//   .then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     return resp.json();
//   })
//   .then(data => {
//     const dogs = renderImg(data.message);
//     console.log(dogs);
//     addMurkup(dogs);
//   });

// function renderImg(array) {
//   array
//     .map((img, index) => {
//       return `<li class="gallery__item">
//             <img src="${img}" alt="image ${index + 1}">
//         </li>`;
//     })
//     .join('');
// }

// function addMurkup(li) {
//   refs.gallery.insertAdjacentHTML(li);
// }

// 2

// http://universities.hipolabs.com/search?country=Ukraine

// const refs = {
//   form: document.querySelector('.form'),
//   list: document.querySelector('.render-list'),
// };

// refs.form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(evt) {
//   evt.preventDefault();

//   const inpValue = evt.currentTarget.input.value;

//   console.log(inpValue);
//   fetch(`http://universities.hipolabs.com/search?country=${inpValue}`)
//     .then(resp => resp.json())
//     .then(result => renderMarkup(result));
// }

// function renderMarkup(array) {
//   const list = array
//     .map(
//       ({ name, web_pages: [link] }) =>
//         `<li><a href="${link}" target="_blank">${name}</a></li>`
//     )
//     .join('');
//   refs.list.innerHTML = list;
// }

// function clearMarcup() {}

// 3
// const refs = {
//   list: document.querySelector('.render-list'),
// };

// const options = {
//   method: 'POST',
//   body: JSON.stringify({ model: 'default' }),
// };

// fetch('http://colormind.io/api/', options)
//   .then(resp => resp.json())
//   .then(data => renderMarkup(data.result));

// function renderMarkup(array) {
//   const colors = array
//     .map(
//       ([r, g, b]) =>
//         `<li  style=" width:50px; height:50px; list-style:none; background-color:rgb(${r},${g},${b}) "></li>`
//     )
//     .join('');

//   refs.list.innerHTML = colors;
// }

// 4

// const refs = {
//   list: document.querySelector('.card-list'),
// };

// function getDeckId() {
//   return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6');
// }

// function getCards(id) {
//   return fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=10`);
// }

// async function sendRequest() {
//   try {
//     const response = await getDeckId();
//     const resultDeckId = await response.json();

//     const responseCard = await getCards(resultDeckId.deck_id);

//     const resultGetCards = await responseCard.json();
//     renderCards(resultGetCards.cards);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function renderCards(arr) {
//   const markup = arr
//     .map(({ code, images: { png } }) => {
//       return `<li><img src="${png}" alt="${code}" width="100" height="150"></li>`;
//     })
//     .join('');

//   refs.list.innerHTML = markup;
// }

// sendRequest();
