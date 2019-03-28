let temperature = document.getElementById('temperature');
let fahrenheit = document.getElementById('fahrenheit');
let celsius = document.getElementById('celsius');
let kelvin = document.getElementById('kelvin');

function temperatureFromFahrenheit(temp) {
  fahrenheit.innerHTML = `${temp}°F |
                          ${(((temp - 32) * 5) / 9).toFixed(4)}°C |
                          ${(((temp - 32) * 5) / 9 + 273.15).toFixed(3)}°K`;
}

function temperatureFromCelsius(temp) {
  celsius.innerHTML = `   ${temp * 1.8 + 32}°F |
                          ${temp}°C |
                          ${temp + 273.15}°K`;
}

function temperatureFromKelvin(temp) {
  kelvin.innerHTML = `    ${(((temp - 273.15) * 9) / 5 + 32).toFixed(2)}°F |
                          ${(temp - 273.15).toFixed(4)}°C |
                          ${temp}°K `;
}

function convertTemperature(e) {
  e.preventDefault();
  temperatureFromFahrenheit(Number(temperature.value));
  temperatureFromCelsius(Number(temperature.value));
  temperatureFromKelvin(Number(temperature.value));
}

// (0°C × 9/5) + 32 = 32°F
