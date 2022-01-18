export default function renderCountryArray(countryArray) {
  const markupCountryList = countryArray
    .map(country => {
      return `<li class="country">
        <img src="${country.flags.svg}" alt="">
        <p>${country.name.common}</p>
        </li>`;
    })
    .join('');
  return markupCountryList;
}