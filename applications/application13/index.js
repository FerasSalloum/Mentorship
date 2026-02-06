let person = {
    name: "",
    age: "",
    job: "",
    address: {
        city: "",
        zip: "",
    },
    language: "",
}
document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault()
    person = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        job: document.getElementById("work").value,
        address: {
            city: document.getElementById("city").value,
            zip: document.getElementById("zip").value,
        },
        language: document.getElementById("language").value,
    }
    document.querySelector(".card-para").innerHTML = `
    الاسم: ${person.name} <br>
    العمر: ${person.age} <br>
    العمل: ${person.job} <br>
    المدينة: ${person.city} <br>
    الركز البريدي: ${person.zip} <br>
    اللغة: ${person.language}
    `
})
const showMsseeg = ({ name, age, job }) => {
    if (name && age && job) {
        document.querySelector(".success-prompt-heading").textContent = `أهلاً بك ${name}! هذه رسالة الترحيب.`;
        document.getElementById("massegshow").textContent = `مرحبًا ${name}! عمرك ${age} وتعمل كـ ${job}.`
    } else {
        document.getElementById("massegshow").textContent = "يرجى ملء البيانات أولاً!"
    }
};

document.getElementById("masseg").addEventListener("click", () => {
    showMsseeg(person);
});