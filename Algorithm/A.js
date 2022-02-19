// Write a Function called same,which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must  be same.


// Function to sort array of integers in ascending order
const arrAsc = (numArray)=>{
    return numArray.sort((a,b)=>{
        return a -b
    })
}

console.log(arrAsc([2,3,4,7,2,4]))