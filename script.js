const addBtn = document.querySelector('.form-button.add');
const todoList = document.getElementById('todo-list');

function addWordToList() {
    const textInput = document.querySelector('#word-to-edit');
    const listItem = document.createElement("li");
    const paragraphElement = document.createElement("p");

        if(textInput.value.trim() !== ''){
            textInput.style.border = "1px solid black";

            paragraphElement.appendChild(document.createTextNode(textInput.value));
            listItem.appendChild(paragraphElement);

            const editForm = createHiddenEditForm();
            const listButtons = createListButtons(paragraphElement, editForm);
            listItem.appendChild(editForm);
            listItem.appendChild(listButtons);
            todoList.appendChild(listItem);

            textInput.value = "";
        }else{
            textInput.style.border = "1px solid red";
        }
}

function deleteItemFromList(e){
    e.target.parentElement.parentElement.remove();
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

function createListButtons(paragraphElement, editForm){
    const btnContainer = document.createElement("div");
    const deleteBtn = document.createElement("img");
    const editBtn = document.createElement("img");

    btnContainer.setAttribute('class','list-item-buttons');
    deleteBtn.setAttribute('src','images/delete.png');
    editBtn.setAttribute('src','images/edit.png');

    deleteBtn.addEventListener('click', deleteItemFromList);
    editBtn.addEventListener('click', (e) => editItemFromList(e, paragraphElement, editForm));

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    return btnContainer;
}

addBtn.addEventListener('click', addWordToList);

