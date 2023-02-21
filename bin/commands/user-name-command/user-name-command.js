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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const boxen_1 = __importStar(require("boxen"));
const yargs_1 = __importDefault(require("yargs/yargs"));
class UserNameCommand {
    constructor() {
    }
    getPromptMessage() {
        return '> Informe o nome do autor: ';
    }
    getCommandName() {
        return "user.name";
    }
    process(input) {
        let args = process.argv;
        if (input) {
            this.printName(input);
            return;
        }
        const greeting = chalk_1.default.white.bold("Hello!");
        const boxenOptions = {
            padding: 1,
            margin: 1,
            borderStyle: "round" /* BorderStyle.Round */,
            borderColor: "green",
            backgroundColor: "#555555"
        };
        const msgBox = (0, boxen_1.default)(greeting, boxenOptions);
        console.log(msgBox);
        const parse = (0, yargs_1.default)(args)
            .option("n", { alias: "name",
            describe: "Your name", type: "string", demandOption: false });
        (() => __awaiter(this, arguments, void 0, function* () {
            const argv = yield parse.argv;
            arguments;
            this.printName(argv.name);
        }))();
    }
    printName(name) {
        console.log(name);
    }
}
exports.default = UserNameCommand;
