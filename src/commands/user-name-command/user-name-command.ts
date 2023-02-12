import chalk from 'chalk';
import boxen, { BorderStyle } from 'boxen';
import yargs from 'yargs/yargs';

export default class UserNameCommand {

    constructor(){

    }
    
    process(){
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
    
        const parse = yargs(process.argv)
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