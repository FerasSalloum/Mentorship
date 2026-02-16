let allUsers = []
const urlUsers = "https://jsonplaceholder.typicode.com/users"
const tableBody = document.getElementById("tableBody")

const getUsers = async () => {
    try {
        const response = await fetch(urlUsers);
        if (!response.ok) {
            throw new Error(`خطأ في السيرفر: ${response.status}`);
        }
        const data = await response.json();
        allUsers = data;
        showUsers();
    } catch (error) {
        console.error("فشلت عملية جلب المستخدمين:", error.message);
        console.log("تعذر تحميل البيانات، يرجى المحاولة لاحقاً.");
    }
};
const showUsers = () => {
    tableBody.innerHTML = allUsers.map((user, index) => {
        return user = `<tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
            <td onclick="showInfo(${index})">عرض التفاصيل</td>
            </tr>`
    }).join(" ")
}
const showInfo = (index) => {
    document.querySelector(".info-contaner").classList.toggle("visible")
    if (index) {
        document.getElementById("infoBook").innerHTML = `
            id :${allUsers[index].id} <br>
            name :${allUsers[index].name} <br>
            email :${allUsers[index].email} <br>
            phone :${allUsers[index].phone}<br> 
            city :${allUsers[index].address.city}<br>
            street :${allUsers[index].address.street}<br>
            suite :${allUsers[index].address.suite}<br>
            zipcode :${allUsers[index].address.zipcode}<br>
            website :${allUsers[index].website}<br>
            company name :${allUsers[index].company.name}<br>
            company catchPhrase :${allUsers[index].company.catchPhrase}<br>
            company bs :${allUsers[index].company.bs}
            `
    }
}
getUsers()