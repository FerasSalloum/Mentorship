const allProduct = [
    {
        name: "lap",
        title: "حاسوب",
        info: " حاسوب مناسب لبرمجة و الالعاب",
        price: 2000,
    },
    {
        name: "phone",
        title: "هاتف",
        info: "هاتف منساب للالعاب",
        price: 1500,
    },
    {
        name: "charg",
        title: "شاحن",
        info: "شاحن يدعم الشحن السريع",
        price: 750,
    },
    {
        name: "specer",
        title: "سماعات",
        info: "سماعات بلوتوث ذات صوط رائع",
        price: 300,
    },
]
let broductshow = allProduct
const cardContaner = document.querySelector(".card-contaner")
const idetContaner = document.querySelector(".idet-card-contaner")
const closeEditModal = () => {
    idetContaner.innerHTML = ""
    idetContaner.setAttribute("style", "visibility: hidden;")
}
const showbroduct = () => {
    cardContaner.innerHTML = broductshow.map((item, index) => {
        return item = `<div class="card" data-product="${item.name}">
                <h2>${item.title}</h2>
                <p>${item.info}</p>
                <p>السعر: ${item.price}</p>
                <div class="button-contaner">
                <button onclick="iditeProduct(${index})" class="idet">تعديل</button>
                <button onclick="deleteProdect(${index})" class="dilit">حذف</button>
                </div>
                </div>`
    }).join(" ")

}
const iditeProduct = (index) => {
    idetContaner.setAttribute("style", "visibility: visible;")
    const broduct = broductshow[index]
    idetContaner.innerHTML = ` 
            <form class="idet-card" id="formIdit" >
                <i id="close-buton"  class="fa-solid fa-circle-xmark"></i>
                <input id="title" type="text" required value="${broduct.title}" placeholder="اسم المنتج">
                <input id="info" type="text" required value="${broduct.info}" placeholder="معلومات المنتج">
                <input id="praes" type="number" required min="0" value="${broduct.price}" placeholder="سعر المنتج">
                <button type="submit">حفظ</button>
            </form>
        `
    document.getElementById("formIdit").addEventListener("submit", (e) => {
        e.preventDefault()
        broductshow.map((item) => {
            if (item.name == broduct.name) {
                item.title = document.getElementById("title").value
                item.info = document.getElementById("info").value
                item.price = parseInt(document.getElementById("praes").value)
            }
        })
        closeEditModal()
        showbroduct()
    })
    document.getElementById("close-buton").addEventListener("click", (e) => {
        closeEditModal()
    })
}
const deleteProdect = (index) => {
    broductshow.splice(index, 1)
    showbroduct()
}
showbroduct()