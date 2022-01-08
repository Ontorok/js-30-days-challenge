const apiendpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const fetchcities = async () => {
    const blob = await fetch(apiendpoint);
    const data = await blob.json();
    cities.push(...data);
};

fetchcities();

function findMatches(wordToMatch, citites) {
    const regex = new RegExp(wordToMatch, 'gi');
    return cities.filter(place => place.city.match(regex) || place.state.match(regex));
}

const searchinput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

function thousands_separators(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}

function displayMatch() {
    const findmatch = findMatches(this.value, cities);
    const html = findmatch.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityname = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const statename = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
            <li>
                <span class="name">${cityname}, ${statename}</span>
                <span class="population">${thousands_separators(place.population)}</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;

}

searchinput.addEventListener('change', displayMatch);
searchinput.addEventListener('keyup', displayMatch);


