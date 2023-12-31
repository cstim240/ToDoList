//import statements (other js files, photos, )
/*
 to do brainstorm 

 each individual todo item should have a: title, description, dueDate, priority

 todo items are contained in todo folders
*/

import './style.css';

//IIFE which adds event listeners to both buttons
(function (){
    const categoryBtn = document.querySelector('#categoryBtn');
    categoryBtn.addEventListener('click', () =>{
        console.log('categoryBtn event listener works!');
    });

    const todoBtn = document.querySelector('#todoBtn');
    todoBtn.addEventListener('click', () => {
        console.log('todoBtn event listener works!');
    });
})();

//function createCategory(){}

//function createToDo(){}



