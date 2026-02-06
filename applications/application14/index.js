let users = new Set
let products = new Map

document.querySelector(".add-user").addEventListener("submit", (e) => {
    e.preventDefault()
    users.add(document.getElementById("userName").value)
    showUser()
})
const showUser = () => {
    document.querySelector(".users").innerHTML = [...users].map((user) => {
        return user = ` 
        <div class="user">
            <p>${user}</p>
            <i onclick="deletUser('${user}')" class="fa-solid fa-trash-can"></i>
        </div>
    `
    }).join(" ")
}
const deletUser = (user) => {
    users.delete(user)
    showUser()
}

document.querySelector(".add-product").addEventListener("submit", (e) => {
    e.preventDefault()
    products.set(document.getElementById("productName").value, { "praice": document.getElementById("productPraice").value, "quantity": document.getElementById("productQuantity").value })
    showProducts()
})
const showProducts = () => {
    document.querySelector(".products").innerHTML = [...products.keys()].map((product) => {
        return product = ` 
        <div class="product">
                <p>سم المنتج:${product} , سعر المنتج:${products.get(product).praice} جنية ,الكمية المتوفرة:${products.get(product).quantity}</p>
                <i onclick="deletProduct('${product}')"  class="fa-solid fa-trash-can"></i>
        </div>
    `
    }).join(" ")
}
const deletProduct = (product) => {
    products.delete(product)
    showProducts()
} 