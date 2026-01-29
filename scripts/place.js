/* Footer Dates */
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  "Last Modification: " + document.lastModified;

/* --- WEATHER LOGIC --- */

// Static Variables
const temperature = 27;
const windSpeed = 7;
const conditions = "Mostly Cloudy";

// Wind Chill Function
// Metric Formula: 13.12 + 0.6215T - 11.37V^0.16 + 0.3965TV^0.16
function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

// calculation
let windChill;

// Validation: Wind Chill only applies to temperatures <= 10°C and wind > 4.8 km/h
if (temperature <= 10 && windSpeed > 4.8) {
  windChill = calculateWindChill(temperature, windSpeed) + " °C";
} else {
  windChill = "N/A";
}

/* --- DATA OBJECTS --- */

const dataVenezuela = {
  area: "916,445 sq km",
  population: "28,405,543",
  capital: "Caracas",
  languages: "Spanish",
  currency: "Venezuelan Bolívar",
  timeZone: "UTC-4",
  callingCode: "+58",
  internetTLD: ".ve",
};

const weatherVenezuela = {
  temperature: `${temperature} °C`,
  conditions: conditions,
  wind: `${windSpeed} km/h`,
  windChill: windChill,
};

/* --- RENDER FUNCTION --- */

function displayData(dataObj, selector) {
  const ulElement = document.querySelector(selector);
  ulElement.innerHTML = "";

  for (const key in dataObj) {
    const li = document.createElement("li");
    // Format key (ej: "timeZone" -> "Time Zone")
    const label =
      key.charAt(0).toUpperCase() +
      key
        .slice(1)
        .replace(/([A-Z])/g, " $1")
        .trim();

    li.innerHTML = `<strong>${label}:</strong> ${dataObj[key]}`;
    ulElement.appendChild(li);
  }
}

// execute
displayData(dataVenezuela, ".data-section .data-list ul");
displayData(weatherVenezuela, ".weather-section .data-list ul");
