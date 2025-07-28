const inputBox  = document.getElementById('input-box');
const listContainer  = document.getElementById('list-container');

function addTask(){
    const task = inputBox.value;
    if(task){
        const taskElement = document.createElement('li');
        taskElement.innerHTML = task;
        listContainer.appendChild(taskElement);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        taskElement.appendChild(span);
        inputBox.value = '';
    }
    else{
        alert('Please enter your task');
    }
    saveDate();
}

inputBox.addEventListener('keyup', function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveDate();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveDate();
    }
},false);

function saveDate(){
    localStorage.setItem('taskList', listContainer.innerHTML);
}

function loadDate(){
    listContainer.innerHTML = localStorage.getItem('taskList');
}   

function clearAll(){
    listContainer.innerHTML = '';
    saveDate();
}
function clearCompleted(){
    let completed = document.querySelectorAll('.checked');
    completed.forEach(function(task){
        task.remove();
    });
    saveDate();
}
loadDate();