console.log("Starting App.js")

const yargs = require('yargs');
const notes = require('./Notes.js');
const argv = yargs.argv;

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if (command === 'add'){
    console.log('Adding Note');
    notes.addingNote(title,body);
} else if (command === 'remove'){
    console.log('Removing Note');
    notes.removingNote(title);
} else if (command === 'read'){
    console.log('Reading Note');
    notes.readingNote(title);
} else if (command === 'list'){
    console.log('Listing all Notes');
    notes.listingNotes();
} else {
    console.log('Wrong Command')
}

