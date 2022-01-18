export default function fetchCountries(nameOfCountry) {
    return fetch(`https://restcountries.com/v3.1/name/${nameOfCountry}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (!response.ok) {
            throw new Error(response.status);
            }
            // console.log(response)
            return response.json();
        })
}