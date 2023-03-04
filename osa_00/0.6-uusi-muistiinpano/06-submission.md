# Post a new note to the single page app

When the page is initially loaded it holds a spa.js file. The javascripts handles loading the notes and rendering them to the page. It also holds the logic to update the notes to the server.

form.onsubmit listens to the submission of a new note:
```
form.onsubmit = function (e) {
    ...
}
```

When a new note is submitted the script pushes it to the list of notes (in the browser), which then is rendered to the page by redrawNotes() function:
```
form.onsubmit = function (e) {
    ...
    notes.push(note)
    ...
    redrawNotes()
    ...
}
```

At the last stage of the function the note is sent to the server with sendToServer() function.

This is the entire function:

```
window.onload = function (e) {
  var form = document.getElementById("notes_form")
  form.onsubmit = function (e) {
    e.preventDefault()

    var note = {
      content: e.target.elements[0].value,
      date: new Date()
    }

    notes.push(note)
    e.target.elements[0].value = ""
    redrawNotes()
    sendToServer(note)
  }
}
 ```

