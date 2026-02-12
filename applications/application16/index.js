document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const hintName = document.getElementById("hint-name")
    const hintEmail = document.getElementById("hint-email")
    hintName.classList.remove("eroor-masseg", "good-masseg")
    hintEmail.classList.remove("eroor-masseg", "good-masseg")
    hintEmail.textContent = ""
    hintName.textContent = ""
    if (name.trim() == "") {
        hintName.classList.add("eroor-masseg")
        hintName.textContent = "اسم المستخدم فارغ"
        return
    }
    if (!((/^(?=.{3,20}$)(?![_.-])(?!.*[_.-]{2})[a-zA-Z0-9_-]+([^._-])$/).test(name))) {
        hintName.classList.add("eroor-masseg")
        hintName.textContent = "اسم المستخدم لا يطابق المواصفات"
        return
    }
    if (email.trim() == "") {
        hintEmail.classList.add("eroor-masseg")
        hintEmail.textContent = "البريد الالكتروني فارغ"
        return
    }
    if (!((/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm).test(email))) {
        hintEmail.classList.add("eroor-masseg")
        hintEmail.textContent = "البريد الالكتروني لا يطابق المواصفات"
        return
    }
    hintName.classList.add("good-masseg")
    hintEmail.classList.add("good-masseg")
    hintName.textContent = "اسم المستخدم مطابق"
    hintEmail.textContent = "البريد الالكتلروني مطابق"
})