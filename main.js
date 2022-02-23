var cel = document.getElementById("cel");
var fah = document.getElementById("fah");

cel.addEventListener("input", function () {
    // celcius to fahrenheit 
    let a = this.value;
    let b = (a * 9 / 5) + 32;

    if (!Number.isInteger(b)) { // for ---> up to 4 decimal places
        b = b.toFixed(4); // toFixed() converts a number to a string, rounded to a specified number of decimals
    }

    fah.value = b;
});


fah.addEventListener("input", function () {
    // fahrenheit to celsius

    let c = this.value;
    let d = (c - 32) * 5 / 9

    if (!Number.isInteger(d)) { // for ---> up to 4 decimal places
        d = d.toFixed(4); // toFixed() converts a number to a string, rounded to a specified number of decimals
    }

    cel.value = d;
});