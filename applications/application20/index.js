const allNumber = []
const gnraetNumber = () => {
    const number = Math.floor(Math.random() * 100)
    allNumber.push(number)
    document.getElementById("masseg").textContent = `الرقم هو ${number}`
}
const showAll = () => {
    document.getElementById("masseg").textContent = `(${allNumber.join(" ,")})`
}