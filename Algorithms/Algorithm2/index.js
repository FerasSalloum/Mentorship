let array = [];
let isSorting = false;

function generateNewArray() {
    isSorting = false;
    array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 90) + 10);
    renderChart();
    addStep("🎲 تم توليد مصفوفة عشوائية جديدة.");
}

function renderChart(activeIndex = -1, minIndex = -1, sortedIndex = -1) {
    const container = document.getElementById("chartContainer");
    container.innerHTML = array.map((val, idx) => {
        let colorClass = "";
        if (idx <= sortedIndex) colorClass = "background: var(--green);";
        if (idx === activeIndex) colorClass = "background: var(--yellow);";
        if (idx === minIndex) colorClass = "background: var(--pink); box-shadow: 0 0 15px var(--pink);";

        return `<div class="bar" style="height: ${val * 2.5}px; ${colorClass}">
                    <span class="bar-value">${val}</span>
                </div>`;
    }).join('');
}

async function startSort() {
    if (isSorting) return;
    isSorting = true;
    let n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        addStep(`بدء دورة جديدة: نفترض أن ${array[i]} هو الأصغر في الموقع ${i}`, "var(--yellow)");
        renderChart(i, minIdx, i - 1);
        await wait();

        for (let j = i + 1; j < n; j++) {
            if (!isSorting) return;
            renderChart(j, minIdx, i - 1);
            addStep(`مقارنة ${array[j]} مع الأصغر الحالي ${array[minIdx]}`);
            await wait();

            if (array[j] < array[minIdx]) {
                minIdx = j;
                addStep(`وجدنا عنصر أصغر! الجديد هو ${array[minIdx]} في الموقع ${j}`, "var(--pink)");
                renderChart(j, minIdx, i - 1);
                await wait();
            }
        }

        if (minIdx !== i) {
            addStep(`تبديل ${array[i]} مع ${array[minIdx]}`);
            [array[i], array[minIdx]] = [array[minIdx], array[i]];
        }
        renderChart(-1, -1, i);
    }
    renderChart(-1, -1, n);
    addStep("✅ اكتمل الترتيب بنجاح!", " var(--green)");
    isSorting = false;
}

function wait() {
    const speed = document.getElementById("speedRange").value;
    return new Promise(resolve => setTimeout(resolve, 2100 - speed));
}

function addStep(text, color = "#94a3b8") {
    const container = document.getElementById("stepsContainer");
    const p = document.createElement("p");
    p.textContent = text;
    p.style.color = color;
    container.prepend(p);
}

function resetUI() {
    isSorting = false;
    generateNewArray();
}

// البدء التلقائي
generateNewArray();