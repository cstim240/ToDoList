//import statements (other js files, photos, )
/*
 to do brainstorm: 

 each individual todo item should have a: title, description, dueDate, priority

 todo items are contained in todo folders/projects

 now we have to somehow connect categories to their own to-do items
 
 when a user selects a different category, all the to-do items belonging in that category (via class) should load
 and prior to this should also wipe out the #todoDiv from ALL to-do items
 so in other words, clicking on a category activates deleteAlltodos() and loadToDos(category)
*/

import './style.css';

//IIFE which adds event listeners to both buttons
(function (){
    const categoryBtn = document.querySelector('#categoryBtn');
    categoryBtn.addEventListener('click', () => {
        console.log('categoryBtn event listener works!');
        categoryPopup();

    });

})();

//this creates a prompt for the user to fill in category name
function categoryPopup(){
    const categoryInput = prompt("Please type category name of to-do list:");
    //bug to fix: if a space is found inside the categoryInput, an error occurs
    const newCategory = categoryFactory.createCategory(categoryInput);
}

const categoryFactory = (() => {
    const categoryArray = [];

    function createCategory(categoryName){
        const categoryDiv = document.querySelector('#categoryDiv');
        const category = document.createElement('div');

        const sanitizedCategoryName = categoryName.replace(/\s/g); 
        /*uses regex:
        the '/ ... /' are delimiters signifying the start and end of regular expressions
        the '\s' matches any whitespace character (or space)
        the 'g' is a flag for global search. It ensures the regex matches ALL whitespace chars instead of stopping at the first instance
        */

        category.innerText = categoryName;
        category.classList.add(sanitizedCategoryName);
        categoryDiv.appendChild(category);

        const deleteBtn = createDeleteBtn(categoryDiv, category);
        categoryDiv.appendChild(deleteBtn);

        const categoryObj = {
            name: sanitizedCategoryName,
            element: category,
        }
        
        categoryArray.push(categoryObj);

        makeDivClickable(category, categoryObj.name);

        

        return category;
    };

    function makeDivClickable(category, sanitizedCategoryName){
        category.addEventListener('click', () =>{
            console.log(category + ' has been selected!');
            selectDiv(sanitizedCategoryName);
        });
    }

    //adds eventlistener to todoBtn, after clicking it, 
    //it activates todoFactory to create a todo object!
    function selectDiv(sanitizedCategoryName){
        const todoBtn = document.querySelector('#todoBtn');
        wipeAllToDos();
        loadExistingToDos(sanitizedCategoryName); //work in progress
        todoBtn.addEventListener('click', () => {
            console.log('todoBtn event listener works!');
            todoPopup(sanitizedCategoryName);
        });
    }

    function todoPopup(sanitizedCategoryName){
        const todoTitle = prompt('Please type the title of your to-do: ');
        const todoDescription = prompt('Please type the description of this to-do:');
        const toDueDate = prompt('When do you plan to-do this? ');
        const todoPriority = prompt('Is this to-do a low, moderate, or high priorty? ');
        todoFactory.createToDo(sanitizedCategoryName, todoTitle, todoDescription, toDueDate, todoPriority);
    }

    return {
        createCategory
    };
})(); //IIFE as well

const todoFactory = (() => {
    const todoArray = [];

    function createToDo(sanitizedCategoryName, todoTitle, todoDescription, toDueDate, todoPriority){
        const todoDiv = document.querySelector('#todoDiv'); //the parent div of todo Items

        const todoItem = document.createElement('div'); //for each item, holds the category, title, descrip, duedate, priority, deleteBtn

        const title = document.createElement('p');
        title.innerText = todoTitle;
        todoItem.appendChild(title);

        const description = document.createElement('p');
        description.innerText = todoDescription;
        todoItem.appendChild(description);

        const dueDate = document.createElement('p');
        dueDate.innerText = toDueDate;
        todoItem.appendChild(dueDate);

        const priority = document.createElement('p');
        priority.innerText = todoPriority;
        todoItem.appendChild(priority);

        const deleteBtn = createDeleteBtn(todoDiv, todoItem);
        todoItem.appendChild(deleteBtn);

        todoItem.classList.add(sanitizedCategoryName);
        todoDiv.appendChild(todoItem);

        const todoItemObj = {
            category: sanitizedCategoryName,
            title: todoTitle,
            description: todoDescription,
            dueDate: toDueDate,
            priority: todoPriority,
            element: todoItem
        }
        todoArray.push(todoItemObj);
    }

    return {
        createToDo, todoArray
    }
})();

//to be used in both category and todoFactory functions
function createDeleteBtn(parentDiv, divToDelete){
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    deleteBtn.addEventListener('click', () => {
        parentDiv.removeChild(divToDelete);
    });
    return deleteBtn;
}

//NOTE: still doesn't work at the moment, will wipe out todos on the first switch, but subsequent removal does not work
//look into how the current sanitizedCategoryName is set
function wipeAllToDos(sanitizedCategoryName){
    const todoDiv = document.querySelector('#todoDiv');
    const todosToRemove = todoFactory.todoArray.filter(todo => todo.category !== sanitizedCategoryName);
    if (todosToRemove && todoDiv){
        todosToRemove.forEach(todo => {
            todoDiv.removeChild(todo.element);
        });
    }
}

function loadExistingToDos(sanitizedCategoryName) {
    const todoDiv = document.querySelector('#todoDiv');
    const todos = todoFactory.todoArray.filter(todo => todo.category === sanitizedCategoryName);
    //returns an array of todos from: the array called todoArray which have the category == categoryName
    if (todos){
        todos.forEach(todo => {
            todoDiv.appendChild(todo.element);
        });
    }
}



