/* You have been given an array ‘a’ of ‘n’ unique non-negative integers.
Find the second largest and second smallest element from the array.
Return the two elements (second largest and second smallest) as another array of size 2. */

//function secondlargest(arr){
/* let max = 0;
let secondlare = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > secondlare && arr[i] != max) {
    secondlare = arr[i];
  }
}

return secondlare; */

//}
//console.log(secondlargest([1,2,4,7,7,5]));

// Autre Solution

function secondLargest(arr) {
  let large = arr[0];
  let sSlarge = -1;
  for (let i = 1; i < arr.length ; i++) {
    if (arr[i] > large) {
      sSlarge = large;
      large = arr[i];
    } else if (large > arr[i] && arr[i] > sSlarge) {
      sSlarge = arr[i];
    }
  }
  return sSlarge;
}

function secondSmallest(arr){
    let smallest = arr[0];
    let ssSmal = Number.MAX_SAFE_INTEGER;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < smallest) {
            ssSmal = smallest;
            smallest = arr[i];
        }else if (arr[i] != smallest && arr[i]<ssSmal) {
            ssSmal = arr[i];
        }
    }
    return ssSmal;
}

function deuximePlusPetitEtplusGrand(arr){
    const deuxiemePlusGrand = secondLargest(arr);
    const deuxiemePlusPetit = secondSmallest(arr);
    return { deuxiemePlusGrand, deuxiemePlusPetit };
}

console.log(deuximePlusPetitEtplusGrand([1,2,4,4,3,7,5]));
