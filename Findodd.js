function findOdd(A){
    // Happy Coding
    var count = 0;
    for(var i =0; i<A.length; i++){
        for(var j = 0; j<A.length; j++){
            if(A[i]  === A[j]){
                count++
            }
        }
        if(count % 2 !=0){
            return A[i]
        }
    }
}

console.log(findOdd([1,2,3,4,7]))