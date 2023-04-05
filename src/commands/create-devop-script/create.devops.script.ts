import chalk from 'chalk';
import boxen, { BorderStyle } from 'boxen';
import yargs from 'yargs/yargs';
import Command from '../command-executor/command';
import * as readline from 'readline';
import * as fs from 'fs';
import * as path from 'path';

export default class CreateDevopsScriptCommand implements Command {

    constructor(){

    }

    getPromptMessage(): string {
        return '> Informe o nome da app: ';
    }

    getCommandName(): string {
        return "read-app";
    }

    async process(input?:string){
        let args = process.argv;
        if(input){
            await this.findMainClass(input);
            return;
        }
    
        const parse = yargs(args)
            .option("cs", { alias: "create-script", describe: "Create devops script", type: "string", demandOption: "api" });
    
        (async () => {
            const argv = await parse.argv;
           // await this.findMainClass(argv.cs);
        })();
    }

    printName(name:any){
        console.log(name);
    }

    async findMainClass(type: string): Promise<string | null> {
        //read file ../../../../assets/api.md
        const file = path.join(__dirname, `../../../../assets/api.md`);

        console.log('arquivo carregado',file);

        const name = await this.promptAppName();
        console.log(name);
      
        return null;
      }   

      async promptAppName(): Promise<string | null> {
        //prompt user for input for the appliccation name
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
      
        return new Promise((resolve, reject) => {
          rl.question(this.getPromptMessage(), (answer) => {
            //type the name of the application
            const app = answer;
            resolve(app);
          });
        });
      }
}