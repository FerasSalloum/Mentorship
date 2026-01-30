const allProduct = [
    {
        name: "مقلاة",
        type: "home",
        praese: 1200,
    },
    {
        name: "سكين",
        type: "home",
        praese: 200,
    },
    {
        name: "لوح  تقطيع",
        type: "home",
        praese: 500,
    },
    {
        name: "حافظة طعام",
        type: "home",
        praese: 700,
    },
    {
        name: "ابريق",
        type: "home",
        praese: 2500,
    },
    {
        name: "لمصة ",
        type: "ilctrec",
        praese: 200,
    },
    {
        name: "شاحن",
        type: "ilctrec",
        praese: 1350,
    },
    {
        name: "مروحة",
        type: "ilctrec",
        praese: 4000,
    },
    {
        name: "براد",
        type: "ilctrec",
        praese: 15000,
    },
    {
        name: "غسالة",
        type: "ilctrec",
        praese: 10000,
    },
    {
        name: "بيض",
        type: "food",
        praese: 1750,
    },
    {
        name: "سكر",
        type: "food",
        praese: 150,
    },
    {
        name: "رز",
        type: "food",
        praese: 150,
    },
    {
        name: "سمك",
        type: "food",
        praese: 2000,
    },
    {
        name: "لحم",
        type: "food",
        praese: 2500,
    },
    {
        name: "مسحوق غسيل",
        type: "clean",
        praese: 1750,
    },
    {
        name: "صابون",
        type: "clean",
        praese: 100,
    },
    {
        name: "سائل صحون",
        type: "clean",
        praese: 200,
    },
    {
        name: "شامبو",
        type: "clean",
        praese: 400,
    },
    {
        name: "كلور",
        type: "clean",
        praese: 250,
    },
]
let state = {
    sort: "UP",
    type: "all",
    price: "allPraes"
};

const filterAndRender = () => {
    let result = allProduct.filter(item => {
        const priceMatch =
            state.price === "low" ? item.praese < 1000 :
                state.price === "mideom" ? (item.praese >= 1000 && item.praese < 2000) :
                    state.price === "hig" ? item.praese >= 2000 : true;
        const typeMatch = state.type === "all" || item.type === state.type;
        return priceMatch && typeMatch;
    });
    result.sort((a, b) => state.sort === "UP" ? a.praese - b.praese : b.praese - a.praese);
    render(result);
    updateUI();
};
const render = (items) => {
    productContaner.innerHTML = items.map(item => `
        <div class="product">
            <h3>${item.name}</h3>
            <p>السعر: ${item.praese} جنيه</p>
        </div>
    `).join('');
};
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const { category, value } = btn.dataset;
        state[category] = value;
        filterAndRender();
    });
});
const updateUI = () => {
    document.querySelectorAll('.filter-btn button').forEach(el => {
        el.classList.remove('activ-UP', 'activ-DOWN', 'swing-right-fwd');
    });
    document.querySelectorAll('.filter-btn ').forEach(el => {
        el.classList.remove('activ-UP', 'activ-DOWN', 'swing-right-fwd');
    });
    document.getElementById(state.type).classList.add('swing-right-fwd');
    document.getElementById(state.price).classList.add('swing-right-fwd');
    const activeSort = document.getElementById(state.sort);
    activeSort.classList.add(`activ-${state.sort}`);
    document.getElementById(state.type).classList.add('swing-right-fwd');
    document.getElementById(state.price).classList.add('swing-right-fwd');
};
filterAndRender();
