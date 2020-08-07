// destructure use in object

const profile = {name:'stephen', age: 17, email:'gmail.com', phone:'01738-131604', address: 'dhaka'};

console.log(profile.address, profile.phone);
const phone = profile.phone;
const name = profile.name;
console.log(name, phone);
const {name, age, address} = profile;
console.log(name, age, address);

 
// destructure use in complex object


const complexObject = {
    name : 'stephen',
    info : {
        age : 17,
        address : 'Gazipur'
    }
}
const {address} = complexObject.info;
console.log(address);


// destructure use in array

const names = ['rani', 'bani', 'mohona', 'ahona'];
const [first, ...nextfriend] = names;
console.log( ...nextfriend);