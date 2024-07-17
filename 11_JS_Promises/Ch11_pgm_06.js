const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(catsAPI)
.then(response => {
    if(!response.ok){
        throw new  console.error('Network response was not ok' + response.statusText);
    }
    return response.json();

})
.then(data => {
    data.forEach(cat =>{
        const{ name, temperament, origin} = cat;
        console.log(`cat name: ${name}`);
        console.log(`temperament: ${temperament}`);
        console.log(`origin: ${origin}`);
        console.log(`----------------------------`);
    });
})
.catch(error =>{
    console.log("There has been a problem with your fetch operation:", error);
});
// Print out all the cat names in to catNames variable.