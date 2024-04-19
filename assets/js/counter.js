const days = document.getElementById("days");
const welkins = document.getElementById("welkin");
const bp = document.getElementById("bp");
const count = document.getElementById("count");
const total = document.getElementById("total");
const dayDisplay = document.getElementById("days-value");
const welkinDisplay = document.getElementById("welkin-value");
const bpDisplay = document.getElementById("bp-value");

// Script for Gacha Counter
const primogemInput = document.getElementById("primogemz");
const totalGachaOutput = document.getElementById("totalz");

total.innerHTML = 60;

function isReallyNumber(data) {
    return typeof data === "number" && !isNaN(data);
}

const onChangeHandler = () => {
    let primogems = parseInt(days.innerText) * 60; // Mengambil nilai dari <span> dengan ID days
    if (isNaN(parseInt(days.innerText))) { // Memeriksa apakah nilai yang diambil adalah angka atau bukan
        total.innerHTML = "Invalid Input";
        return;
    }
    if (welkins.checked == true && bp.checked == true) {
        let totals = (primogems + 680) + (parseInt(days.innerText) * 90); // Mengubah days.value menjadi parseInt(days.innerText)
        total.innerHTML = totals;
        welkinDisplay.innerHTML = parseInt(days.innerText) + " Day"; // Mengubah days.value menjadi parseInt(days.innerText)
        dayDisplay.innerHTML = parseInt(days.innerText); // Mengubah days.value menjadi parseInt(days.innerText)
        bpDisplay.innerHTML = "With";
        return;
    }
    if (welkins.checked == true) {
        let totals = primogems + (parseInt(days.innerText) * 90); // Mengubah days.value menjadi parseInt(days.innerText)
        total.innerHTML = totals;
        welkinDisplay.innerHTML = parseInt(days.innerText) + " Day"; // Mengubah days.value menjadi parseInt(days.innerText)
        dayDisplay.innerHTML = parseInt(days.innerText); // Mengubah days.value menjadi parseInt(days.innerText)
        bpDisplay.innerHTML = "No";
        return;
    }
    if (bp.checked == true) {
        let totals = primogems + 680;
        total.innerHTML = totals;
        welkinDisplay.innerHTML = parseInt(days.innerText) + " Day"; // Mengubah days.value menjadi parseInt(days.innerText)
        dayDisplay.innerHTML = parseInt(days.innerText); // Mengubah days.value menjadi parseInt(days.innerText)
        bpDisplay.innerHTML = "With";
        return;
    }
    total.innerHTML = primogems;
    dayDisplay.innerHTML = parseInt(days.innerText); // Mengubah days.value menjadi parseInt(days.innerText)
    welkinDisplay.innerHTML = "Without";
    bpDisplay.innerHTML = "No";
};

days.onchange = () => onChangeHandler();
welkins.onchange = () => onChangeHandler();
bp.onchange = () => onChangeHandler();

function incrementDays(value) {
    var currentDays = parseInt(days.innerText) || 0;
    var newDays = currentDays + value <= 730 ? currentDays + value : 730;
    days.innerText = newDays;
    onChangeHandler();
}

function decrementDays(value) {
    var currentDays = parseInt(days.innerText) || 0;
    var newDays = currentDays - value >= 1 ? currentDays - value : 1;
    days.innerText = newDays;
    onChangeHandler();
}


document.querySelector("#days + .work-request--information").innerHTML += `
<button class="btn-success" onclick="incrementDays(1)">+1</button>
<button class="btn-fail" onclick="decrementDays(1)">-1</button>
<button class="btn-success" onclick="incrementDays(10)">+10</button>
<button class="btn-fail" onclick="decrementDays(10)">-10</button>
`;

primogemInput.addEventListener("input", function () {
    var primogems = primogemInput.value.trim() !== "" ? parseInt(primogemInput.value) : 0; // Jika input kosong, set nilai default ke 0
    var gachaCount = Math.floor(primogems / 160);
    totalGachaOutput.textContent = gachaCount;
});

// Initial calculation
totalGachaOutput.textContent = 0; // Set nilai default untuk gacha counter saat halaman dimuat

function incrementPrimogems(value) {
    var primogemInput = document.getElementById("primogemz");
    var currentValue = parseInt(primogemInput.value) || 0;
    primogemInput.value = currentValue + value;
    updateGachaCount();
}

function decrementPrimogems(value) {
    var primogemInput = document.getElementById("primogemz");
    var currentValue = parseInt(primogemInput.value) || 0;
    var newValue = currentValue - value >= 0 ? currentValue - value : 0;
    primogemInput.value = newValue;
    updateGachaCount();
}

function updateGachaCount() {
    var primogemInput = document.getElementById("primogemz");
    var totalGachaOutput = document.getElementById("totalz");
    var primogems = parseInt(primogemInput.value) || 0;
    var gachaCount = Math.floor(primogems / 160);
    totalGachaOutput.textContent = gachaCount;
}

function resetDays() {
    days.innerText = "1"; // Mengatur nilai days kembali ke 1
    onChangeHandler(); // Memanggil onChangeHandler untuk memperbarui tampilan total
}

function resetPrimogems() {
    primogemInput.value = "0"; // Access the previously defined primogemInput directly
    updateGachaCount(); // Call the updateGachaCount function to update the total gacha
}
