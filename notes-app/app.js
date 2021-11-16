// const { name, add } = require('./utils');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const dotenv = require('dotenv').config();

const {
  getNotes,
  addNotes,
  removeNotes,
  listNotes,
  readNotes,
} = require('./notes');

// customize yargs version
yargs.version('1.1.0');

// add, remove, read, list notes

// create add command

yargs.command(
  'add',
  'Add some notes',
  (yargs) => {
    return yargs
      .option('title', {
        alias: 't',
        describe: 'Notes title',
        demandOption: true,
        type: 'string',
      })
      .option('body', {
        alias: 'b',
        describe: 'Notes body',
        demandOption: true,
        type: 'string',
      });
  },
  (argv) => {
    const { title, body } = argv;
    addNotes(title, body);
  }
);

// Create remove command
yargs.command(
  'remove',
  'Remove a note',
  {
    title: {
      alias: 't',
      describe: 'notes title',
      type: 'string',
      demandOption: true,
    },
  },
  function (argv) {
    const { title } = argv;
    removeNotes(title);
    // console.log('refunction () {move notes...');
  }
);

// create read command
yargs.command(
  'read',
  'Read notes',
  {
    title: {
      alias: 't',
      type: 'string',
      demandOption: true,
      describe: 'note title',
    },
  },
  (argv) => {
    readNotes(argv.title);
  }
);

// list notes command
yargs.command('list', 'List notes', function () {
  listNotes();
});

yargs.parse();
