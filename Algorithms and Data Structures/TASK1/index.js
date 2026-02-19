const allProducts = [
    { id: "000", title: "Classic White T-Shirt", price: 25, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "001", title: "Blue Denim Jeans", price: 55, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "002", title: "Running Sneakers Pro", price: 89, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "003", title: "Leather Crossbody Bag", price: 120, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "004", title: "Luxury Gold Watch", price: 250, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "005", title: "Casual Cotton Hoodie", price: 45, stars: 3, photo: "https://picsum.photos/200/300" },
    { id: "006", title: "Summer Floral Dress", price: 65, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "007", title: "Brown Leather Boots", price: 110, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "008", title: "Vintage Sunglasses", price: 30, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "009", title: "Wool Winter Scarf", price: 20, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "010", title: "Silver Chain Necklace", price: 40, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "011", title: "Formal Black Suit", price: 300, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "012", title: "Yoga Leggings High-Waist", price: 35, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "013", title: "Canvas High-Top Shoes", price: 50, stars: 3, photo: "https://picsum.photos/200/300" },
    { id: "014", title: "Straw Sun Hat", price: 15, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "015", title: "Leather Bifold Wallet", price: 45, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "016", title: "Graphic Print Tee", price: 22, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "017", title: "Chino Slim-Fit Pants", price: 48, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "018", title: "Suede Loafers Men", price: 95, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "019", title: "Gold Hoop Earrings", price: 60, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "020", title: "Beanie Winter Cap", price: 12, stars: 3, photo: "https://picsum.photos/200/300" },
    { id: "021", title: "Waterproof Raincoat", price: 75, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "022", title: "Gym Training Shorts", price: 28, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "023", title: "Outdoor Hiking Sandals", price: 55, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "024", title: "Classic Aviator Glasses", price: 85, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "025", title: "Silk Evening Tie", price: 35, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "026", title: "Bomber Jacket Urban", price: 120, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "027", title: "Knitted Cardigan Sweater", price: 58, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "028", title: "Velvet Party Heels", price: 135, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "029", title: "Leather Waist Belt", price: 30, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "030", title: "Casual Polo Shirt", price: 38, stars: 3, photo: "https://picsum.photos/200/300" },
    { id: "031", title: "Cargo Utility Pants", price: 52, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "032", title: "Tennis White Sneakers", price: 65, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "033", title: "Canvas Laptop Backpack", price: 70, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "034", title: "Smart Digital Watch", price: 199, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "035", title: "Long Sleeve Turtleneck", price: 32, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "036", title: "Pleated Midi Skirt", price: 45, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "037", title: "Leather Ankle Boots", price: 125, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "038", title: "Pearl Stud Earrings", price: 80, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "039", title: "Adjustable Basecap", price: 18, stars: 3, photo: "https://picsum.photos/200/300" },
    { id: "040", title: "Oxford Dress Shirt", price: 55, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "041", title: "Linen Summer Trousers", price: 60, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "042", title: "Fli-Flops Beach Edition", price: 12, stars: 3, photo: "https://picsum.photos/200/300" },
    { id: "043", title: "Minimalist Leather Bag", price: 140, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "044", title: "Rose Gold Bracelet", price: 95, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "045", title: "Quilted Down Vest", price: 85, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "046", title: "Denim Jacket Classic", price: 78, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "047", title: "Slip-on Walking Shoes", price: 40, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "048", title: "Felt Fedora Hat", price: 42, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "049", title: "Travel Duffel Bag", price: 110, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "050", title: "V-Neck Knit Sweater", price: 49, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "051", title: "Striped Tank Top", price: 15, stars: 3, photo: "https://picsum.photos/200/300" },
    { id: "052", title: "Combat Boots Rugged", price: 130, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "053", title: "Blue Light Glasses", price: 28, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "054", title: "Chunky Gold Ring", price: 55, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "055", title: "Windbreaker Sport Jacket", price: 68, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "056", title: "Skinny Fit Black Jeans", price: 58, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "057", title: "Running Performance Socks", price: 10, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "058", title: "Leather Messenger Bag", price: 160, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "059", title: "Wool Blend Coat", price: 210, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "060", title: "Plaid Flannel Shirt", price: 35, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "061", title: "Bermuda Summer Shorts", price: 30, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "062", title: "High-Heel Sandals Gold", price: 90, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "063", title: "Patterned Silk Scarf", price: 25, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "064", title: "Square Frame Sunglasses", price: 45, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "065", title: "Sherpa Lined Jacket", price: 115, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "066", title: "Corduroy Straight Pants", price: 54, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "067", title: "Ballet Flats Comfort", price: 38, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "068", title: "Nylon Sport Backpack", price: 60, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "069", title: "Automatic Watch Steel", price: 320, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "070", title: "Oversized Knit Hoodie", price: 55, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "071", title: "Maxi Summer Skirt", price: 48, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "072", title: "Chelsea Boots Brown", price: 145, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "073", title: "Crystal Dangle Earrings", price: 75, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "074", title: "Bucket Safari Hat", price: 22, stars: 3, photo: "https://picsum.photos/200/300" },
    { id: "075", title: "Button-Down Denim Shirt", price: 42, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "076", title: "Activewear Training Top", price: 30, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "077", title: "Espadrilles Flat Shoes", price: 45, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "078", title: "Leather Key Organizer", price: 15, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "079", title: "Statement Pendant Necklace", price: 65, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "080", title: "Quilted Puffer Coat", price: 180, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "081", title: "Tracksuit Bottoms Elite", price: 40, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "082", title: "Basketball High-Tops", price: 120, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "083", title: "Polarized Fishing Glasses", price: 55, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "084", title: "Braided Leather Bracelet", price: 25, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "085", title: "Rainy Day Rubber Boots", price: 60, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "086", title: "Velvet Evening Blazer", price: 195, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "087", title: "Polka Dot Sun Dress", price: 58, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "088", title: "Memory Foam Slippers", price: 20, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "089", title: "Gym Headband Tech", price: 12, stars: 3, photo: "https://picsum.photos/200/300" },
    { id: "090", title: "Rugby Striped Jersey", price: 65, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "091", title: "Workwear Cargo Shorts", price: 38, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "092", title: "Platform Wedge Sandals", price: 85, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "093", title: "Infant Baby Onesie", price: 18, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "094", title: "Diamond Accent Ring", price: 450, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "095", title: "Waterproof Duffel Bag", price: 95, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "096", title: "Mesh Running Cap", price: 20, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "097", title: "Cashmere Winter Gloves", price: 45, stars: 5, photo: "https://picsum.photos/200/300" },
    { id: "098", title: "Floral Silk Tie", price: 30, stars: 4, photo: "https://picsum.photos/200/300" },
    { id: "099", title: "Professional Suit Briefcase", price: 210, stars: 5, photo: "https://picsum.photos/200/300" }
].sort((a, b) => {
    return a.title.localeCompare(b.title)
});

