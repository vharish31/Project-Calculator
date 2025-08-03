function display(value) {
    document.getElementById("display").value += value;
}

function AC() {
    document.getElementById("display").value = "";
}

function DEL() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);

        document.getElementById("display").value = result;
    } catch {
        alert("Invalid expression!");
    }
}
