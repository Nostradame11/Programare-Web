/*
// Sarcina 1
let a = prompt('Число a =', 0);
let b = prompt('Число b =', 0);
let even = 0;

    for (let i = a; i <= b; i++) {
        if (i % 2 == 0)
        even += 1;
    }
alert(even);
*/

/*
//Sarcina 2(1 способ):
let n = prompt('Число n', 0);
if (n > 0 && n <=9){ 
    alert("1");
} else if (n < 0 && n >= -9){ 
    alert("-1");
} else {
    alert("Error");
}
*/
/*
//Sarcina 2 (2 способ):
let n = prompt('Число n', 0);
let message = (n > 0 && n <=9) ? '1' :
(n < 0 && n >= -9) ? '-1' :
'Error';
alert(message);
*/

//Sarcina 3
/*
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classic";
alert( styles.shift() );
styles.unshift("Rap", "Reggy");
*/