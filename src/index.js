//import statements (other js files, photos, )
/*
 to do brainstorm: 

 each individual todo item should have a: title, description, dueDate, priority, deleteBtn, editBtn

 todo items are contained in todo folders/projects

 now we have to somehow connect categories to their own to-do items
 
 when a user selects a different category, all the to-do items belonging in that category (via class) should load
 and prior to this should also wipe out the #todoDiv from ALL to-do items
 so in other words, clicking on a category activates deleteAlltodos() and loadToDos(category)

 implement local storage saving for categories and todos: 
 https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#example

 1. detect if there's any existing categories in local storage 
 1a. if there is, load those categories (and later the todos) using .getItem

 2. populateStorage with new categories by using .setItem(key, value);
 3. Use variable.onchange = populateStorage as a handler on each form element so that 
 the data and styling are updated whenever their value is changed.

*/

import './style.css';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/en';

//IIFE which adds event listeners to both buttons
(function (){
    const categoryBtn = document.querySelector('#categoryBtn');
    categoryBtn.addEventListener('click', () => {
        console.log('categoryBtn event listener works!');
        categoryPopup();

    });
})();

function populateStorage(){
//implement storing categories (would likely have to be the array itself)
}


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

        const sanitizedCategoryName = categoryName.replace(/\s/g, ''); 
        /*uses regex:
        the '/ ... /' are delimiters signifying the start and end of regular expressions
        the '\s' matches any whitespace character (or space)
        the 'g' is a flag for global search. It ensures the regex matches ALL whitespace chars instead of stopping at the first instance
        */

        category.innerText = categoryName;
        category.classList.add(sanitizedCategoryName);
        category.dataset.sanitizedCategoryName = sanitizedCategoryName;
        //note

        categoryDiv.appendChild(category);

        const deleteBtn = createDeleteBtn(categoryDiv, category);
        categoryDiv.appendChild(deleteBtn);

        let selectedCategoryName;

        category.addEventListener('click', () => {
            selectedCategoryName = category.dataset.sanitizedCategoryName;
            console.log(selectedCategoryName + ' has been selected!');
            selectDiv(selectedCategoryName);
        });

        const categoryObj = {
            name: selectedCategoryName,
            element: category,
        }

        categoryArray.push(categoryObj);

        /*if (!localStorage.getItem('category')){
            populateStorage();
        }*/

        return category;
    };

    //adds eventlistener to todoBtn, after clicking it, 
    //it activates todoFactory to create a todo object!
    function selectDiv(sanitizedCategoryName){
        const todoBtn = document.querySelector('#todoBtn');
        wipeAllToDos(sanitizedCategoryName);
        loadExistingToDos(sanitizedCategoryName); //work in progress
        todoBtn.addEventListener('click', () => {
            console.log('todoBtn event listener works!');
            todoPopup(sanitizedCategoryName);
        });
    }

    function todoPopup(sanitizedCategoryName){
        const todos = document.querySelector('#todos');
        const calendarHolder = document.createElement('div');
        todos.appendChild(calendarHolder);
        var toDueDate;
        const datePicker = new AirDatepicker(calendarHolder, {
            locale: localeEn,
            autoClose: true,
            dateFormat: "yyyy-MMM-dd",
            onSelect: function(formattedDate, date, inst){
                toDueDate = formattedDate.formattedDate;
                console.log("Selected date: ", toDueDate);
                const todoTitle = prompt('Please type the title of your to-do: ');
                const todoDescription = prompt('Please type the description of this to-do:');
                const todoPriority = prompt('Is this to-do a low, moderate, or high priorty? ');
                todoFactory.createToDo(sanitizedCategoryName, todoTitle, todoDescription, toDueDate, todoPriority);
                todos.removeChild(calendarHolder);
            },
        });
    }

    return {
        createCategory, categoryArray
    };
})(); //IIFE as well

const todoFactory = (() => {
    const todoArray = [];

    function createToDo(sanitizedCategoryName, todoTitle, todoDescription, toDueDate, todoPriority){
        const todoDiv = document.querySelector('#todoDiv'); //the parent div of todo Items

        const todoItem = document.createElement('div'); //for each item, holds the category, title, descrip, duedate, priority, deleteBtn

        const title = document.createElement('p');
        title.classList.add('itemTitle');
        title.innerText = todoTitle;
        todoItem.appendChild(title);

        const description = document.createElement('p');
        description.classList.add('itemDescription');
        description.innerText = todoDescription;
        todoItem.appendChild(description);

        const dueDate = document.createElement('p');
        dueDate.classList.add('itemDueDate');
        dueDate.innerText = toDueDate;
        todoItem.appendChild(dueDate);

        const priority = document.createElement('p');
        priority.classList.add('itemPriority');
        priority.innerText = todoPriority;
        todoItem.appendChild(priority);

        const deleteBtn = createDeleteBtn(todoDiv, todoItem);
        todoItem.appendChild(deleteBtn);

        todoItem.classList.add(sanitizedCategoryName);

        const todoItemObj = {
            category: sanitizedCategoryName,
            title: todoTitle,
            description: todoDescription,
            dueDate: toDueDate,
            priority: todoPriority,
            element: todoItem
        }
        todoArray.push(todoItemObj);

        const editBtn = createEditBtn(todoItemObj);
        todoItem.appendChild(editBtn);
        
        todoDiv.appendChild(todoItem);
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

function createEditBtn(todoItem){
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.addEventListener('click', () =>{
        editItem(todoItem);
    });
    return editBtn;
}

function editItem(item){
    const newTitle = prompt('Enter new title:');
    if (newTitle !== null){
        item.title = newTitle;
        item.element.querySelector('.itemTitle').innerText = newTitle;
    }

    const newDescription = prompt('Enter new description:');
    if (newDescription !== null){
        item.description = newDescription;
        item.element.querySelector('.itemDescription').innerText = newDescription;
    }

    const newDueDate = prompt('Enter new due date:');
    if (newDueDate !== null){
        item.dueDate = newDueDate;
        item.element.querySelector('.itemDueDate').innerText = newDueDate;
    }

    const newPriority = prompt('Enter new priority level:');
    if (newPriority !== null){
        item.priority = newPriority;
        item.element.querySelector('.itemPriority').innerText = newPriority;
    }
}

//new bug: ghost second click of adding a todo item on a second category
function wipeAllToDos(sanitizedCategoryName){
    const todoDiv = document.querySelector('#todoDiv');
    const todosToRemove = todoFactory.todoArray.filter(todo => todo.category !== sanitizedCategoryName);
    if (todosToRemove){
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



