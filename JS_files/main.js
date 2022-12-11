const input = document.getElementById("input");
const output = document.getElementById("output");
const header = document.getElementById("header");
const button = document.getElementById("button");
const extra = document.getElementById("extraHelp");
const extra2 = document.getElementById("extraHelp2");
var counter = 0;
var stafir = "";

const islenskOrd = [
    // 5 stafa orð
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
    "aflýs",
    
   // 2 og 1 stafa orð
    "að",
    "af",
    "ak",
    "al",
    "an",
    "ar",
    "as",
    "at",
    "ax",
    "áa",
    "ái",
    "ál",
    "ám",
    "án",
    "ár",
    "ás",
    "át",
    "bí",
    "bú",
    "bý",
    "bæ",
    "dá",
    "do",
    "dó",
    "dý",
    "eð",
    "ef",
    "eg",
    "ei",
    "ek",
    "el",
    "em",
    "en",
    "er",
    "es",
    "et",
    "á",
    "í",
    // 3 stafa orð
    "aða",
    "afa",
    "afi",
    "afl",
    "aga",
    "agg",
    "agi",
    "agl",
    "agn",
    "aís",
    "aka",
    "aki",
    "akk",
    "akt",
    "ala",
    "ali",
    "als",
    "alt",
    "ama",
    "ami",
    "aml",
    "amr",
    "amt",
    "ana",
    "ani",
    "ann",
    "ans",
    "apa",
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
    if (rndOrd.length <= 3) {
        rndLength = Math.floor(Math.random() * (rndOrd.length)) + 1;
    } else {
        rndLength = (Math.floor(Math.random() * 3) + 1);
    }
    extra.innerText = rndLength;
    extra2.innerText = rndOrd;
    rndStartingPoint = Math.floor(Math.random() * (rndOrd.length-rndLength));
    stafir = rndOrd.substring(rndStartingPoint, rndStartingPoint+rndLength);
    header.innerText = stafir;
});
