const allProdacts = [
    {
        name: 1,
        sallre: 20,
    },
    {
        name: 2,
        sallre: 40,
    },
    {
        name: 3,
        sallre: 100,
    },
    {
        name: 4,
        sallre: 160,
    },
    {
        name: 5,
        sallre: 320,
    },
    {
        name: 6,
        sallre: 640,
    },
    {
        name: 7,
        sallre: 680,
    },
    {
        name: 8,
        sallre: 1360,
    },
    {
        name: 9,
        sallre: 2720,
    },
    {
        name: 10,
        sallre: 5440,
    },
]
const carousel = document.querySelector('.carousel');
const n = allProdacts.length;
const angle = 360 / n;
const tz = 300;

let currentRotation = 0;

allProdacts.forEach((prod, i) => {
    const item = document.createElement('div');
    item.className = 'carousel-item';

    item.style.transform = `rotateY(${i * angle}deg) translateZ(${tz}px)`;

    item.innerHTML = `
    <strong>منتج ${prod.name}</strong>
    <span>السعر: ${prod.sallre}$</span>
    <span>السعر بعد الضريبة: ${prod.sallre + (prod.sallre * 14 / 100)}جنية</span>
  `;
    carousel.appendChild(item);
});

document.getElementById('next').addEventListener('click', () => {
    currentRotation -= angle;
    carousel.style.transform = `rotateY(${currentRotation}deg)`;
});

document.getElementById('prev').addEventListener('click', () => {
    currentRotation += angle;
    carousel.style.transform = `rotateY(${currentRotation}deg)`;
});