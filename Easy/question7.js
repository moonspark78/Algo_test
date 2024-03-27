/* Array & Target
Exemple : 
arr = [1,4,7,6,9]
target = 7
Output : 2
*/

function binary(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return false;
}
console.log(binary([1,4,7,6,9],1));
