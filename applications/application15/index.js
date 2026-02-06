const textInput = document.getElementById("text");
const password = () => {
    const result = textInput.value.trim().match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S{6,}$/g);
    show(result ? result[0] : null);
}
const email = () => {
    const result = textInput.value.trim().match(/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/);
    show(result ? result[0] : null);
}
const cleanText = () => {
    const text = textInput.value.trim()
        .replace(/\s+/g, ' ')
        .replace(/[^\w\u0600-\u06FF ]/g, '');
    show(text);
}
const phone = () => {
    const result = textInput.value.trim().match(/(?:\+?\d{1,3})?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g);
    show(result ? result[0] : null);
}

const show = (text) => {
    const messageElement = document.getElementById("messge");
    if (text) {
        messageElement.textContent = `تم قبول النص: ${text}`;
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "تحقق من أن المدخلات تحتوي على المطلوب (ملاحظة: كلمة المرور تحتاج احرف كبير ورقم)";
        messageElement.style.color = "red";
    }
}