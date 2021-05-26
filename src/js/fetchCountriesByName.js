// import { countryNotFound } from './notifications';
// import clearMarkup from './clearMarkup';

// export default function fetchCountriesByName(searchQuery) {
//   return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`).then(response => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       clearMarkup();
//       countryNotFound();
//     }
//   });
// }

const API_KEY = '21804857-e4d02e1e62ab2bb6123c0439f';
// const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cats&page=1&per_page=12&key=${API_KEY}`;

export default function fetchCountriesByName(searchQuery) {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${API_KEY}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      //   clearMarkup();
      //   countryNotFound();
    }
  });
}

// fetchCountriesByName('cats');
console.log(fetchCountriesByName('cats'));
console.log('qwe');
