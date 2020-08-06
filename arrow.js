
// single parameter

const doubleIt = num => num*2;
const result = doubleIt(50);
console.log(result);

//multiple parameter

const add =(x, y) => x + y;
const result = add(40, 50);
console.log(result1);

// empty parameter

const give5 = () => 5;
const result2 = give5();
console.log(result2);

multiple line arrow

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;

}
const result = doMath(50, 20);
console.log(result);