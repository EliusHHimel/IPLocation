
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("ip").innerText = data.ip;
    })
    .catch(error => console.log(error));


setTimeout(() => {
    const ip = document.getElementById("ip").innerText;
    fetch(`http://ipwho.is/${ip}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("ipwho").innerText = data.ipwhois;
        })
}, 1000);

