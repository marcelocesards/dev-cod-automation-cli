import chalk from 'chalk';
import boxen, { BorderStyle } from 'boxen';
import yargs from 'yargs/yargs';
import Command from '../command-executor/command';
import * as readline from 'readline';

export default class UserNameCommand implements Command {

    constructor(){

    }

    getPromptMessage(): string {
        return '> Informe o nome do autor: ';
    }

    getCommandName(): string {
        return "user.name";
    }

    process(input?:string){
        let args = process.argv;
        if(!input){
            const inputString:any=input;
            args=[]
            args.push('n',inputString);
            args.push(inputString);
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
            console.log(argv.name);
        })();
    }
   
}