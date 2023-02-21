"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
class DefaultTerminal {
    constructor(commands) {
        this.commands = commands;
    }
    init() {
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
            if (input === "exit")
                rl.close();
            else {
                if (newCommand) {
                    newCommand = false;
                    const mensagem = this.executeCommand(input);
                    rl.setPrompt(mensagem);
                    rl.prompt();
                }
                else {
                    newCommand = true;
                    console.log('input value', input);
                    console.log('input type', typeof input);
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
    executeCommand(input) {
        const command = this.getCommand(input);
        this.command = command;
        return command.getPromptMessage();
    }
    getCommand(commandName) {
        return this.commands.filter(c => c.getCommandName() === commandName)[0];
    }
}
exports.default = DefaultTerminal;
