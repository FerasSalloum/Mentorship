const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 30;
const year = month * 12;

const startTimer = () => {
    const targetDate = new Date(document.getElementById("time").value).getTime();
    if (isNaN(targetDate)) {
        document.getElementById("masseg").textContent = "الجاء ادخال تاريخ صالح";
        return
    }
    const countdown = setInterval(() => {
        const distance = targetDate - new Date().getTime();
        const y = Math.floor(distance / year);
        const mo = Math.floor((distance % year) / month);
        const d = Math.floor((distance % month) / day);
        const h = Math.floor((distance % day) / hour);
        const m = Math.floor((distance % hour) / minute);
        const s = Math.floor((distance % minute) / second);

        document.getElementById("masseg").textContent = `${d} يوم و ${h} ساعة و ${m} دقيقة و ${s} ثانية`;

        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("masseg").textContent = "انتهى الوقت";
        }
    }, 1000);
}