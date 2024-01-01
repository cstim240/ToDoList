//import statements (other js files, photos, )
/*
 to do brainstorm 

 each individual todo item should have a: title, description, dueDate, priority

 todo items are contained in todo folders/projects
*/

import './style.css';

//IIFE which adds event listeners to both buttons
(function (){
    const categoryBtn = document.querySelector('#categoryBtn');
    categoryBtn.addEventListener('click', () => {
        console.log('categoryBtn event listener works!');
        categoryPopup();

    });

    const todoBtn = document.querySelector('#todoBtn');
    todoBtn.addEventListener('click', () => {
        console.log('todoBtn event listener works!');
    });
})();

const categoryFactory = (() => {
    function createCategory(categoryName){
        const categoryDiv = document.querySelector('#categoryDiv');
        const category = document.createElement('div');
        category.innerText = categoryName;
        categoryDiv.appendChild(category);
        //add other functions that allows it to be removed

        const deleteBtn = createDeleteBtn(categoryDiv, category);
        categoryDiv.appendChild(deleteBtn);
        return category;
    };

    function createDeleteBtn(categoryDiv, category){
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'X';
        deleteBtn.addEventListener('click', () => {
            categoryDiv.removeChild(category);
            categoryDiv.removeChild(deleteBtn);
        });
        return deleteBtn;
    };

    return {
        createCategory
    };
})(); //IIFE as well

//this creates a prompt for the user to fill in category name
function categoryPopup(){
    const categoryInput = prompt("Please type category name of to-do list:");
    const newCategory = categoryFactory.createCategory(categoryInput);
}



//function createToDo(){}



