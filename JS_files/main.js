const input = document.getElementById("input");
const output = document.getElementById("output");
const header = document.getElementById("header");
const button = document.getElementById("button");
const extra = document.getElementById("extraHelp");
var counter = 0;
var stafir = "";

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

input.addEventListener('input', (e) => {
    if (input.value === '') {
        output.innerText = 'Whatup';
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (input.value === '') {
            output.innerText = 'Whatup';
        } else {
            for (let i = 0; i < islenskOrd.length; i++) {
                if (input.value.toLowerCase() === islenskOrd[i] && input.value.toLowerCase().includes(stafir)) {
                    output.innerText = 'That is a word';
                    break;
                } else {
                    output.innerText = 'That is not a word';
                }
            }
        }
    }
});

button.addEventListener('click', (e) => {
    rndOrd = islenskOrd[Math.floor(Math.random() * islenskOrd.length)];

    rndNumer2 = Math.floor(Math.random() * (rndOrd.length-1));
    stafir = rndOrd.substring(rndNumer2, rndNumer2+2);
    header.innerText = stafir;
});
