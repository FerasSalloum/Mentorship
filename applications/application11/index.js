let interval;
const startClock = () => {
    if (interval) clearInterval(interval);
    interval = setInterval(() => {
        document.getElementById("clock").textContent = new Date().toLocaleTimeString()
    }, 1000);
}
const stopClock = () => {
    clearInterval(interval)
    interval = null
}
const goTO = () => {
    const url = prompt("ادحل الرابط اللذي تود الذهاب الية").trim()
    if (url) {
        if (url.startsWith("http://") || url.startsWith("https://")) {
            window.location.href = url
        } else {
            window.location.href = "https://" + url
        }
    }
}
startClock()