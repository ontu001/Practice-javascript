// Basic stuff

// let a = parseInt(prompt("Enter 1st number: "))
// let b = parseInt(prompt("Enter 2nd number: "))
// let c = prompt("Choose your operator between +, -, *, /")

// if (c == '+'){
//     console.log(`${a} + ${b} = ${a+b}`)
// }
// else if(c == '-'){
//     console.log(`${a} - ${b} = ${a-b}`)
// }
// else if( c == '*'){
//     console.log(`${a} x ${b} = ${a*b}`)
// }
// else if(c == '/'){
//     console.log(`${a} / ${b} = ${a/b}`)
// }
// else{
//     console.log(`${c} Is Invalid Operator`)
// }



//---- Array
const topAiTool=['OpenAI','Gemini','Cluade','Grok','LLMA'];
const useCase = new Array('Text generation','Video Generation','Image generation','Audio Generation');

console.log(topAiTool.at(-1))
console.log(useCase)

topAiTool[4]='Perplexity'
console.log(topAiTool)

const strUseCase = useCase.toString();
console.log(strUseCase)
console.log(topAiTool.join('-'))
console.log('\n')

topAiTool.pop()
console.log(topAiTool)
topAiTool.push('Deepseek')
console.log(topAiTool)
console.log('\n')


topAiTool.unshift('Hugging face')
console.log(topAiTool)

console.log('\n')
topAiTool.shift()
console.log(topAiTool)


const arr1 = ['apple','mango','orrange',['pineapple','watermelon']];
const arr2 = ['ice-cream','chocolate','chips'];
const arr3 = ['French fry','Burger','Pizza'];


console.log('\n')

const arr4 = arr1.concat(arr2,arr3)
console.log(arr4)
console.log('\n')

const neww = arr1.flat()
console.log(neww)



console.log('\n')



arr2.splice(1,0,'coca cola')
console.log(arr2)

console.log('\n')


arr2.splice(1)
console.log(arr2)