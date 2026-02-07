let currentArray = [10, 20, 30, 40, 50, 60, 70, 80]; 
const arrayContainer = document.getElementById("arrayContainer");
const stepsContainer = document.getElementById("stepsContainer");
const finalStatus = document.getElementById("finalStatus");

function generateRandomArray() {
    const size = 10; // حجم المصفوفة
    let tempArray = [];
    for (let i = 0; i < size; i++) {
        tempArray.push(Math.floor(Math.random() * 100) + 1);
    }
    // الترتيب التصاعدي ضروري للـ Binary Search
    currentArray = tempArray.sort((a, b) => a - b);
    resetUI();
    addStep("🎲 تم توليد مصفوفة عشوائية جديدة مرتبة.", "#8b5cf6");
}

function renderArray() {
    arrayContainer.innerHTML = currentArray.map(val => `<div class="cell">${val}</div>`).join('');
}

function addStep(text, color = "#8ab4f8") {
    const p = document.createElement("p");
    p.textContent = text;
    p.style.color = color;
    p.style.borderBottom = "1px solid #1e293b";
    p.style.paddingBottom = "5px";
    stepsContainer.prepend(p);
}

async function startSearch() {
    const target = parseInt(document.getElementById("targetInput").value);
    const cells = document.querySelectorAll(".cell");
    let low = 0;
    let hige = currentArray.length - 1;

    if (isNaN(target)) {
        addStep("⚠️ يرجى إدخال رقم صحيح للبحث عنه", "#eab308");
        return;
    }

    stepsContainer.innerHTML = "";
    finalStatus.textContent = "جاري البحث...";
    finalStatus.style.color = "#0ea5e9";

    while (low <= hige) {
        let mid = Math.floor((low + hige) / 2);

        cells.forEach((c, i) => {
            c.classList.remove("active");
            if (i < low || i > hige) c.classList.add("ignored");
            else c.classList.remove("ignored");
        });

        cells[mid].classList.add("active");
        addStep(`فحص الفهرس ${mid}: القيمة الحالية ${currentArray[mid]}`);

        await new Promise(r => setTimeout(r, 1000));

        if (currentArray[mid] === target) {
            addStep(`🎉 وجدنا الرقم ${target} في الموقع ${mid}`, "#2ecc71");
            finalStatus.textContent = `✅ تم العثور على الرقم في الموقع ${mid}`;
            finalStatus.style.color = "#2ecc71";
            return;
        }

        if (currentArray[mid] > target) {
            addStep(`القيمة ${currentArray[mid]} أكبر من ${target}، ننتقل لليسار.`);
            hige = mid - 1;
        } else {
            addStep(`القيمة ${currentArray[mid]} أصغر من ${target}، ننتقل لليمين.`);
            low = mid + 1;
        }
    }

    addStep(`❌ الرقم ${target} غير موجود.`, "#e74c3c");
    finalStatus.textContent = "❌ لم يتم العثور على الرقم";
    finalStatus.style.color = "#e74c3c";
}

function resetUI() {
    renderArray();
    stepsContainer.innerHTML = '<p style="color: #64748b;">جاهز لبحث جديد...</p>';
    finalStatus.textContent = "";
}

// التشغيل الأولي
renderArray();