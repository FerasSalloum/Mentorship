const allUser = new Map
function User(name, age, email) {
    this.key = "id_" + Date.now()
    this.name = name
    this.age = age
    this.email = email
    this.edit = function (name, age, email) {
        this.name = name
        this.age = age
        this.email = email
    }
}
const showAddUser = () => {
    document.querySelector(".add-contaner").classList.toggle("visible")
    document.getElementById("inputNameUser").value = "",
        document.getElementById("inputAgeUser").value = "",
        document.getElementById("inputEmailUser").value = "",
        document.getElementById("addUser").addEventListener("submit", addUser, { once: true })
}
const addUser = (e) => {
    e.preventDefault()
    const newUser = new User(
        document.getElementById("inputNameUser").value,
        document.getElementById("inputAgeUser").value,
        document.getElementById("inputEmailUser").value,
    )
    allUser.set(newUser.key, newUser)
    showUsers()
    document.querySelector(".add-contaner").classList.toggle("visible")

}
const showUsers = () => {
    document.getElementById("users").innerHTML =
        [...allUser.values()].map((user) => {
            return user =
                `   <div class="user-contaner">
                <p>مرحبًا ${user.name}! عمرك ${user.age} عامًا وبريدك الإلكتروني هو ${user.email}</p>
                <div>
                    <!-- From Uiverse.io by KINGFRESS -->
                    <button onclick="showEditeUser('${user.key}')">
                        <span class="circle1"></span>
                        <span class="circle2"></span>
                        <span class="circle3"></span>
                        <span class="circle4"></span>
                        <span class="circle5"></span>
                        <span class="text">تعديل المعلومات</span>
                    </button>
                    <!-- From Uiverse.io by KINGFRESS -->
                    <button onclick="deletUser('${user.key}')">
                        <span class="circle1"></span>
                        <span class="circle2"></span>
                        <span class="circle3"></span>
                        <span class="circle4"></span>
                        <span class="circle5"></span>
                        <span class="text">حذف المستخدم</span>
                    </button>
                </div>
            </div>`
        }).join(" ")
}
const deletUser = (keyUser) => {
    allUser.delete(keyUser)
    showUsers()
}
const showEditeUser = (keyUser) => {
    document.querySelector(".add-contaner").classList.toggle("visible")
    const user = allUser.get(keyUser)
    document.getElementById("inputNameUser").value = user.name,
        document.getElementById("inputAgeUser").value = user.age,
        document.getElementById("inputEmailUser").value = user.email,
        document.getElementById("addUser").addEventListener("submit", (e) => {
            e.preventDefault()
            editeUser(keyUser)
        }
            , { once: true })
}
const editeUser = (keyUser) => {

    const user = allUser.get(keyUser)
    user.edit(
        document.getElementById("inputNameUser").value,
        document.getElementById("inputAgeUser").value,
        document.getElementById("inputEmailUser").value,
    )
    document.querySelector(".add-contaner").classList.toggle("visible")
    showUsers()
}
showUsers()