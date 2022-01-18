import './css/styles.css';
import Notiflix from 'notiflix';
import fetchCountries from './fetchCountries';
import renderCountryArray from './renderCountryArray';
import renderCountryInfo from './renderCountryInfo';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const INFO_MESSAGE = 'Too many matches found. Please enter a more specific name.';
const FAILURE_MESSAGE = 'Oops, there is no country with that name';
const FAILURE_NF = Notiflix.Notify.failure;
const INFO_NF = Notiflix.Notify.info;

const refs = {
  field: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  info: document.querySelector('.country-info'),
};

refs.field.addEventListener('input', debounce(findInfo, DEBOUNCE_DELAY));

function findInfo(e) {
  e.preventDefault;

  const nameOfCountry = e.target.value.trim();
  if (!nameOfCountry) {
    doMarkup(refs.list, "");
    doMarkup(refs.info, "");
    return
  } 
  fetchCountries(nameOfCountry)
    .then(countryArray => {
      let quantity = countryArray.length;
      if (quantity === 1) {
        doMarkup(refs.list, "");
        doMarkup(refs.info, renderCountryInfo(countryArray));
        return ;
      }
      if (quantity > 1 && quantity <= 10) {
        doMarkup(refs.info, "");
        doMarkup(refs.list, renderCountryArray(countryArray));
        return ;
      }
      if (quantity > 10) {
        INFO_NF(INFO_MESSAGE);
        doMarkup(refs.info, "");
        return ;
      } 
    })
    .catch(error => FAILURE_NF(FAILURE_MESSAGE));
}
function doMarkup(where, what) {
  where.innerHTML = what;
}