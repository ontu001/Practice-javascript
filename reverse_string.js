let a = prompt("Enter your word to reverse:");
let reversed = "";

for (let i = a.length-1; i >= 0; i--) {
    reversed += a[i]; 
}

console.log(reversed);