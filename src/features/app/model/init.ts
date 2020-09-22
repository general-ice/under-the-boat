import {$notes, addNote, currentNoteTimeout, removeNote, startNotifyLife, TIMEOUT} from "./index";
import { sample } from "effector";

startNotifyLife.use((note) => {
    currentNoteTimeout && clearTimeout(currentNoteTimeout);

    // @ts-ignore
    currentNoteTimeout = setTimeout(() => removeNote(note), TIMEOUT);
    return;
});

sample($notes, addNote).watch((notes) => {
    if (notes.length === 1) {
        startNotifyLife(notes[0]);
    }
});

sample($notes, removeNote).watch((notes) => {
    if (notes.length) {
        startNotifyLife(notes[0]);
    }
})

$notes
    .on(addNote, (notes, note) => [...notes.filter((n) => n !== note), note])
    .on(removeNote, (notes, note) => notes.filter((n) => n !== note));