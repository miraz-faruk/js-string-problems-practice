function maxNumber(num1, num2, num3){
    const result = Math.max(num1, num2, num3);
    return result;
}

const number1 = 10;
const number2 = 50;
const number3 = 35;

const ans = maxNumber(number1, number2, number3);
console.log('Maximum number is:',ans);

function minNumber(num1, num2, num3){
    const result = Math.min(num1, num2, num3);
    return result;
}


const answer = minNumber(number1, number2, number3);
console.log('Minimum number is:',answer);
