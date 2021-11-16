const square = (x) => x * x;

console.log(square(2));
const name = 'your name';

const event = {
  name: 'birthday event',
  guestList: ['rejan', 'rajive', 'mr God'],
  printName() {
    console.log(this.name);
    const that = this;
    this.guestList.forEach(function (guest) {
      console.log(`${guest} is attending ${that.name}`);
    });
  },
};

event.printName();
