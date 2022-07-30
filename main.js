
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("ip").innerHTML = `<span>Your IP is:</span><span>${data.ip}</span>`;
    })
    .catch(error => console.log(error));


setTimeout(() => {
    let ip = document.getElementById("ip").innerText;
    ip = ip.split("Your IP is:\n");
    ip = ip[1];
    fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=d1374b72c8ae44e5add4c848db5dd48e&ip=${ip}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("ipwho").innerHTML = `
            <p class="info country"><img src="${data.country_flag}">${data.city}, ${data.country_name}</p>
            <p class="info latlong">Latitude: ${data.latitude} <br> Longitude: ${data.longitude}</p>
            `;
        })
}, 1000);

