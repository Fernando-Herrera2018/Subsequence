array= [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1,5,10]

function isValidSubsequence(array, sequence) {
    let j = 0 
    for(i=0; i < array.length; i++){
    
    if (array[i] === sequence[j]) {
          j++

       }
    }
   if (j === sequence.length) {

   return true
  } else {

   return false
  }
 }
 console.log(isValidSubsequence(array,sequence))