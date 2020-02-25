const addBtn = document.querySelector('.form-button.add');
const todoList = document.getElementById('todo-list');

function addWordToList() {
    const textInput = document.querySelector('#word-to-edit');
    const listItem = document.createElement("li");
    const divContainerNameAndBtns = document.createElement("div");
        divContainerNameAndBtns.setAttribute('class', 'container-name-and-btns');
    const paragraphElement = document.createElement("p");
        if(textInput.value.trim() !== ''){
            textInput.style.border = "1px solid black";

            paragraphElement.appendChild(document.createTextNode(textInput.value));
            divContainerNameAndBtns.appendChild(paragraphElement);

            const itemNote = createItemNote();
            const editForm = createHiddenEditForm();
            const listButtons = createListButtons(paragraphElement, editForm, itemNote);
            divContainerNameAndBtns.appendChild(editForm);
            divContainerNameAndBtns.appendChild(listButtons);

            listItem.appendChild(divContainerNameAndBtns);
            listItem.appendChild(itemNote);

            todoList.appendChild(listItem);

            textInput.value = "";
        }else{
            textInput.style.border = "1px solid red";
        }
}

function openCloseNote(e, itemNote) {
    if(itemNote.classList.contains('show-note')){
        itemNote.classList.remove('show-note');
        e.target.classList.remove('btn-action-show');
        e.target.classList.add('btn-action-hide');
    }else{
        itemNote.classList.add('show-note');
        e.target.classList.remove('btn-action-hide');
        e.target.classList.add('btn-action-show');
    }

}

function deleteItemFromList(e){
    e.target.parentElement.parentElement.parentElement.remove();
}

function editItemFromList(e, paragraphElement, editForm){
    paragraphElement.classList.add('hidden');
    editForm.classList.remove('hidden');

    editForm.querySelector("input").value = paragraphElement.textContent;
    editForm.querySelector("button").addEventListener('click',() => saveEditedText(paragraphElement, editForm));
}

function saveEditedText(paragraphElement, editForm) {
    let newValue = editForm.querySelector("input").value;
    paragraphElement.textContent = newValue;
    console.log(newValue);

    paragraphElement.classList.remove('hidden');
    editForm.classList.add('hidden');


}


function createHiddenEditForm(){
    const hiddenDiv = document.createElement("div");
    hiddenDiv.setAttribute('class','hidden-div hidden');

    const hiddenInput = document.createElement("input");
    hiddenInput.setAttribute('class','hidden-form-input');
    hiddenInput.setAttribute('type','text');

    const hiddenBtn = document.createElement("button");
    hiddenBtn.setAttribute('class','hidden-form-button');
    hiddenBtn.textContent = "OK";

    hiddenDiv.appendChild(hiddenInput);
    hiddenDiv.appendChild(hiddenBtn);

    return hiddenDiv;
}

function createItemNote() {
    const noteDiv = document.createElement("div");
    noteDiv.setAttribute('class', 'item-note-div');

    const textArea = document.createElement("textarea");
    noteDiv.appendChild(textArea);

    return noteDiv;
}

function createListButtons(paragraphElement, editForm, itemNote){
    const btnContainer = document.createElement("div");
    const deleteBtn = document.createElement("img");
    const editBtn = document.createElement("img");
    const addNoteBtn = document.createElement("img");

    btnContainer.setAttribute('class','list-item-buttons');
    addNoteBtn.setAttribute('id', 'add-note-btn');
    deleteBtn.setAttribute('src','images/delete.png');
    editBtn.setAttribute('src','images/edit.png');
    addNoteBtn.setAttribute('src','images/plus.png');

    deleteBtn.addEventListener('click', deleteItemFromList);
    editBtn.addEventListener('click', (e) => editItemFromList(e, paragraphElement, editForm));
    addNoteBtn.addEventListener('click', (e) => openCloseNote(e, itemNote));

    btnContainer.appendChild(addNoteBtn);
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    return btnContainer;
}

addBtn.addEventListener('click', addWordToList);

