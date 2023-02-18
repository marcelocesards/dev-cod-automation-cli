import { ReadLine } from "readline";

export default interface Command {
    process():any;
    getPromptMessage():string;
    getCommandName():string;
}