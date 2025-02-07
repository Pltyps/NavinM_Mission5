document.getElementById("btnCalc").addEventListener("click", function () {

    const hourlyRate = 30; // Your hourly rate
    const hours = document.getElementById("hours").value;

    // Validation to make sure a positive number is entered
    if (hours && hours > 0) {
        const totalCost = hourlyRate * hours;
        document.getElementById("total-cost").innerText = `$${totalCost.toFixed(2)}`;
    } else {
        alert("Please enter a positive number for hours.");
    }
});
