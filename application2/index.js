const firstInput = document.getElementById("firstInput"),
    secondInput = document.getElementById("secondInput"),
    plusButton = document.getElementById("plusButton"),
    minusButton = document.getElementById("minusButton"),
    timesButton = document.getElementById("timesButton"),
    dividedButton = document.getElementById("dividedButton"),
    paragraphMasseg = document.getElementById("masseg")
let firstNumper = 0, secondNumber = 0;
const handelInput = () => {
    if (!firstInput.value || !secondInput.value) {
        show("الرجاء التاكد من ادخال الارقام", false)
        return false
    }
    firstNumper = parseInt(firstInput.value)
    secondNumber = parseInt(secondInput.value)
    return true
}
plusButton.addEventListener("click", () => {
    if (handelInput()) {
        show(firstNumper + secondNumber, true)
    }
})
minusButton.addEventListener("click", () => {
    if (handelInput()) {
        show(firstNumper - secondNumber, true)
    }
})
timesButton.addEventListener("click", () => {
    if (handelInput()) {
        show(firstNumper * secondNumber, true)
    }
})
dividedButton.addEventListener("click", () => {
    if (handelInput()) {
        if (secondNumber == 0) {
           return show("القسمة على 0 غير ممكنة", false)
        }
        show(firstNumper / secondNumber, true)
    }
})
const show = (reslt, type) => {
    paragraphMasseg.classList.remove("masseg", "massegError", "massegGood")
    if (type) {
        paragraphMasseg.classList.add("massegGood")
        paragraphMasseg.textContent = reslt
    } else {
        paragraphMasseg.classList.add("massegError")
        paragraphMasseg.textContent = reslt
    }
}
