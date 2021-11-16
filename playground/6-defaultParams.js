// const greeter = (name = 'user', age) => {
//   console.log('hello' + name);
// };

// greeter();
const transaction = (type, { label, stock } = {}) => {
  console.log({ type, label, stock });
};
transaction('order');
