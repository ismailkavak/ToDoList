let ul = document.querySelector("#list")

function add() {
    let taskInput = document.querySelector("#task")
    let ulDOM = taskInput.value.trim()
    if (!ulDOM) {
        let myToast = document.querySelector("#liveToast1")
        var toast = new bootstrap.Toast(myToast)
        toast.show()
    }
    else {
        
        let liDOM = document.createElement('li')
        liDOM.innerHTML = `<span class="checkbox" onclick="toggleCompleted(this)">&#10003;</span> 
        <span class="task-text">${ulDOM}</span> 
        <button type="button" class="btn myButton" style="background-color: #F78501; color: white;" onclick="remove(this)">X</button>`;
        ul.appendChild(liDOM);
        taskInput.value = ""

        
        let taskList = JSON.parse(localStorage.getItem("taskList")) || [];
        taskList.push(ulDOM);
        localStorage.setItem("taskList", JSON.stringify(taskList));


        
        let myToast = document.querySelector("#liveToast")
        var toast = new bootstrap.Toast(myToast)
        toast.show()



    
    }
}


function remove(button) {
    const listItem = button.parentElement;
    listItem.remove();
}


document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        add(); 
    }
});


//Just wrote
function toggleCompleted(checkbox) {
    const listItem = checkbox.parentNode;
    listItem.classList.toggle("completed");
}

window.onload = function() {
    let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

    taskList.forEach(task => {
        let liDOM = document.createElement('li');
        liDOM.innerHTML = `<span class="checkbox" onclick="toggleCompleted(this)">&#10003;</span> 
        <span class="task-text">${task}</span> 
        <button type="button" class="btn myButton" style="background-color: #F78501; color: white;" onclick="remove(this)">X</button>`;
        ul.appendChild(liDOM);
    });
};






  
