const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// Fetch data from the cats API and calculate the average weight of cats in metric units
fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    let totalWeight = 0;
    let count = 0;

    data.forEach(cat => {
      const weightMetric = cat.weight.metric; // e.g., "3 - 5"
      const weights = weightMetric.split(' - ').map(Number); // Convert to [3, 5]
      const averageWeight = (weights[0] + weights[1]) / 2; // Calculate average
      totalWeight += averageWeight;
      count++;
    });

    const averageWeightOfCats = totalWeight / count;
    console.log(`Average weight of cats (in metric units): ${averageWeightOfCats.toFixed(2)} kg`);
  })
  .catch(error => console.error('Error fetching cat data:', error));

// Fetch data from the countries API to find the 10 largest countries by area
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    const sortedCountries = data.sort((a, b) => b.area - a.area); // Sort by area in descending order
    const largestCountries = sortedCountries.slice(0, 10); // Get top 10 largest countries

    console.log('10 largest countries by area:');
    largestCountries.forEach(country => {
      console.log(`${country.name}: ${country.area} sq km`);
    });
  })
  .catch(error => console.error('Error fetching country data:', error));

// Fetch data from the countries API to count the total number of official languages
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    const languagesSet = new Set();

    data.forEach(country => {
      country.languages.forEach(language => {
        languagesSet.add(language.name);
      });
    });

    const totalLanguages = languagesSet.size;
    console.log(`Total number of official languages in the world: ${totalLanguages}`);
  })
  .catch(error => console.error('Error fetching country data:', error));
// Read the cats api and find the average weight of cat in metric unit.
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.