const arr = [1,5,3,6,4,8,9];
function add(arr){
    return arr.reduce((prev,last)=>
     prev+last)
}
console.log(add(arr));