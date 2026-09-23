let outputNum = document.getElementById("output");

/*Function to know if the output is negative (red) or positive*/
function isResultRed(){
    if(Number(outputNum.innerHTML) < 0){
        outputNum.style.color = "red";
    }
    else{
        outputNum.style.color = "#F1DEC9";
    }
}

/*Function for addition*/
function doAdd(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    document.getElementById("output").innerHTML = `${num1 + num2}`;
    isResultRed();
}

/*Function for subtraction*/
function doSubtract(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    document.getElementById("output").innerHTML = `${num1 - num2}`;
    isResultRed();
}

/*Function for multiplication*/
function doMultiply(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    document.getElementById("output").innerHTML = `${num1 * num2}`;
    isResultRed();
}

/*Function for division*/
function doDivide(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    document.getElementById("output").innerHTML = `${num1 / num2}`;
    isResultRed();
}

/*Function for exponential*/
function doPower() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = 1;
    for (let i = 0; i < num2; i++) {
        result *= num1;
    }
    document.getElementById("output").innerHTML = `${result}`;
    isResultRed();
}

/*Function for clear inputs and outputs*/
function doClear(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("output").innerHTML = "";
}