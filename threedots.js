const ages =[12, 34, 43, 30];
const ages2 = [50, 25, 43, 56,];
const ages3 = [52, 35, 53, 35];
//const allAges = ages.concat(ages2).concat(ages3); // normal rules
const allAges2 = [...ages, ...ages2, ...ages3]; // spread operator

//console.log(allAges2);


const business = 630;
const minister = 650;
const shochip = 732;
const bigAmount =[630, 650, 732, 800];
const maximum = Math.max (...bigAmount);
//const maximum = (business, minister, shochip); // normal rules
console.log(maximum);