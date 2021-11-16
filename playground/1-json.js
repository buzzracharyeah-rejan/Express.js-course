const fs = require('fs');
const util = require('util');

const book = {
  title: 'the great book',
  author: 'some author',
};

// const data = fs.readFile(
//   './1-json.json',
//   { encoding: 'utf-8' },
//   util.promisify((err, data) => {
//     if (err) throw err;
//     return data;
//   })
// );
// console.log(data);

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-data.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// console.log(dataBuffer);
// console.log(dataBuffer.toString());

const data = fs.readFile('1-json.json', { encoding: 'utf-8' }, (err, data) => {
  //   if (err) throw err;

  console.log(data);
});
//   return new Promise((res, rej) => {
//     if (err) {
//       rej(err);
//     }
//     res(data);
//   });
// });
// console.log(data);

// data.then((data) => console.log(data));

// const parsedData = JSON.parse(data);
// console.log(parsedData.title);