const elements = {
    body: document.querySelector(".body"),
    header: document.querySelector(".header"),
    searchContainer: document.querySelector(".search-contaner"),
    searchInput: document.querySelector("#wordSearch")
};

const showCards = () => {
    elements.body.innerHTML = allProducts.map((product) => {
        return product = `
        <div class="card" id="${product.id}">
                    <div class="image-contaner">
                        <img src="${product.photo}" alt="">
                    </div>
                    <div class="text-contaner">
                        <h3 class="title">${product.title}</h3>
                        <div class="praice">${product.price} <span class="curnce">$</span></div>
                    </div>
                    <div class="stars">
                        <i class="fa-solid fa-star ${product.stars >= 1 ? "active" : ""}"></i>
                        <i class="fa-solid fa-star ${product.stars >= 2 ? "active" : ""}"></i>
                        <i class="fa-solid fa-star ${product.stars >= 3 ? "active" : ""}"></i>
                        <i class="fa-solid fa-star ${product.stars >= 4 ? "active" : ""}"></i>
                        <i class="fa-solid fa-star ${product.stars >= 5 ? "active" : ""}"></i>
                    </div>
                </div>`
    }).join(" ")
}

const showSearsh = () => {
    elements.header.classList.toggle("search-active")
    elements.searchContainer.classList.toggle("search-active")
}

const searsh = () => {
    const wordSearch = elements.searchInput.value.toLowerCase().trim();
    const typeSearch = document.querySelector('input[name="search"]:checked').id;
    if (!wordSearch) return
    cleancard()
    if (typeSearch == "Binary") {
        BinarySearch(wordSearch)
    } else {
        LinearSearch(wordSearch)
    }
}

const BinarySearch = async (wordSearch) => {
    let low = 0;
    let high = allProducts.length - 1;
    let target = wordSearch
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = allProducts[mid].title.toLowerCase().trim();
        let midElement = document.getElementById(allProducts[mid].id);
        midElement.classList.add("search");
        await sleep();
        if (guess === target) {
            midElement.classList.replace("search", "found");
            return;
        }
        if (guess > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
        midElement.classList.remove("search");
    }
    console.log("not found");
}
const LinearSearch = async (wordSearch) => {
    for (let i = 0; i < allProducts.length; i++) {
        document.getElementById(allProducts[i].id).classList.add("search")
        await sleep()
        const guess = allProducts[i].title.toLowerCase().trim()
        if ( guess == wordSearch) {
            document.getElementById(allProducts[i].id).classList.replace("search", "found")
            break
        } else
            document.getElementById(allProducts[i].id).classList.remove("search")
    }
    console.log("not found")
}
const cleancard = () => {
    const cards = document.querySelectorAll(".card")
    cards.forEach((card) => {
        card.classList.remove("found", "search")
    })
}
const sleep = () => new Promise(resolve => setTimeout(resolve, 500));
showCards()
