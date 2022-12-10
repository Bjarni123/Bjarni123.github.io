const input = document.getElementById("input");
const submit = document.getElementById("submit");
const output = document.getElementById("output");

const islenskOrd = [
    "aðali",
    "aðall",
    "aðals",
    "aðila",
    "aðild",
    "aðili",
    "aðlar",
    "aðrar",
    "aðrir",
    "aðsig",
    "aðtal",
    "afana",
    "afann",
    "afans",
    "afart",
    "afbað",
    "afbar",
    "afber",
    "afbið",
    "afboð",
    "afbrá",
    "afbær",
    "afdal",
    "afgas",
    "afhús",
    "afinn",
    "afkró",
    "aflað",
    "aflag",
    "aflar",
    "aflát",
    "aflið",
    "aflir",
    "aflóa",
    "aflýs"
]

/*
input.addEventListener('input', (e) => {
    output.innerText = input.value;
    if (input.value === '') {
        output.innerText = 'Whatup';
    }
});
*/

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (input.value === '') {
            output.innerText = 'Whatup';
        } else {
            for (let i = 0; i < islenskOrd.length; i++) {
                if (input.value.toLowerCase() === islenskOrd[i]) {
                    output.innerText = 'That is a word';
                    break;
                } else {
                    output.innerText = 'That is not a word';
                }
            }
        }
    }
});