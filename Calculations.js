var number1 = "";
var number2="";
var operator='';
var signOfNum1=1;
var signOfNum2=1;
var answer;
var operatorPicked=false;
var equalPicked=false;
var equalDealtWith=false;
function insertNumber(idNum){
    ifEqualPicked();
    if(operatorPicked==false){
        number1+=document.getElementById('button'+idNum).value;
        document.getElementById('num1').innerHTML="num1: "+number1;
    }
    else{
        number2+=document.getElementById('button'+idNum).value;
        document.getElementById('num2').innerHTML="num2: "+number2;
    }
    
}

function insertDecimal(){
    ifEqualPicked();
    if(operatorPicked==false){
        number1+=".";
        document.getElementById('num1').innerHTML="num1: "+number1;
    }
    else{
        number2+=".";
        document.getElementById('num2').innerHTML="num2: "+number2;
    }
    
}

function setOperator(op){
    ifEqualPicked();
    operatorPicked=true;
    operator=op;
    document.getElementById('operator').innerHTML=operator;
}

function changeSign(){
    ifEqualPicked();
    if(operatorPicked==false){
        signOfNum1*=-1;
        document.getElementById('num1').innerHTML="num1: -"+number1;
    }
    else{
        signOfNum2*=-1;
        document.getElementById('num2').innerHTML="num1: -"+number2;
    }
    
}

function calculate(){
    equalDealtWith=false;
    var firstNumber=parseFloat(number1);
    var secondNumber=parseFloat(number2);
    firstNumber*=signOfNum1;
    secondNumber*=signOfNum2;
    switch(operator){
        case '+':
            answer=firstNumber+secondNumber;
            break;
        case '-':
            answer=firstNumber-secondNumber;
            break;
        case '*':
            answer=firstNumber*secondNumber;
            break;
        case '/':
            answer=firstNumber/secondNumber;
            break;
        }
        document.getElementById('calculation').innerHTML="calculation: "+answer;
        equalPicked=true;
}

function clearEverything(){
    number1 = "";
    number2="";
    operator='';
    signOfNum1=1;
    signOfNum2=1;
    operatorPicked=false;
    equalPicked=false;
    document.getElementById('num1').innerHTML="num1: ";
    document.getElementById('num2').innerHTML="num2: ";
    document.getElementById('operator').innerHTML="operator: ";
    document.getElementById('calculation').innerHTML="calculation: ";
}

function deleteNumber(){
    if(operatorPicked==false){
        if(number1.length>0){
            number1=number1.substring(0,number1.length-1);
            document.getElementById('num1').innerHTML="num1: "+number1;
        }
    }
    else{
        if(number2.length>0){
            number2=number2.substring(0,number2.length-1);
            document.getElementById('num2').innerHTML="num2: "+number2;
        }
    }
}
function ifEqualPicked(){
    if(equalDealtWith==false){
        if(equalPicked){
            number1=""+answer;
            number2="";
            document.getElementById('num1').innerHTML="num1: "+number1;
            document.getElementById('num2').innerHTML="num2: "+number2;
        }
        equalDealtWith=true;
    }
}