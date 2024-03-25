/*
 Palindrome Number
Given an integer x, return true if x is a palindrome and false otherwise.
*/

function numberIsPalindrome(x){
    if(x < 0){
        return false;
    }
    
    let reversed = 0;
    let original = x;
    
    // Calculer la réversion du nombre
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    // Comparer le nombre d'origine avec sa réversion
    return original === reversed;
}
console.log(numberIsPalindrome(1321));




// Autre solution
function isPalindrome2(x){
    x = x.toString();
    let left = 0
    let rigth = x.length - 1
    while (left < rigth){
        if(x[left] != x[rigth]){
            return false;
        }
        left++;
        rigth--;
    }
    return true;

}

