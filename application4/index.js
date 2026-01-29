const newTodo = document.getElementById("newTodo")
const addTodo = document.getElementById("addTodo")
const todoContaner = document.getElementById("todoContaner")
const paragraphMasseg = document.getElementById("masseg")

const todoList = []
const addTask = () => {
    paragraphMasseg.classList.remove("massegError", "massegGood")
    paragraphMasseg.classList.add("masseg")
    const task = newTodo.value
    if (task == "" || task == null) {
        paragraphMasseg.classList.remove("masseg")
        paragraphMasseg.classList.add("massegError")
        return paragraphMasseg.textContent = "الرجاء كتابة المهمة اولا"
    }
    todoList.push(task)
    creatTodo()
    paragraphMasseg.classList.remove("masseg")
    paragraphMasseg.classList.add("massegGood")
    return paragraphMasseg.textContent = "تم اضافة المهمة بنجاح"
}
const creatTodo = () => {
    todoContaner.innerHTML=""
    todoList.forEach((task, index) => {
        const todo = document.createElement("div")
        const todoParagraph = document.createElement("p")
        const todoButton = document.createElement("button")
        const buttonIcon = document.createElement("i")
        todo.classList.add("todo")
        todoParagraph.textContent = task
        todoButton.setAttribute("onclick", `deletTask(${index})`)
        buttonIcon.classList.add("fa-solid", "fa-trash-can")
        todoButton.appendChild(buttonIcon)
        todo.appendChild(todoParagraph)
        todo.appendChild(todoButton)
        todoContaner.appendChild(todo)
    })
}
const deletTask = (index)=>{
    todoList.splice(index,1)
    creatTodo()
    paragraphMasseg.classList.remove("masseg")
    paragraphMasseg.classList.add("massegGood")
    return paragraphMasseg.textContent = "تم انجاز المهمة بنجاح"

}
addTodo.addEventListener("click",addTask)