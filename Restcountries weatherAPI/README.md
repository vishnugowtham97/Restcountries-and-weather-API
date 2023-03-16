# Restcountries-API
Restcountries and weather using fetch API

# Country Information

This web page displays information about all countries using the Rest Countries API (https://restcountries.com/v2/all). The information displayed includes the country name, flag image, capital, region, country code, and current weather in the capital city.

The current weather information is obtained using the OpenWeatherMap API (https://openweathermap.org/). To use this API, you will need to obtain an API key by signing up for a free account.

## Getting Started

To get started, simply open the index.html file in your web browser. This will load the web page and display information about all countries.

## How it Works

When the web page is loaded, it makes a GET request to the Rest Countries API endpoint for all countries. It then loops through the response data and creates a new element for each country. For each country, it displays the country name, flag image, capital, region, and country code.

For each country, it also makes a GET request to the OpenWeatherMap API endpoint for the current weather in the country's capital. It then displays the weather information below the other country information.

## Code Overview

The code is written in HTML, CSS, and JavaScript. The HTML file (index.html) contains the structure of the web page. The CSS file (style.css) contains the styles for the web page. The JavaScript file (script.js) contains the code that makes the API requests and updates the web page.

Here is an overview of the JavaScript code:

1. Make a GET request to the Rest Countries API endpoint for all countries.
2. Loop through the response data and create a new element for each country.
3. For each country, make a GET request to the OpenWeatherMap API endpoint for the current weather in the country's capital.
4. Update the web page with the country information and weather information.

## Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap
- Rest Countries API
- OpenWeatherMap API
- Fetch API

## Acknowledgments

- Rest Countries API (https://restcountries.com/v2/all)
- OpenWeatherMap API (https://openweathermap.org/)
