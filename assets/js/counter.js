const days = document.getElementById("days");
const welkins = document.getElementById("welkin");
const bp = document.getElementById("bp");
const count = document.getElementById("count");
const total = document.getElementById("total");
const dayDisplay = document.getElementById("days-value");
const welkinDisplay = document.getElementById("welkin-value");
const bpDisplay = document.getElementById("bp-value");

total.innerHTML = 60;

function isReallyNumber(data) {
	return typeof data === "number" && !isNaN(data);
}

const onChangeHandler = () => {
	let primogems = days.value * 60;
	if (days.value == "" || isReallyNumber(days.value)) {
		total.innerHTML = "Invalid Input";
		return;
	}
	if (welkins.checked == true && bp.checked == true) {
		let totals = (primogems + 680) + (days.value * 90);
		total.innerHTML = totals;
		welkinDisplay.innerHTML = days.value + " Day";
		dayDisplay.innerHTML = days.value;
		bpDisplay.innerHTML = "With";
		return;
	}
	if (welkins.checked == true) {
		let totals = primogems + (days.value * 90);
		total.innerHTML = totals;
		welkinDisplay.innerHTML = days.value + " Day";
		dayDisplay.innerHTML = days.value;
		bpDisplay.innerHTML = "No";
		return;
	}
	if (bp.checked == true) {
		let totals = primogems + 680;
		total.innerHTML = totals;
		welkinDisplay.innerHTML = days.value + " Day";
		dayDisplay.innerHTML = days.value;
		bpDisplay.innerHTML = "With";
		return;
	}
	total.innerHTML = primogems;
	dayDisplay.innerHTML = days.value;
	welkinDisplay.innerHTML = "Without";
	bpDisplay.innerHTML = "No";
};

days.onchange = () => onChangeHandler();
welkins.onchange = () => onChangeHandler();
bp.onchange = () => onChangeHandler();


// Script for Gacha Counter
const primogemInput = document.getElementById("primogemz");
const totalGachaOutput = document.getElementById("totalz");

primogemInput.addEventListener("input", function() {
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
  