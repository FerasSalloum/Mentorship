const inputRange = document.getElementById("range")
const filterButton = document.getElementById("filterButton")
const prodactsContaner = document.getElementById("prodactsContaner")
const allProdacts = [
    {
        name: 1,
        sallre: 20
    },
    {
        name: 2,
        sallre: 40
    },
    {
        name: 3,
        sallre: 80
    },
    {
        name: 4,
        sallre: 160
    },
    {
        name: 5,
        sallre: 320
    },
    {
        name: 6,
        sallre: 340
    },
    {
        name: 7,
        sallre: 680
    },
    {
        name: 8,
        sallre: 1360
    },
    {
        name: 9,
        sallre: 2720
    },
    {
        name: 10,
        sallre: 5440
    },
]
let filterprodacts = []

const showProdect = () => {
    prodactsContaner.innerHTML = ""
    const maxPraes = parseInt(inputRange.value)
    if (!maxPraes || maxPraes == 0) {
        filterprodacts = allProdacts
    } else {
        filterprodacts = allProdacts.filter((item) =>  item.sallre <= maxPraes )
    }
    console.log(filterprodacts);
    
    filterprodacts.forEach((item) => {
        const prodact = document.createElement("div")
        const prodactH3 = document.createElement("h3")
        const prodactParagraph = document.createElement("p")
        prodact.classList.add("prodact")
        prodactH3.textContent = `المنتج: ${item.name}`
        prodactParagraph.textContent = `السعر: ${item.sallre}`
        prodact.appendChild(prodactH3)
        prodact.appendChild(prodactParagraph)
        prodactsContaner.appendChild(prodact)
    })
}
showProdect()
filterButton.addEventListener("click",showProdect)