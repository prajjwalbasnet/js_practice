document.getElementById('push').onclick = () => {
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please enter your task name! ")
    }
    else{
        document.querySelector('#tasks').innerHTML += 
        `<div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>`;

        var current_task = document.querySelectorAll(".delete")
        for(var i = 0; i<current_task.length; i++){
            current_task[i].onclick = function() {
                this.parentNode.remove();
            }
        }
        document.querySelector("#newtask input").value = '';

        var tasks = document.querySelectorAll(".task");
        for(var i = 0; i < tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
    }
}