function  sumFor(arr) {
  let total = 0;
  for(let i = 0; i< arr.length; i++){
    total+= arr[i];
  }
  return total; 
}

function  sumWhile(arr) {
  let total = 0;
  let i = 0;
while(i<arr.length) {
  total += arr[i];
}
}
function  sumRecursion(arr,input) {
  let total =  0;
  let i = 0 + input;
     if(i>arr.length){
       return 0;
     }
     return total+=  sumRecursion(arr,i+1)
}

function  sumTheSimpleWay(arr,input) {

  return _.reduce(arr, (memo,arr)=> memo+=arr)
}

console.log(sumFor([1,2,3,4,5]))