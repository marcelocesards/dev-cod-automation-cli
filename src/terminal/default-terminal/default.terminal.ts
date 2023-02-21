import * as readline from 'readline';
import Command from '../../commands/command-executor/command';

export default class DefaultTerminal {
    private command:any;
    constructor(private commands:Command[]){

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

        let newCommand = true;
        
        rl.on('line', (input) => {
            console.log(`Received: ${input}`);
            if(input === "exit")
                rl.close();
            else {
                if(newCommand){
                    newCommand = false;
                    const mensagem = this.executeCommand(input);   
                    rl.setPrompt(mensagem);
                    rl.prompt();                 
                } else{
                    newCommand = true;
                    console.log('input value',input);
                    console.log('input type',typeof input)
                    this.command.process(input);
                    rl.setPrompt('> ');
                    rl.prompt();
                }
            }
        });
        
        rl.on('close', () => {
            console.log('Exiting the simulation...');
        });
    }

    executeCommand(input:string){
        const command = this.getCommand(input);
        this.command = command;
        return command.getPromptMessage();
    }

    getCommand(commandName:string):Command{
        return this.commands.filter(c => c.getCommandName()===commandName)[0];
    }
}