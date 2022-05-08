let weatherCheck = (e) => {
  const keyAPI = `8826c10064648be786a4fc5a7a965748`;
  const loc = document.getElementById('location').value;
  const stringPassIn = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${keyAPI}`;

  const tempSearch = () => {
    fetch(stringPassIn)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const temperature = Math.ceil(data.main.temp) - 273;
        if (temperature > 14) {
          document.getElementById('results').innerHTML = `<p>T-Shirt Weather! It is ${temperature}°C in ${loc}</p>`
        } else {
          document.getElementById('results').innerHTML = `<p>Bit chilly out in ${loc}, grab a coat. It is ${temperature}°C</p>`
        }
      })
      .catch((err) => console.log(err));
  };
  tempSearch();
  e.preventDefault();
};

document.getElementById('button').addEventListener('click', weatherCheck);
