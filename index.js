const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;

}

function clearDisplay(){
    display.value = "";
}

function deleteElement(){
    display.value = display.value.substring(0, display.value.length - 1);
}

function calculate(){

    let expression = display.value.replace('÷', '/');

    try{
        display.value = eval(expression); /* eval() NOT RECOMMENDED */
    }
    catch(error){
        display.value = "Invalid Format";
    }
    
}