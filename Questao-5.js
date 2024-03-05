const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');


const rl = readline.createInterface({ input, output });

rl.question('Entre com um texto qualquer: ', (answer) => {
    var invertedString = ''
    for(let i=answer.length-1;i>=0;i--){
        invertedString+=answer[i]
    }
    console.log(invertedString)
    rl.close();
    });
