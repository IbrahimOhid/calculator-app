function RemoveCalculation(){
    document.getElementById("Result").value = "";
}

function Calculation(NewValue){
    document.getElementById("Result").value += NewValue;
}

function Equation(){
    var a = document.getElementById("Result").value;
    var b = eval(a);
    document.getElementById("Result").value = b;
}