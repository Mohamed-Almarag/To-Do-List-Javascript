
//          /// ******  Start To Do List  Application ******** 

// get all variabls 
let theMainInput = document.querySelector('.add-task input'),

    theAddButton = document.querySelector('.add-task .plus'),

    theTaskesContainer = document.querySelector('.tasks-content'),

    taskCount = document.querySelector('.tasks-count span'),

    taskCompleted = document.querySelector('.tasks-completed span');


// when the page reload ,, put focus on input
let loadFocus =  _ => theMainInput.focus();
window.onload = loadFocus();

// Add the Task

theAddButton.onclick = function() {

    // check if the input empty
    if(theMainInput.value === '') {

        console.log("empty input");

    }  else {

        let noTaskMsg = document.querySelector('.tasks-content .no-tasks-message');

        // check if the body contains noTaskMsg or no before  delete
        if(document.body.contains(noTaskMsg)) {

            // remove no task msg
            noTaskMsg.remove();

        }

        // create main span
        let mainSpan =  document.createElement('span'),

            // create text for main span
            textMainSpan = document.createTextNode(theMainInput.value);

            // Add class to main span
            mainSpan.className = 'task-box';

            // Add the text to main span
            mainSpan.appendChild(textMainSpan);


        // create delete span
        let deleteSpan =  document.createElement('span'),

        // create text for main span
        textDeleteSpan = document.createTextNode('Delete');

        // Add class to main span
        deleteSpan.className = 'delete';

        // Add the text to main span
        deleteSpan.appendChild(textDeleteSpan);


        // Add the Delete span to The Main span
        mainSpan.appendChild(deleteSpan);

        // Add the Main span to The theTaskesContainer
        theTaskesContainer.appendChild(mainSpan);

        // Empty the Input
        theMainInput.value = '';

        // Focus on input
        loadFocus();

        // calculte tasks
        claculateTasks();
    }

};

document.addEventListener('click', function(e) {

    //Delete Task 
    if(e.target.className == 'delete') {

        e.target.parentNode.remove();

        // check if the containerTask not contains any element
        if(theTaskesContainer.childElementCount == 0) {

            // trigger Add no tasks message
            createNoTasksMessage();
        }

        // calculte tasks
        claculateTasks();
    }

    // Task finished
    if(e.target.classList.contains('task-box')) {

        e.target.classList.toggle('finished');

        // calculte tasks
        claculateTasks();
    }

    /*  calculte tasks
    //  claculateTasks();
    //  you can put claculateTasks(); in any place 
    //   [1]-- when you add a new task
    //   [2]-- when you delete any task or add any task
    //   [3]-- also you can put it in the end of this function
    */
});


// Function to create  no tasks message when there are no any tasks
function createNoTasksMessage() {

    // create span no tasks msg
    let msgSpan = document.createElement('span'),

        // cteate text no tasks
        textMsgSpan = document.createTextNode('No Tasks To Show');

        // append the text to msg span
        msgSpan.appendChild(textMsgSpan);

        // Add attribute to msgspan
        msgSpan.className = 'no-tasks-message';

        // Add msgspan to the theTaskesContainer
        theTaskesContainer.appendChild(msgSpan);

}

// Function to calculate tasks
function claculateTasks() {

    // calclute the tasks number
    taskCount.textContent = document.querySelectorAll('.tasks-content .task-box').length;

    // claculte completed tasks number
    taskCompleted.textContent = document.querySelectorAll('.tasks-content .finished').length;

}

//          /// ******  End To Do List  Application ******** 
