/* Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.
Exemples :

[1,1,1] et k=2 => output = 2
[1,2,3,0,3] et k=3 => output = 5
[4, 2, 9, 7, 19] et k=5 => output = 0
[1, -1, 2] et k=2 ⇒ output = 2
[1,1,1,-1] et k=2 => output = 3 */

function subArraySum(arr, k){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        let sum = 0;
        for(let j = i; j < arr.length; j++){
            sum += arr[j]
            if(sum === k){
                count++;
            }
        }
    }
    return count;
}

console.log(subArraySum([1,2,3,0,3],3));