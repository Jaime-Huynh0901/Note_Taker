const express = require('express');
const router = express.Router();
const fs = require('fs');

const readDBFile = () => {
    const note = fs.readFileSync('db/db.json', 'utf8');
    const noteObj = JSON.parse(note);
    return noteObj;
}

const writeDBFile = (data ,res) => {
    fs.writeFile('db/db.json', JSON.stringify(data) , () => console.log("Done"));
    return res.json(data);
}

router.get('/api/notes', (req, res) => {
    const data = readDBFile();
    return res.json(data);
});

router.post('/api/notes', (req, res) => {
    const {title, text} = req.body;

    let newNote = {
        id: Date.now(),
        title: title,
        text: text
    };

    const data = readDBFile()
    data.push(newNote);
    writeDBFile(data, res);
});

router.delete('/api/notes/:id', (req, res) => {
    const noteId = parseInt(req.params.id);
    const data = readDBFile();
    const updatedData = data.filter( note => note.id != noteId);
    writeDBFile(updatedData, res);
});

module.exports = router;
