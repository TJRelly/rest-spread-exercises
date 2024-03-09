// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...nums) => {
  return nums.filter((num) => num % 2 === 0);
};

console.log(filterOutOdds(1, 2, 3, 4));

// ## **findMin**

// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

// ```jsx

const findMin = (...args) => Math.min(...args);

console.log(findMin(1, 4, 12, -3)); // -3
console.log(findMin(1, -1)); // -1
console.log(findMin(3, 1)); // 1

// ## **mergeObjects**

// Write a function called ***mergeObjects*** that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// ```jsx
// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
// ```

const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })); // {a:1, b:2, c:3, d:4}

// ## **doubleAndReturnArgs**

// Write a function called ***doubleAndReturnArgs*** which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

// ```jsx
// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]
// ```

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((num) => num * 2),
];

console.log(doubleAndReturnArgs([1,2,3],4,4)) // [1,2,3,8,8]
console.log(doubleAndReturnArgs([2],10,4)) // [2, 20, 8]

/*## **Slice and Dice!**

For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

Make sure that you are always returning a new array or object and not modifying the existing inputs.

```jsx
/** remove a random element in the items array
and return a new array without that item. */
const colors = ["red", "blue", "green", "orange"]
const nums = [1, 2, 3, 4]

const removeRandom = (items) => {
    const randIdx = Math.floor(Math.random() * items.length)
    return [...items.slice(0, randIdx), ...items.slice(randIdx + 1)]
}

console.log(removeRandom(colors))

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2]

console.log(extend(colors, nums))

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    return {...obj, [key]: val}
}

console.log(addKeyVal(colors, "favorite", "purple"))

/** Return a new object with a key removed. */
const ratings = {
    basketball: 8, 
    baseball: 4, 
    gymnastics: 10
}

const ratings2 = {
    soccer: 6, 
    golf: 9, 
    tennis: 5
}

const removeKey = (obj, key) => {
    const newObj = {...obj}
    delete newObj[key]
    return newObj
}

console.log(removeKey(ratings, "basketball"))
console.log(ratings)
/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2}
}

console.log(combine(ratings, ratings2))

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    newObj = {...obj, [key]: val}
    return newObj
}

console.log(ratings)
console.log(update(ratings, "baseball", 6))

