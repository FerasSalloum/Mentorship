const allBooks = [
    {
        title: "Neon Dreams",
        ather: "Author Cybe",
        type: "histor",
        pages: 150
    },
    {
        title: "Electric Shadows",
        ather: "Author Spark",
        type: "histor",
        pages: 200
    },
    {
        title: "Quantum Realms",
        ather: "Author Quark",
        type: "histor",
        pages: 300
    },
    {
        title: "Cosmic Light",
        ather: "Author Astro",
        type: "story",
        pages: 250
    },
    {
        title: "last seen",
        ather: "Author nina",
        type: "story",
        pages: 300
    },
    {
        title: "only white",
        ather: "Author kristin",
        type: "story",
        pages: 300
    },
]
const types = document.querySelectorAll(".books")
const info = document.getElementById("info")
let allPages = 0
allBooks.forEach((book) => {
    allPages += book.pages
    types.forEach((item) => {
        if (item.dataset.type == book.type) {
            item.innerHTML +=
                `<div class="book-contaner">
                        <div class="book">
                            <div class="cover front">
                            </div>
                            <div class="pages">
                                <p>${book.ather}</p>
                                <p>الصفحات ${book.pages}</p>
                            </div>
                            <div class="cover back"></div>
                            <div class="lift-cover">
                                <h2>${book.title}</h2>
                            </div>
                            <div class="top-cover"></div>
                        </div>
                    </div>`
        }
    })
})
info.innerHTML = `عدد الصفحات الكلي ${allPages} صفحة `
const books = document.querySelectorAll(".book").forEach((book) => {
    const front = book.getElementsByClassName("front")[0]
    book.addEventListener("mouseenter", () => {
        console.log(front);
        book.classList.add("go-out")
        book.classList.remove("go-in")
        front.classList.remove("front-close")
        front.classList.add("front-open")
    })
    book.addEventListener("mouseleave", () => {
        front.classList.remove("front-open")
        front.classList.add("front-close")
        book.classList.remove("go-out")
        book.classList.add("go-in")
    })
    
})