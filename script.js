const addBtn = document.querySelector('.form-button.add');
const todoList = document.getElementById('todo-list');
let selectedWord, paragraphElement;

function addWordToList() {
    const textInput = document.querySelector('#word-to-edit');
    const listItem = document.createElement("li");
    paragraphElement = document.createElement("p");

        if(textInput.value.trim() !== ''){
            textInput.style.border = "1px solid black";

            paragraphElement.appendChild(document.createTextNode(textInput.value));
            listItem.appendChild(paragraphElement);
            let hiddenDiv = createListParagraphEdit();

            listItem.appendChild(hiddenDiv);

            listItem.appendChild(createListButtoons());
            todoList.appendChild(listItem);

            textInput.value = "";
        }else{
            textInput.style.border = "1px solid red";
        }
}

function getElementFromParent(e){
    const editText = document.querySelector('#editting-word');

    if(e.target.nodeName === "LI"){
       selectedWord = e.target.textContent;
       editText.value = selectedWord;
    }
}

function createListParagraphEdit() {
    const editInputContainer = document.createElement("div");
    const hiddenInput = document.createElement("input");
    const hiddenButton = document.createElement("button");

    editInputContainer.setAttribute('class','edit-input-container');
    hiddenButton.textContent = "OK";
    hiddenButton.addEventListener('click', saveEditedItem);
    editInputContainer.appendChild(hiddenInput);
    editInputContainer.appendChild(hiddenButton);

    return editInputContainer;
}

function createListButtoons(){
    const btnContainer = document.createElement("div");
    const deleteBtn = document.createElement("img");
    const editBtn = document.createElement("img");

    btnContainer.setAttribute('class','list-item-buttons');
    deleteBtn.setAttribute('src','images/delete.png');
    editBtn.setAttribute('src','images/edit.png');

    deleteBtn.addEventListener('click',deleteItemFromList);
    editBtn.addEventListener('click',editItemFromList);

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    return btnContainer;
}

function deleteItemFromList(e){
    e.target.parentElement.parentElement.remove();
}

function editItemFromList(e){
    let itemValue = e.target.parentElement.parentElement.firstChild.textContent;
    const hiddenDiv = document.querySelector('.edit-input-container');
    //console.log(itemValue);
    paragraphElement.style.display = "none";
    paragraphElement.setAttribute('id','hidden');
    hiddenDiv.firstChild.value = itemValue;
    hiddenDiv.style.display = "block";
}

function saveEditedItem() {
    const hiddenDiv = document.querySelector('.edit-input-container');
    const hiddenP = document.querySelector('#hidden');
    let valueFromInput = hiddenDiv.firstChild.value;

    hiddenDiv.style.display = "none";
    hiddenP.textContent = valueFromInput;
    hiddenP.style.display = "block";

}



addBtn.addEventListener('click', addWordToList);
todoList.addEventListener('click',getElementFromParent);

