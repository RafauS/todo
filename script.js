const addBtn = document.querySelector('.form-button.add');
const todoList = document.getElementById('todo-list');
let selectedWord;

function addWordToList() {
    const textInput = document.querySelector('#word-to-edit');
    const listItem = document.createElement("li");

        if(textInput.value.trim() !== ''){
            textInput.style.border = "1px solid black";
            listItem.appendChild(document.createTextNode(textInput.value));
            todoList.appendChild(listItem);

            textInput.value = "";

        }else{
            textInput.style.border = "1px solid red";
        }
}

function getElementFromParent(e){
    if(e.target.nodeName === "LI"){
       // selectedWord = e.target.textContent;
        changeAttributesSelectedItem(e)
    }
}

function changeAttributesSelectedItem(e){
    console.log(e.target.textContent);
    //e.target.style.fontWeight = "Bold";
    //e.target.style.transform = "scale(1.3)";
}

addBtn.addEventListener('click', addWordToList);
todoList.addEventListener('click',getElementFromParent);
