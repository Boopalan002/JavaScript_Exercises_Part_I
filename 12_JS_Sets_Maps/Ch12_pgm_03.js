const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

const url = 'https://restcountries.com/v2/all'; 

// Function to fetch countries data and count languages
const fetchCountriesData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();

    const languageCounts = countries.reduce((acc, country) => {
      country.languages.forEach(language => {
        acc[language.name] = (acc[language.name] || 0) + 1;
      });
      return acc;
    }, {});

    return languageCounts;
  } catch (err) {
    console.error('Fetch error:', err);
  }
};


const mostSpokenLanguages = async (countries, topN) => {
  const languageCounts = await fetchCountriesData();

  const sortedLanguages = Object.entries(languageCounts)
    .map(([language, count]) => ({ [language]: count }))
    .sort((a, b) => Object.values(b)[0] - Object.values(a)[0])
    .slice(0, topN);

  return sortedLanguages;
};

mostSpokenLanguages(countries, 10).then(result => console.log(result));

mostSpokenLanguages(countries, 3).then(result => console.log(result));
// How many languages are there in the countries object file.

// *** Use the countries data to find the 10 most spoken languages:


//    // Your output should look like this
//    console.log(mostSpokenLanguages(countries, 10))
//    [
//      { English: 91 },
//      { French: 45 },
//      { Arabic: 25 },
//      { Spanish: 24 },
//      { Russian: 9 },
//      { Portuguese: 9 },
//      { Dutch: 8 },
//      { German: 7 },
//      { Chinese: 5 },
//      { Swahili: 4 },
//      { Serbian: 4 }
//    ]

//   // Your output should look like this
//   console.log(mostSpokenLanguages(countries, 3))
//   [
//   {English:91},
//   {French:45},
//   {Arabic:25}
//   ]