const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');


const rl = readline.createInterface({ input, output });

rl.question('Entre com um número qualquer ', (answer) => {
    var chosenNumber = answer
    try{
        Isfibonacci(chosenNumber)
    }
    catch{
        console.log('Error')
    }
    rl.close();
    });


const Isfibonacci = (number) => {
    let i = 1
    let sum = 0
    while(sum<number){
        sum+=i
        i = Math.abs(sum-i)
    }
    return (sum==number) ? console.log('Numero pertence a sequencia de Fibonacci') :  console.log('Numero nao pertence a sequencia de Fibonacci')
}