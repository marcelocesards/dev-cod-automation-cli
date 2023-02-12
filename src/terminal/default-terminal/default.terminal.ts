import * as readline from 'readline';

export default class DefaultTerminal {
    constructor(){

    }

    init(){
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        /*  rl.question('What is your name? ', (answer) => {
          console.log(`Hi, ${answer}!`);
          rl.close();
        });
        */
        rl.setPrompt('> ');
        rl.prompt();
        
        rl.on('line', (input) => {
            console.log(`Received: ${input}`);
            if(input === "exit")
                rl.close();
            else 
                rl.prompt();
        });
        
        rl.on('close', () => {
            console.log('Exiting the simulation...');
        });
    }
}