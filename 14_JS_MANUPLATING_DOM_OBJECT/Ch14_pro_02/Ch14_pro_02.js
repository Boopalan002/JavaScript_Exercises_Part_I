const countries = ['Afghanistan','Bangladesh', 'Barbados', 'Belarus', 'Belgium','Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'India'];

const countriesList = document.getElementById('countries-list');

// Loop through the countries array and create list items for each country
countries.forEach(country => {
    const li = document.createElement('li');
    li.textContent = country;
    countriesList.appendChild(li);
});