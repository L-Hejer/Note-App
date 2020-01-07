const fs = require("fs");

var addingNote = (title, body) => {
  var note = {
    title: title,
    body: body
  };
  
  var newNotes = [...JSON.parse(fs.readFileSync("notes.json")), note];
  console.log(newNotes);

  fs.writeFileSync("notes.json", JSON.stringify(newNotes));
};

var removingNote = (title) => {
  var notes = [...JSON.parse(fs.readFileSync("notes.json"))];

  var filtredNotes = notes.filter(note => note.title !== title);
  console.log(filtredNotes);

  fs.writeFileSync("notes.json", JSON.stringify(filtredNotes));
};

var readingNote = (title) => {
  var notes = [...JSON.parse(fs.readFileSync("notes.json"))];

  var readNotes = notes.filter(note => note.title === title);
  console.log(readNotes)
};

var listingNotes = () => {
  var notes = [...JSON.parse(fs.readFileSync("notes.json"))];
  console.log(notes)
};

module.exports = {
  addingNote,
  removingNote,
  readingNote,
  listingNotes
};
