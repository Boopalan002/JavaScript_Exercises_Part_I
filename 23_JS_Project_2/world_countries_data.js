// Data for the most populated countries
const countriesData = [
    { country: "China", population: 1439323776 },
    { country: "India", population: 1380004385 },
    { country: "United States", population: 331002651 },
    { country: "Indonesia", population: 273523615 },
    { country: "Pakistan", population: 216565318 },
    { country: "Brazil", population: 212559417 },
    { country: "Nigeria", population: 202915907 },
    { country: "Bangladesh", population: 166303498 },
    { country: "Russia", population: 145934027 },
    { country: "Japan", population: 127817277 }
];

// Data for the most spoken languages
const languagesData = [
    { language: "Mandarin Chinese", speakers: 1090000000 },
    { language: "Spanish", speakers: 460000000 },
    { language: "English", speakers: 379000000 },
    { language: "Hindi", speakers: 341000000 },
    { language: "Arabic", speakers: 315000000 },
    { language: "Bengali", speakers: 228000000 },
    { language: "Portuguese", speakers: 221000000 },
    { language: "Russian", speakers: 154000000 },
    { language: "Japanese", speakers: 128000000 },
    { language: "Punjabi", speakers: 102000000 }
];

// Function to create a bar graph
function createBarGraph(data, graphId) {
    const graph = document.getElementById(graphId);
    const maxVal = Math.max(...data.map(item => item.population || item.speakers));
    data.forEach((item, index) => {
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.height = `${(item.population || item.speakers) / maxVal * 100}%`;
        bar.innerHTML = `${item.country || item.language}<br>${item.population || item.speakers}`;
        graph.appendChild(bar);
    });
}

// Create the bar graphs
createBarGraph(countriesData, "countries-graph");
createBarGraph(languagesData, "languages-graph");