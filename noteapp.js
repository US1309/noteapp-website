console.log("welcome to this project site");
showNotes();
// add text and add it to localStoragez

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function () {
    let addTxt = document.getElementById('addTxt');
    let addtitle = document.getElementById('addtitle');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addtitle.value,
        note: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addtitle.value = "";
    console.log(notesObj);
    if (addtitle.value != null || addTxt.value != null) {
        showNotes();
    }
    else {
        alert("error");
    }
})

// how to show code

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    // let html="";
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="notecard my-2 mx-1" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"><span id="index">${index + 1}.  ${element.title}</span></h5>
          <p class="card-text">${element.note}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
        </div>
      </div>`;
    });
    let notesElem = document.getElementById('Notes');
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    }
    else {
        notesElem.innerHTML = `<p class="white">nothing to show use Add Notes<p>`;
    }
}

//here we delete notes

function deleteNote(index) {
    console.log("i am deleting", index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchtext');
search.addEventListener("input", function () {
    let inputVal = search.value;
    console.log('input event fired!', inputVal);
    let notecard = document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function (element) {
        let cardtext = element.getElementsByTagName("p")[0].innerText;
        if (cardtext.includes(inputVal)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    })
})