// fetch('http://puzzle.mead.io/puzzle')
//   .then((response) => {
//     response.json().then((data) => console.log(data));
//   })
//   .catch((error) => console.log(error));

// fetch('http://localhost:3000/weather?address=kathmandu')
//   .then((response) => {
//     response.json().then((resp) => {
//       console.log(resp);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const form = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.querySelector('#message-1');
const message2 = document.querySelector('#message-2');

// successMessage.textContent = 'Hello world, welcome to the weather app';
// errorMessage.textContent = 'Error message appears here!';
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    message2.innerHTML = '<h4>Loading... </h4>';
    const address = search.value;
    if (address.trim().length !== 0) {
      fetch(`http://localhost:3000/weather?address=${address}`)
        .then((response) => {
          response.json().then((data) => {
            if (data.error) {
              message1.textContent = '';
              message2.textContent = data.error;
            } else {
              console.log(data);
              const {
                current: {
                  feelslike,
                  temperature,
                  weather_descriptions,
                  precip,
                },
                location: { country, region },
              } = data.data;
              const message = `It is ${temperature} degree fahrenhiet, feels like ${feelslike}. The weather is ${weather_descriptions[0]} and has ${precip}% chance of rain`;
              const location = `${region}, ${country}`;

              message1.innerHTML = `${message} <br /> ${location}`;
              message2.textContent = '';
            }
          });
        })
        .catch((error) => {
          message1.textContent = '';
          message2.textContent = 'something went wrong';
        });
    } else {
      message1.textContent = '';
      message2.textContent = 'Please enter a valid address';
    }
  });
}
