
document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()
    const theText = {
        backgroundColor: document.getElementById("backgroundColor").value,
        textColor: document.getElementById("fontColor").value,
        fontSize: document.getElementById("fontSize").value,
        text: document.getElementById("text").value
    }

    localStorage.setItem("theText", JSON.stringify(theText))
    show()
})
const show = () => {
    const show = document.getElementById("show")
    if (localStorage.getItem("theText")) {
        const theText = JSON.parse(localStorage.getItem("theText"))
        document.getElementById("backgroundColor").value = theText["backgroundColor"]
        document.getElementById("fontColor").value = theText["textColor"]
        document.getElementById("fontSize").value = theText["fontSize"]
        document.getElementById("text").value = theText["text"]
        console.log(theText);
        show.style.backgroundColor = theText["backgroundColor"]
        show.style.color = theText["textColor"]
        show.style.fontSize = theText["fontSize"] + "px"
        show.textContent = theText["text"]
    } else {
        const theText = JSON.parse(localStorage.getItem("theText"))
        show.style.backgroundColor = "#fff"
        show.style.color = "#000"
        show.style.fontSize = 16 + "px"
        show.textContent = "الرجاء تغير الاعدادات لروئية العرض"
    }
}
show()