
//create an event listener that adds the item to the task list
document.addEventListener('DOMContentLoaded', () => {
    //due to the naming convesion in the html, had to save the element in a new variable
    let myTaskInput = document.getElementById("new-task-description")

    //choose the form using querySelector
    //assign the 'create new task' an event listener when its submitted


    document.querySelector('form').addEventListener('submit', (event) =>{
        //preventDefault() is used the preventd website from automaticall refreshing
        event.preventDefault();

        //call the function that appends the input to the to-do list
        //use the input value as the parameter
        buildToDo(myTaskInput.value)
    })

})


//create a function that adds the task to the 'list' div once form is submitted
function buildToDo(toDoTask) {
    //create an element that we'll add to the div
    let p = document.createElement('p')

    //create a delete button
    let btn = document.createElement('button')

    //create a drop down menu for each element element

    //change color based on prioty selected




    //add the input to the element you've just created
    p.textContent = `${toDoTask} `;

    //adds the delete function to our button then removes the p, which is the parentNode
    btn.addEventListener('click', handleDelete)
    //delete the element once the button is clicked
    btn.textContent = "x";
    //this will append the button into the p variable
    p.appendChild(btn)

    //add the content to the 'task' list div
    console.log(document.querySelector('#tasks').appendChild(p))
}


function handleDelete(event) {
    event.target.parentNode.remove()
}