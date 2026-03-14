const editorElement = document.getElementById("editor-kecil");

const charCountElement = document.getElementById("hf");
const upperCountElement = document.getElementById("hb");
const lowerCountElement = document.getElementById("hk");

const btnUpper = document.getElementById("huruf-besar");
const btnLower = document.getElementById("huruf-kecil");

editorElement.addEventListener("input", (event) => {
    const text = event.target.value;

    charCountElement.textContent = text.length;

    let upper = 0;
    let lower = 0;

    for (let char of text) {
        if (char >= 'A' && char <= 'Z') {
            upper++;
        } else if (char >= 'a' && char <= 'z') {
            lower++;
        }
    }

    upperCountElement.textContent = upper;
    lowerCountElement.textContent = lower;
});

btnUpper.addEventListener("click", () => {
    const text = editorElement.value;
    editorElement.value = text.toUpperCase();
    editorElement.dispatchEvent(new Event("input"));
});

btnLower.addEventListener("click", () => {
    const text = editorElement.value;
    editorElement.value = text.toLowerCase();
    editorElement.dispatchEvent(new Event("input"));
});