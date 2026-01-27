const inputDay = document.getElementById("inputDay")
const buttonCheek = document.getElementById("buttonCheek")
const paragraphMasseg = document.getElementById("masseg")
const days = {
    "الأحد": "اول ايام الاسبوع هل انت جاهز",
    "الأثنين": "انة يوم العمل المستمر تابع",
    "الثلاثاء": "لا تتوقف في منتصف الاسبوع ",
    "الأربعاء": "شارف الاسبوع على الانتهاء استعد",
    "الخميس": "غدا يمكنك  الاسترخاء اما اليوم لنستمر",
    "الجمعة": "استمتع بعطلة نهاية الاسبوع",
    "السبت": "كن مستعدا لبداية الاسبوع",
}
buttonCheek.addEventListener("click", () => {
    paragraphMasseg.classList.remove("masseg", "massegError", "massegGood")

    let day = inputDay.value.trim()
    if (!days[day]) {
        paragraphMasseg.classList.add("massegError")
        return paragraphMasseg.textContent = "الرجاء اختيار يوم من الاسبوع"
    }
    paragraphMasseg.classList.add("massegGood")
    return paragraphMasseg.textContent = `انة يوم ${[day]} : ${days[day]}`

})