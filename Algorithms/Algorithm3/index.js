let isStepping = false;
let stepResolver = null;

async function startFactorial() {
    const num = parseInt(document.getElementById('numberInput').value);
    const stackContainer = document.getElementById('stackContainer');
    const finalResult = document.getElementById('finalResult');

    // تنظيف الواجهة
    stackContainer.innerHTML = "";
    finalResult.innerHTML = "Calculating... <br> press Step";

    const result = await factorialVisual(num, stackContainer);
    finalResult.textContent = `Result: ${result}`;
}


async function factorialVisual(n, container) {
    // إنشاء مربع للدالة الحالية
    const box = document.createElement('div');
    box.className = 'recursive-box';
    box.innerHTML = `factorial(${n}) = ${n} * factorial(${n - 1})`;
    container.appendChild(box);

    // حالة التوقف (Base Case)
    if (n <= 1) {
        await waitStep(); // انتظر ضغطة زر Step
        box.innerHTML = `factorial(1) = 1`;
        box.style.background = "var(--green)";
        box.style.color = "var(--bg-dark)";
        return 1;
    }

    await waitStep(); // انتظر ضغطة زر Step

    // استدعاء متداخل (Recursive Call)
    // ننشئ حاوية داخلية للعرض المتداخل
    const innerContainer = document.createElement('div');
    box.appendChild(innerContainer);

    const subResult = await factorialVisual(n - 1, innerContainer);

    // بعد العودة من الدالة (Unwinding the stack)
    await waitStep();
    const currentResult = n * subResult;
    box.innerHTML = `factorial(${n}) = ${currentResult}`;

    return currentResult;
}

function waitStep() {
    return new Promise(resolve => {
        stepResolver = resolve;
    });
}

async function nextStep() {
    if (stepResolver) stepResolver();
}
///////////////////////////////////////////////////////////////////////
let mode = 'naive';
let memo = {};
let callCount = 0;
const sleep = (ms) => new Promise(res => setTimeout(res, ms));

function setMode(m) {
    mode = m;
    document.getElementById('naiveBtn').classList.toggle('active', m === 'naive');
    document.getElementById('memoBtn').classList.toggle('active', m === 'memo');
}

async function startFib() {
    const n = parseInt(document.getElementById('numInp').value) > 7 ? 7 : parseInt(document.getElementById('numInp').value);
    const tree = document.getElementById('tree');
    const stats = document.getElementById('stats');

    tree.innerHTML = "";
    stats.textContent = "";
    memo = {};
    callCount = 0;

    const result = await fibVisual(n, tree);
    stats.textContent = `انتهى! النتيجة: ${result} | إجمالي الاستدعاءات: ${callCount}`;
}

async function fibVisual(n, container) {
    callCount++;
    // إنشاء العنصر البصري
    const node = document.createElement('div');
    node.className = 'fib-node';
    node.innerHTML = `<div>fib(${n})</div>`;
    container.appendChild(node);

    await sleep(600);

    // الطريقة الجيدة: فحص الذاكرة
    if (mode === 'memo' && memo[n] !== undefined) {
        node.classList.add('cached');
        node.innerHTML = `<span class="cache-badge">من الذاكرة!</span><div>fib(${n}) = ${memo[n]}</div>`;
        return memo[n];
    }

    // حالة التوقف
    if (n <= 1) {
        node.classList.add('done');
        node.innerHTML = `<div>fib(${n}) = ${n}</div>`;
        return n;
    }

    // إنشاء حاوية للأبناء
    const childrenContainer = document.createElement('div');
    childrenContainer.className = 'children';
    node.appendChild(childrenContainer);

    // الاستدعاءات المتفرعة
    const res1 = await fibVisual(n - 1, childrenContainer);
    const res2 = await fibVisual(n - 2, childrenContainer);

    const final = res1 + res2;

    // حفظ في الذاكرة إذا كان الوضع جيد
    if (mode === 'memo') memo[n] = final;

    node.classList.add('done');
    node.innerHTML = `<div>fib(${n}) = ${final}</div>`;
    return final;
}


// /////////////////////////////////////////////////////
const sleep1 = (ms) => new Promise(res => setTimeout(res, ms));

async function startCountdown() {
    const n = parseInt(document.getElementById('countInput').value);
    const box = document.getElementById('numbersBox');
    const msg = document.getElementById('blastoffMsg');

    box.innerHTML = "";
    msg.style.display = "none";

    await countdownRecursive(n, box);

    await sleep1(500);
    msg.style.display = "inline-block";
}

async function countdownRecursive(n, container) {
    // حالة التوقف
    if (n <= 0) return;

    // طباعة الرقم الحالي (إنشاء المربع البنفسجي)
    const block = document.createElement('div');
    block.className = 'num-block';
    block.textContent = n;
    container.appendChild(block);

    // انتظار نصف ثانية قبل الاستدعاء التالي
    await sleep1(500);

    // الاستدعاء الذاتي
    await countdownRecursive(n - 1, container);
}