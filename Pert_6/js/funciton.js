// Fungsi cara biasa
function caraBiasa() { 
    console.log("Hello World!");
}

// Fungsi dengan ekspresi
var caraExpresi = function() { 
    console.log("Ini Cara Expression"); 
}

// Fungsi dengan tanda panah 
var caraTandaPanah = () => { 
    console.log("Ini Cara Big Arrow"); 
}

var Add = (num1, num2) => {
    return num1+num2;
}

caraExpresi();
caraTandaPanah();
var hasil = Add(3,5);
console.log(hasil);

