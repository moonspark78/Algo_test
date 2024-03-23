/* Given an array ‘arr’ of size ‘n’ find the largest element in the array. */

function largestElementInArray(arr,n) {
    let max = 0;
    n = arr.length;
    for(let i= 0; i<arr.length; i++) {
        if(arr[i]>max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(largestElementInArray([22,4,10], 3));


//Autre solution

const largestElement = (arr,n) => {
    return arr.reduce((acc, cur) =>{
        return acc > cur ? acc : cur;
    },arr[0])
}
console.log(largestElement([19,42,1], 3));


// Autre solution

function largestElementArray(arr,n) {   
    n= arr.length;
    arr.sort((a,b) => a-b)
    return (arr[arr.length-1]);

}
console.log(largestElementArray([19,40,1], 3));