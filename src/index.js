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
    });

    const todoBtn = document.querySelector('#todoBtn');
    todoBtn.addEventListener('click', () => {
        console.log('todoBtn event listener works!');
    });
})();

const categoryFactory = (function(){
    function createCategory(categoryName){
        const categoryDiv = document.querySelector('#categoryDiv');
        const category = document.createElement('p');
        category.innerText = categoryName;
        categoryDiv.appendChild(category);
        //add other functions that allows it to be removed
    }
});

//function createToDo(){}



