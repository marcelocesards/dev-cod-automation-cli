import chalk from 'chalk';
import boxen, { BorderStyle } from 'boxen';
import yargs from 'yargs/yargs';
import Command from '../command-executor/command';
import * as readline from 'readline';

export default class RenameApplicationCommand implements Command {

    constructor(){

    }

    getPromptMessage(): string {
        return '> Renomear a aplicação para: ';
    }

    getCommandName(): string {
        return "rename-app";
    }

    process(input?:string){
        let args = process.argv;
        if(input){
            this.printName(input);
            return;
        }

        const greeting = chalk.white.bold("Hello!");

        const boxenOptions = {
            padding: 1,
            margin: 1,
            borderStyle: BorderStyle.Round,
            borderColor: "green",
            backgroundColor: "#555555"
        };
        const msgBox = boxen(greeting, boxenOptions);
    
        console.log(msgBox);
    
        const parse = yargs(args)
            .option("n", { alias: "name", 
            describe: "Your name", type: "string", demandOption: false })
            ;
    
        (async () => {
            const argv = await parse.argv;
            arguments
            this.printName(argv.name);
        })();
    }

    printName(name:any){
        console.log(name);
    }
   
}