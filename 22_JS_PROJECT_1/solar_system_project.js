const earthWeightInput = document.getElementById('earth-weight');
const planetSelect = document.getElementById('planet-select');
const calculateBtn = document.getElementById('calculate-btn');
const resultPara = document.getElementById('result');

const planetGravity = {
    Mercury: 0.38,
    Venus: 0.91,
    Earth: 1,
    Mars: 0.38,
    Jupiter: 2.53,
    Saturn: 1.07,
    Uranus: 0.92,
    Neptune: 1.19
}
calculateBtn.addEventListener('click', () => {
    const earthWeight = parseFloat(earthWeightInput.value);
    const selectedPlanet = planetSelect.value;
    const planetGravityValue = planetGravity[selectedPlanet];
    const weightOnPlanet = earthWeight * planetGravityValue;
    resultPara.textContent = `Your weight on ${selectedPlanet} is ${weightOnPlanet.toFixed(2)} kg`;
});