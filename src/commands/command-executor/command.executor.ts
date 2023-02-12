import DefaultTerminal from "../../terminal";
import Command from "./command";

export default class CommandExecutor {

    constructor(commands:Command[]){
        CommandExecutor.process(commands);
    }

    static execute(commands:Command[]){
        this.process(commands);
    }
    
    static process(commands:Command[]){
        console.log(process.argv.slice(2))
        if(process.argv.slice(2).length > 0){
            commands.forEach(command=>command.process());
        } else {
            const defaultTerminal = new DefaultTerminal();
            defaultTerminal.init();
        }
    }


}