import Big from 'big.js';

function operate(numberOne,numberTwo,operation){
   let res=0
   let num1 = Big(numberOne)
   let num2 = Big(numberTwo) 
   switch(operator){
       case '+':
       res=num1 + num2
       break;
       case '-':
       res = num1-num2
       break;
       case '*':
       res = num1*num2
       break;
       case '/':
       res = num1/num2
       break;
       case '%':
       res = (num1*num2)/100
       break;
   }
   return res.toString;
}