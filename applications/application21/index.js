document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()
    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value
    }
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("age").value = ""
    document.getElementById("masseg").textContent = JSON.stringify(user)
})