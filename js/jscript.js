

function calculateTips(){
    // grab the values
    const bills = document.getElementById("billamt").value;
    const quality = document.getElementById("quality").value;
    const peopletotal = document.getElementById("amountNo").value;

    // input validation
    if(bills === '' || quality == 0){
        alert("please enter value");
        return;
    }

    // check if the value is empty, equal or less than 1
    if(peopletotal === '' || peopletotal <= 1){
        peopletotal = 1;
        document.getElementById('each').style.display = "none";
    } else {
        document.getElementById('each').style.display = "block";
    }

    // calculate tips
    let total = (bills * quality) / peopletotal;

    // round total to 2 decimals
    total = Math.round(total * 100) / 100;

    // have 2 digits after decimal
    total = total.toFixed(2);

    console.log(total);

    //display the tip
    document.getElementById('billtotal').style.display = "flex";
    document.getElementById('tip').innerText = total;

}

    // hide the info on load
    document.getElementById('billtotal').style.display = "none";
    document.getElementById('each').style.display = "none";

    document.getElementById('calculate').onclick = function() {
        calculateTips();
    }