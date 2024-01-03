function maxTall(number){
    let largest = number[0];
    for(let i = 0; i < number.length; i++){
        const element = number[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const array = [110, 150, 98, 340, 50, 93, 500];
const result = maxTall(array);
console.log(result);