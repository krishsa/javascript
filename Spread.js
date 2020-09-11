const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second); //old fashioned
console.log(combined);

const arr = [...first, ...second]; //spread operator
console.log(arr);

const arr1 = [...first, "a", "aa", ...second, "b", "bb"]; //spread operator combining external values
console.log(arr1);

//Clone an array
const clone = [...first];
console.log(clone);

//Spread operator in Objects
const firstObject = { name: "Krish" };
const secondObject = { job: "Software Engineer" };

const combineObject = { ...firstObject, ...secondObject };
console.log(combineObject);

//add properties to combine object
const combineObject1 = { ...firstObject, ...secondObject, location: "USA" };
console.log(combineObject1);

//Clone Object
const cloneObject = { ...firstObject };
console.log(cloneObject);
