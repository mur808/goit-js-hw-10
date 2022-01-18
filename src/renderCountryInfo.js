export default function renderCountryInfo(countryArray) {
  const markupCountryInfo = countryArray
    .map(country => {
      return `<span class="span"><img src="${country.flags.svg}" alt="${country.name}">
            <h1 class="name"> ${country.name.official}</h1></span>
            <p class="capital">Capital: ${country.capital}</p>
            <p class="population">Population: ${country.population}</p> 
            <p class="languages">Languages: ${Object.values(country.languages)}</p>`;
    })
      .join('');
    return markupCountryInfo
}