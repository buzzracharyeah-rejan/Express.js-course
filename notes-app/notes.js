const fs = require('fs');
const chalk = require('chalk');
exports.getNotes = () => {
  console.log('Your notes!');
};

exports.addNotes = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  if (duplicateNote) {
    console.log(chalk.red.inverse('duplicate note found'));
  } else {
    notes.push({ title, body });
    // console.log(notes);
    saveNotes(notes);
    console.log(chalk.green.inverse('Note added!'));
  }
  // if (duplicateNotes.length > 0) {
  //   console.log('Note title taken');
  // } else {
  //   notes.push({ title, body });
  //   saveNotes(notes);
  //   console.log('New note added!');
  // }
};

exports.removeNotes = (title) => {
  console.log('remove notes call');
  const notes = loadNotes();
  const notesFind = notes.find((note) => note.title === title);
  if (notesFind) {
    const fliterNotes = notes.filter((note) => note.title !== title);
    saveNotes(fliterNotes);
    console.log(chalk.green.inverse('notes removed!'));
  } else {
    console.log(chalk.red.inverse('Note not found for deletion.'));
  }
};

exports.listNotes = () => {
  const notes = loadNotes();
  for (const note of notes) {
    console.log(`${chalk.bgGreen.bold('title')}: ${chalk.white(note.title)}`);
  }
};

exports.readNotes = (title) => {
  const notes = loadNotes();
  const noteFound = notes.find((note) => note.title === title);
  if (noteFound) {
    console.log(`${chalk.green.inverse(title)} : ${noteFound.body}`);
  } else {
    console.log(chalk.red('Note not found'));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};
