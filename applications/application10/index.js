let allUser = []
const tableBody = document.getElementById("tableBody")

const showUsers = () => {
    console.log(allUser);
    tableBody.innerHTML = allUser.map((user, index) => {
        return user = `<tr>
                    <td>${user.name}</td>
                    <td>${user.age}</td>
                    <td>${user.email}</td>
                    <td onclick="deletUser(${index})"> <i class="fa-solid fa-trash-can"></i></td>
                </tr>`
    }).join(" ")
}
const deletUser = (index) => {
    allUser.splice(index, 1)
    showUsers()
}
document.getElementById("userForm").addEventListener("submit", (e) => {
    e.preventDefault()
    allUser.push({
        name: document.getElementById("userName").value,
        age: document.getElementById("userAge").value,
        email: document.getElementById("userEmail").value
    })

    showUsers()
})