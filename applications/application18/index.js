const toEbook = () => {
    document.getElementById("size").classList.toggle("visible")
}
const showAddBook = () => {
    document.querySelector(".add-contaner").classList.toggle("visible")
    document.getElementById("title").value = "";
    document.getElementById("ather").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("info").value = "";
    document.getElementById("size").value = "";
}
const showinfo = (type, title) => {
    const info =
        document.querySelector(".info-contaner").classList.toggle("visible")
    if (type == "E") {
        document.getElementById("infoBook").textContent = EBooks.get(title).info
        return
    }
    document.getElementById("infoBook").textContent = NBooks.get(title).info
}
const NBooks = new Map
const EBooks = new Map
class Book {
    constructor(title, ather, pages, info, type) {
        this.type = type
        this.title = title
        this.ather = ather
        this.pages = pages
        this.info = info
    }
}
class EBook extends Book {
    constructor(title, ather, pages, info, type, size) {
        super(title, ather, pages, info, type)
        this.size = size
    }
}
document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()
    const checkbox = document.getElementById("Ebook")
    if (checkbox.checked) {
        const title = document.getElementById("title").value;
        const ather = document.getElementById("ather").value;
        const pages = document.getElementById("pages").value;
        const info = document.getElementById("info").value;
        const size = document.getElementById("size").value;
        const book = new EBook(title, ather, pages, info, "E", size)
        EBooks.set(book.title, book)
        showBooks()
        showAddBook()
        return
    }
    const title = document.getElementById("title").value;
    const ather = document.getElementById("ather").value;
    const pages = document.getElementById("pages").value;
    const info = document.getElementById("info").value;
    const book = new Book(title, ather, pages, info, "N")
    NBooks.set(book.title, book)
    showBooks()
    showAddBook()

})
const showBooks = () => {
    document.getElementById("NBooks").innerHTML = [...NBooks.values()].map((book) => {
        return book = `
        <div class="book">
            <h2>${book.title}</h2>
            <p>اسم المؤلف: ${book.ather}</p>
            <p>عدد الصفحات: ${book.pages}</p>
            <button onclick="showinfo('${book.type}','${book.title}')">عرض التفاصيل </button>
        </div>
        `
    }).join(" ")
    document.getElementById("EBooks").innerHTML = [...EBooks.values()].map((book) => {
        return book = `
        <div class="book">
            <h2>${book.title}</h2>
            <p>اسم المؤلف: ${book.ather}</p>
            <p>عدد الصفحات: ${book.pages}</p>
            <p>حجم الملف : ${book.size}</p>
            <button onclick="showinfo('${book.type}','${book.title}')">عرض التفاصيل </button>
        </div>
        `
    }).join(" ")
}
showBooks()
