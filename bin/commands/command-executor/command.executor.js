"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const terminal_1 = __importDefault(require("../../terminal"));
class CommandExecutor {
    constructor(commands) {
        CommandExecutor.process(commands);
    }
    static execute(commands) {
        this.process(commands);
    }
    static process(commands) {
        console.log(process.argv.slice(2));
        if (process.argv.slice(2).length > 0) {
            commands.forEach(command => command.process());
        }
        else {
            const defaultTerminal = new terminal_1.default();
            defaultTerminal.init();
        }
    }
}
exports.default = CommandExecutor;
