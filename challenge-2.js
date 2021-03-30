let array1=[];

function maxMin(){
    for(let i=0;i<5;i++){
        let arrayValues=parseInt(prompt('please enter the number of the array'))
        array1.push(arrayValues);
     
        console.log(array1[i]);
       
     
     }     
    
}

maxMin();
console.log(Math.max(array1))
console.log(Math.min(array1))
   