import * as readline from 'readline';

function terminal() {
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


export default { terminal }