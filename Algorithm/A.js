// Write a Function called same,which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must  be same.


// Function to sort array of integers in ascending order
const arrAsc = (numArray)=>{
    return numArray.sort((a,b)=>{
        return a - b
    })
}

// console.log(arrAsc([2,3,4,7,2,4]))

// Function to check if the square of elements is in another array
const arrSquare = (arr1, arr2)=>{
    // First Check if both arrays are of the same length
    if(arr1.length !== arr2.length){
        return false
    }

    const compArr1 = arrAsc(arr1)
    const compArr2 = arrAsc(arr2)

    // Check if element is second array is equal to the square of corresponding element in first array 
    for(let i = 0; i<compArr1.length; i++){
        if(compArr2[i] !== Math.pow(compArr1[i], 2)){
            return false
        }
    }
    return true

}

console.log(arrSquare([1,2,3],[4,1,9]))
console.log(arrSquare([1,2,4],[4,1,16]))