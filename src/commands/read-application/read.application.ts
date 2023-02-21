import chalk from 'chalk';
import boxen, { BorderStyle } from 'boxen';
import yargs from 'yargs/yargs';
import Command from '../command-executor/command';
import * as readline from 'readline';
import * as fs from 'fs';
import * as path from 'path';

export default class ReadApplicationCommand implements Command {

    constructor(){

    }

    getPromptMessage(): string {
        return '> Informe o diretorio da app: ';
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
            .option("mp", { alias: "mainPackage", 
            describe: "Your name", type: "string", demandOption: false })
            ;
    
        (async () => {
            const argv = await parse.argv;
            arguments
            await this.findMainClass(argv.mp||"");
        })();
    }

    printName(name:any){
        console.log(name);
    }

    async findMainClass(dir: string): Promise<string | null> {
        console.log('finding main class')
        const files = await fs.promises.readdir(dir);
      
        for (const file of files) {
          const filePath = path.join(dir, file);
          const stats = await fs.promises.stat(filePath);
      
          if (stats.isDirectory()) {
            const mainClass = await this.findMainClass(filePath);
            if (mainClass) {
              return mainClass;
            }
          } else if (stats.isFile() && path.extname(file) === '.java') {
            const data = await fs.promises.readFile(filePath, 'utf8');
            if (data.includes('public static void main(String[] args)')) {
              const packageName = await this.findPackageName(filePath);
              return `${packageName}.${path.basename(file, '.java')}`;
            }
          }
        }
      
        return null;
      }
      
      async findPackageName(filePath: string): Promise<string> {
        const data = await fs.promises.readFile(filePath, 'utf8');
        const match = /package\s+([a-z_][a-z\d_]*(\.[a-z_][a-z\d_]*)*);/i.exec(data);
        if (match) {
          return match[1];
        } else {
          throw new Error(`Could not find package declaration in ${filePath}.`);
        }
      }
   
}