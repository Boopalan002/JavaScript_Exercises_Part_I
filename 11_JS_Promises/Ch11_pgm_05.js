const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(countriesAPI)
.then(response => {
    if(!response.ok){
        throw new console.error('Network response  was not ok' + response.statusText);
    }
    return response.json();
})
.then(data => {
    data.forEach(country => {
        const{ name, capital, languages, population, area } = country;
        console.log(`country: ${name}`);
        console.log(`capital: ${capital}`);
        console.log(`Languages: ${languages.map(lang => lang.name).join(', ')}`);
        console.log(`Population: ${population}`);
        console.log(`Area: ${area}`);
        console.log(`----------------------------`)
    });

})
.catch(error => {
    console.log("There has been a problem with your fetch operation:", error);
});
// Read the countries API using fetch and print the name of country, capital, languages, 
// population and area.