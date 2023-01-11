
function calculateDiscount() {
    let amount = document.getElementById("amount").value;
    alert("Money left after theft: " + amount * 0.8 + " sek");
}

document.querySelector("button").addEventListener("click", calculateDiscount)