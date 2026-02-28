// استخدام Polymorphism
const elemnts = {
    cardsContaner: document.getElementById("cardsContaner"),
    inputAmount: document.getElementById("amount"),
    inputPraec: document.getElementById("praec"),
    inputTitle: document.getElementById("title"),
    FormAdd: document.getElementById("formAdd"),
    edetScren: document.querySelector(".edet-scren"),
    saveBtn: document.getElementById("saveBtn"),
    titlEdet: document.getElementById("titlEdet"),
    praecEdet: document.getElementById("praecEdet"),
    amountEdet: document.getElementById("amountEdet"),
}

class Node {
    // استخدام Encapsulation
    #id
    constructor(title, price, amount,) {
        this.#id = Date.now()
        this.title = title
        this.price = price
        this.amount = amount
        this.next = null
        this.prev = null
    }
    get id() {
        return this.#id
    }
}
class LinkedList {
    // استخدام Encapsulation
    #head = null
    #tail = null
    append(title, price, amount) {
        const node = new Node(title, price, amount)
        if (!this.#head) {
            this.#head = node
            this.#tail = node
        } else {
            this.#tail.next = node
            node.prev = this.#tail
            this.#tail = node
        }
        app.removeRedo()
        app.addToUndo("ADD", node, null)
        return node
    }
    getNodeId(id) {
        let current = this.#head
        while (current) {
            if (current.id == id) {
                return current
            }
            current = current.next
        }
        return null
    }
    deletNode(node) {
        if (!node) {
            return
        }
        if (node == this.#head) {
            this.#head = node.next
            if (this.#head) {
                this.#head.prev = null
            }
        } else if (node == this.#tail) {
            this.#tail = node.prev
            if (this.#tail) {
                this.#tail.next = null
            }
        } else {
            node.prev.next = node.next
            node.next.prev = node.prev
        }
        app.removeRedo()
        app.addToUndo("DELET", node, { next: node.next, prev: node.prev })
        node.next = null
        node.prev = null
    }
    edetNode(node, title, price, amount) {
        app.removeRedo()
        app.addToUndo("EDET", node, { title: node.title, price: node.price, amount: node.amount })
        node.title = title
        node.price = price
        node.amount = amount
    }
    restoreNode(node, prev, next) {
        if (prev == null) {
            node.next = this.#head
            if (this.#head) {
                this.#head.prev = node;
            } else {
                this.#tail = node;
            }
            this.#head = node;
        } else if (next == null) {
            node.prev = this.#tail
            if (this.#tail) {
                this.#tail.next = node;
            } else {
                this.#head = node;
            }
            this.#tail = node
        } else {
            node.prev = prev;
            node.next = next;
            prev.next = node;
            next.prev = node;
        }
    }
    get head() {
        return this.#head;
    }
    get tail() {
        return this.#tail;
    }
}
// استخدام Abstraction
class AppFunction {
    #undoArray = []
    #redoArray = []
    constructor() {
        this.linkedList = new LinkedList()
    }
    addProdcte(title, price, amount) {
        this.linkedList.append(title, price, amount);
        this.showProdctes()
    }
    showProdctes() {
        let current = this.linkedList.head
        elemnts.cardsContaner.innerHTML = ""
        if (!current) {
            return
        }
        while (current) {
            elemnts.cardsContaner.innerHTML += `
            <div class="card" id="${current.id}">
                <p class="title">${current.title}</p>
                <p class="praec">${current.price}$</p>
                <p class="amout">${current.amount}</p>
                <div class="button-contaner">
                    <i class="fa-solid fa-circle-chevron-left" onclick="app.prevProdcte(${current.id})"></i>
                    <i class="fa-solid fa-circle-chevron-right" onclick="app.nextProdcte(${current.id})"></i>
                </div>
                    <div class="button-contaner">
                    <i class="fa-solid fa-pen-to-square" onclick="app.toggleEdet(${current.id})"></i>
                    <i class="fa-solid fa-trash"onclick="app.deletProdcte(${current.id})"></i>
                </div>
            </div>
        `
            current = current.next
        }
    }
    deletProdcte(id) {
        let prodcte = this.linkedList.getNodeId(id)
        if (!prodcte) {
            return
        }
        this.linkedList.deletNode(prodcte)
        this.showProdctes()
    }
    nextProdcte(id) {
        let current = this.linkedList.getNodeId(id)
        document.querySelectorAll(".card").forEach((card) => {
            card.classList.remove("active")
        })
        document.getElementById(current.next.id).classList.add("active")
    }
    prevProdcte(id) {
        let current = this.linkedList.getNodeId(id)
        document.querySelectorAll(".card").forEach((card) => {
            card.classList.remove("active")
        })
        document.getElementById(current.prev.id).classList.add("active")
    }
    toggleEdet(id) {
        elemnts.edetScren.classList.toggle("active")
        if (id) {
            elemnts.saveBtn.setAttribute("onclick", `app.saveEdet("${id}")`)
            const node = this.linkedList.getNodeId(id)
            elemnts.titlEdet.value = node.title
            elemnts.praecEdet.value = node.price
            elemnts.amountEdet.value = node.amount
        } else {
            elemnts.saveBtn.removeAttribute("onclick")
            elemnts.titlEdet.value = ""
            elemnts.praecEdet.value = ""
            elemnts.amountEdet.value = ""
        }
    }
    saveEdet(id) {
        const node = this.linkedList.getNodeId(id)
        const title = elemnts.titlEdet.value
        const price = elemnts.praecEdet.value
        const amount = elemnts.amountEdet.value
        this.linkedList.edetNode(node, title, price, amount)
        this.showProdctes()
        this.toggleEdet(null)
    }
    addToUndo(type, node, vales) {
        this.#undoArray.push({
            type: type,
            node: node,
            vales: vales
        })
    }
    addToredo(type, node, vales) {
        this.#redoArray.push({
            type: type,
            node: node,
            vales: vales
        })
    }
    undo() {
        const actchen = this.#undoArray.pop()
        if (!actchen) return
        if (actchen.type == "ADD") {
            this.addToredo("DELET", actchen.node, { prev: actchen.node.prev, next: actchen.node.next })
            this.linkedList.deletNode(actchen.node)
        } else if (actchen.type == "DELET") {
            this.linkedList.restoreNode(actchen.node, actchen.vales.prev, actchen.vales.next)
            this.addToredo("ADD", actchen.node, null)
        } else if (actchen.type == "EDET") {
            this.addToredo("EDET", actchen.node, { title: actchen.node.title, price: actchen.node.price, amount: actchen.node.amount })
            this.linkedList.edetNode(actchen.node, actchen.vales.title, actchen.vales.price, actchen.vales.amount)
        }
        this.showProdctes()
    }
    redo() {
        const actchen = this.#redoArray.pop()
        if (!actchen) return
        if (actchen.type == "ADD") {
            this.addToUndo("DELET", actchen.node, { prev: actchen.node.prev, next: actchen.node.next });
            this.linkedList.deletNode(actchen.node)
        } else if (actchen.type == "DELET") {
            this.addToUndo("ADD", actchen.node, null);
            this.linkedList.restoreNode(actchen.node, actchen.vales.prev, actchen.vales.next)
        } else if (actchen.type == "EDET") {
            this.addToUndo("EDET", actchen.node, { title: actchen.node.title, price: actchen.node.price, amount: actchen.node.amount });
            this.linkedList.edetNode(actchen.node, actchen.vales.title, actchen.vales.price, actchen.vales.amount)
        }
        this.showProdctes()
    }
    removeRedo() {
        this.#redoArray = []
    }
}
const app = new AppFunction();

elemnts.FormAdd.addEventListener("submit", (e) => {
    e.preventDefault()
    const title = elemnts.inputTitle.value;
    const price = elemnts.inputPraec.value;
    const amount = elemnts.inputAmount.value;
    app.addProdcte(title, price, amount)
    elemnts.FormAdd.reset()
})
app.showProdctes()