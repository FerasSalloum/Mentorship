const form = document.getElementById("dataForm")
const inputName = document.getElementById("name")
const inputAge = document.getElementById("age")
const inputHobbies = document.getElementById("hobbies")
const paragraphMasseg = document.getElementById("masseg")

let userName = "", age = 0, hobbies = "", masseg =""

form.addEventListener("submit", (e) => {
    paragraphMasseg.classList.remove("massegError","massegGood","masseg")
    e.preventDefault()
    userName = inputName.value
    age = inputAge.value
    hobbies = inputHobbies.value
    if (!userName || !age || !hobbies) {
        paragraphMasseg.classList.add("massegError")
        masseg = "الرجاء ادخال البيانات المطلوبة"
        paragraphMasseg.textContent =masseg
    }
    else{
        paragraphMasseg.classList.add("massegGood")
        masseg = `اهلا يا ${userName}! عمرك ${age}! هواياتك ${hobbies}`
        paragraphMasseg.textContent =masseg
    }

})