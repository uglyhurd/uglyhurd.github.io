
const field = document.querySelector('.foot_my1')

function createTask(value){
    const task = document.createElement("div")
    task.textContent = value
    return task
}

const newTask = createTask(field.value)


