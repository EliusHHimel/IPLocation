const searchIP = document.getElementById("ip-input");
const searchBtn = document.getElementById("search-btn");

// Search IP and Show Location Info

searchBtn.addEventListener("click", () => {
    const ip = searchIP.value;
    document.getElementById("ip").innerHTML = `<span>Your Searched IP is:</span><span>${ip}</span>`;
    geoLocation(ip);
    searchIP.value = "";
})

// Get IP of the user

function getIP() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("ip").innerHTML = `<span>Your IP is:</span><span>${data.ip}</span>`;
            geoLocation(data.ip);
        })
        .catch(error => console.log(error));
}

getIP();

// Set GEO Location Details in UI

function geoLocation(ip) {

    fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=d1374b72c8ae44e5add4c848db5dd48e&ip=${ip}`)
        .then(response => response.json())
        .then(data => {

            document.getElementById("ipwho").innerHTML = `
            <p class="info city">City: <br> ${data.city}</p>
            <p class="info zipcode">Zip Code: <br> ${data.zipcode ? data.zipcode : 'Not Found'}</p>
            <p class="info state">Division/State: <br> ${data.state_prov}</p>
            <p class="info country">Country: <br> <img src="${data.country_flag}">${data.country_name + ', ' + data.country_code2}</p>
            <p class="info district">District: <br> ${data.district}</p>
            <p class="info continent">Continent: <br> ${data.continent_name}</p>
            <p class="info latlong">Latitude: ${data.latitude} <br> Longitude: ${data.longitude}</p>
            <p class="info language">Language: <br> ${data.languages}</p>
            <p class="info currency">Currency: <br> ${data.currency.code} ${data.currency.symbol}</p>
            <p class="info currency-name">Currency Name: <br> ${data.currency.name}</p>
            <p class="info timezone">Timezone: <br> ${data.time_zone.name}</p>
            <p class="info calling-code">Calling Country Code: <br> ${data.calling_code}</p>
            <p class="info isp">ISP Name: <br> ${data.isp}</p>
            <p class="info org">Organization: <br> ${data.organization}</p>
            `;
        })
};

