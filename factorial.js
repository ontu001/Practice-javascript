let a = parseInt(prompt("Enter Your Number = "));


function factorial(a){
    let fact= 1;
   for(i =1; i<=a; i++){
    fact = fact*i
}
console.log(`Factorial of ${a} is = ${fact}`)
}

factorial(a)