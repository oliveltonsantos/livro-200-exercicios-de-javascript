function isSubarray (mainArray, subArray) {
return mainArray.join(',').includes(subArray.join( ',' ));
}

const mainArr = [1, 12, 3];
const subArr1  = [2,3];


console .log(isSubarray(mainArr, subArr1)); // true
console .log(isSubarray(mainArr, subArr2)); // false