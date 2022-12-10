const input = document.querySelector("input");
const submit = document.getElementById("submit");
const output = document.getElementById("output");

input.addEventListener('input', function(e) {
    output.innerHTML = e.target.value;
});

