setTimeout(() => console.log('Two seconds are up'), 2000);

const names = ['rejan', 'raejvie', 'mr god'];
const shortNames = names.filter((name) => {
  return name.length < 5;
});
console.log(shortNames);

const geocode = (address, callback) => {
  const data = { latitude: 0, longitude: 0 };
};
