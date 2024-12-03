var calcDisplay = ""

function btnClick(e) {
    if(e == "1" || e == "2" || e == "3" || e == "4" || e == "/" 
        || e == "5" || e == "6" || e == "7" || e == "*"){
        if(e == "AC"){
                calcDisplay = ""
        }else{
            console.log(e)
            calcDisplay += e
        }
        document.getElementById("display").value = calcDisplay
    }else{
        console.log("input harus berupa angka dan simbol")
    }
}

document.getElementById("display").addEventListener('input', 
function displayChange(){
    console.log(this.value)
    let e = this.value

    // regex
    let chars = /^[0-9]+$/

    if(chars.test(e)){
        console.log("digits")
    }else{
        alert("not digits")
    }
    
})