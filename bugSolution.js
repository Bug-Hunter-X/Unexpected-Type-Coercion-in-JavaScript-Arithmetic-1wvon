function foo(a,b){
if(typeof a !== 'number' || typeof b !== 'number'){
return "Error: Inputs must be numbers";
}
return a+b;}
console.log(foo(1, "1")); // Output: Error: Inputs must be numbers

function bar(a,b){
if(typeof a !== 'number' || typeof b !== 'number'){
return "Error: Inputs must be numbers";
}
return a-b;}
console.log(bar(1,"1")); // Output: Error: Inputs must be numbers