function smallNumber(number){
    let smallest = number[0];
    for(let i = 0; i < number.length; i++){
        const element = number[i];
        if(element < smallest){
            smallest = element;
        }
    }
    return smallest;
}

const array = [110, 150, 98, 340, 50, 93, 500];
const result = smallNumber(array);
console.log(result);