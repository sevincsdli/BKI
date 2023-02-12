
let resultNumber = document.querySelector(".result-number");
let resultText = document.querySelector(".result-text");


let calculateBMI=()=>{
let weight = (document.getElementById("weight"));
let height = (document.getElementById("height"));

//  let pow=Math.pow(parseFloat(height.value),2);
//  let resultCalc=parseFloat(weight.value/pow);
resultCalc=(weight.value/(Math.pow(parseFloat(height.value),2)))    .toFixed(2);
   resultNumber.textContent=resultCalc;
if(isNaN(weight.value)|| isNaN(height.value)){
    alert('Enter number,please');
}
if(resultCalc<18.4){
    resultText.textContent='Under Weight';
}
if(resultCalc>18.5 && resultCalc<24.9){
    resultText.textContent='Normal';
}
if(resultCalc>25 && resultCalc>29.9){
    resultText.textContent='Upper Weight';
}
if (resultCalc>30){
    resultText.textContent='Obese';
}
    }


const resetBMI=()=>{
    weight.value=0;
    height.value=0;
    resultNumber.textContent='Enter your weight and height, show result!'
    resultText.textContent='';
}
