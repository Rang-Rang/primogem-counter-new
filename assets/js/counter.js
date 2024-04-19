const days = document.getElementById("days");
const welkins = document.getElementById("welkin");
const bp = document.getElementById("bp");
const total = document.getElementById("total");
const dayDisplay = document.getElementById("days-value");
const welkinDisplay = document.getElementById("welkin-value");
const bpDisplay = document.getElementById("bp-value");
const primogemInput = document.getElementById("primogemz");
const totalGachaOutput = document.getElementById("totalz");

total.innerHTML = 60;

let floor9Value = 0;
let floor10Value = 0;
let floor11Value = 0;
let floor12Value = 0;

let prevFloor9Value = 0;
let prevFloor10Value = 0;
let prevFloor11Value = 0;
let prevFloor12Value = 0;

function updatePrimogems() {
    let currentDays = parseInt(days.innerText) || 0;
    let totalPrimogems = currentDays * 60;

    totalPrimogems += floor9Value;
    totalPrimogems += floor10Value;
    totalPrimogems += floor11Value;
    totalPrimogems += floor12Value;

    if (welkins.checked) {
        totalPrimogems += currentDays * 90;
    }
    if (bp.checked) {
        totalPrimogems += 680;
    }

    total.innerHTML = totalPrimogems;
}

function incrementDays(value) {
    var currentDays = parseInt(days.innerText) || 0;
    var newDays = currentDays + value <= 730 ? currentDays + value : 730;
    days.innerText = newDays;
    onChangeHandler();
    updatePrimogems();
}

function decrementDays(value) {
    var currentDays = parseInt(days.innerText) || 0;
    var newDays = currentDays - value >= 1 ? currentDays - value : 1;
    days.innerText = newDays;
    onChangeHandler();
    updatePrimogems();
}

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        if (radio.name === "floor9") {
            floor9Value = parseInt(this.value);
        } else if (radio.name === "floor10") {
            floor10Value = parseInt(this.value);
        } else if (radio.name === "floor11") {
            floor11Value = parseInt(this.value);
        } else if (radio.name === "floor12") {
            floor12Value = parseInt(this.value);
        }
        updatePrimogems();
    });
});

const onChangeHandler = () => {
    let primogems = parseInt(days.innerText) * 60;
    if (isNaN(parseInt(days.innerText))) {
        total.innerHTML = "Invalid Input";
        return;
    }
    if (welkins.checked && bp.checked) {
        let totals = (primogems + 680) + (parseInt(days.innerText) * 90);
        total.innerHTML = totals;
        welkinDisplay.innerHTML = parseInt(days.innerText) + " Day";
        dayDisplay.innerHTML = parseInt(days.innerText);
        bpDisplay.innerHTML = "With";
        return;
    }
    if (welkins.checked) {
        let totals = primogems + (parseInt(days.innerText) * 90);
        total.innerHTML = totals;
        welkinDisplay.innerHTML = parseInt(days.innerText) + " Day";
        dayDisplay.innerHTML = parseInt(days.innerText);
        bpDisplay.innerHTML = "No";
        return;
    }
    if (bp.checked) {
        let totals = primogems + 680;
        total.innerHTML = totals;
        welkinDisplay.innerHTML = parseInt(days.innerText) + " Day";
        dayDisplay.innerHTML = parseInt(days.innerText);
        bpDisplay.innerHTML = "With";
        return;
    }
    total.innerHTML = primogems;
    dayDisplay.innerHTML = parseInt(days.innerText);
    welkinDisplay.innerHTML = "Without";
    bpDisplay.innerHTML = "No";
};

days.onchange = () => onChangeHandler();
welkins.onchange = () => onChangeHandler();
bp.onchange = () => onChangeHandler();

document.querySelector("#days + .work-request--information").innerHTML += `
<button class="btn-success" onclick="incrementDays(1)">+1</button>
<button class="btn-fail" onclick="decrementDays(1)">-1</button>
<button class="btn-success" onclick="incrementDays(10)">+10</button>
<button class="btn-fail" onclick="decrementDays(10)">-10</button>
`;

primogemInput.addEventListener("input", function () {
    var primogems = primogemInput.value.trim() !== "" ? parseInt(primogemInput.value) : 0;
    var gachaCount = Math.floor(primogems / 160);
    totalGachaOutput.textContent = gachaCount;
});

totalGachaOutput.textContent = 0;

function incrementPrimogems(value) {
    var currentValue = parseInt(primogemInput.value) || 0;
    primogemInput.value = currentValue + value;
    updateGachaCount();
}

function decrementPrimogems(value) {
    var currentValue = parseInt(primogemInput.value) || 0;
    var newValue = currentValue - value >= 0 ? currentValue - value : 0;
    primogemInput.value = newValue;
    updateGachaCount();
}

function updateGachaCount() {
    var primogems = parseInt(primogemInput.value) || 0;
    var gachaCount = Math.floor(primogems / 160);
    totalGachaOutput.textContent = gachaCount;
}

function resetDays() {
    days.innerText = "1";
    onChangeHandler();

    // Reset radio buttons to default (0 stars)
    document.getElementById("floor9_0").checked = true;
    document.getElementById("floor10_0").checked = true;
    document.getElementById("floor11_0").checked = true;
    document.getElementById("floor12_0").checked = true;

    // Reset the selected floor values to 0
    floor9Value = 0;
    floor10Value = 0;
    floor11Value = 0;
    floor12Value = 0;

    // Set welkin and battle pass checkboxes to default (unchecked)
    welkins.checked = false;
    bp.checked = false;
    updatePrimogems(); // Update primogems after resetting days
}

function resetPrimogems() {
    primogemInput.value = "0";
    updateGachaCount();
}
