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
const yargs_1 = __importDefault(require("yargs/yargs"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class ReadApplicationCommand {
    constructor() {
    }
    getPromptMessage() {
        return '> Informe o diretorio da app: ';
    }
    getCommandName() {
        return "read-app";
    }
    process(input) {
        let args = process.argv;
        if (input) {
            this.findMainClass(input);
            return;
        }
        const parse = (0, yargs_1.default)(args)
            .option("mp", { alias: "mainPackage",
            describe: "Your name", type: "string", demandOption: false });
        (() => __awaiter(this, arguments, void 0, function* () {
            const argv = yield parse.argv;
            arguments;
            this.findMainClass(argv.mp || "");
        }))();
    }
    printName(name) {
        console.log(name);
    }
    findMainClass(dir) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('finding main class');
            const files = yield fs.promises.readdir(dir);
            for (const file of files) {
                const filePath = path.join(dir, file);
                const stats = yield fs.promises.stat(filePath);
                if (stats.isDirectory()) {
                    const mainClass = yield this.findMainClass(filePath);
                    if (mainClass) {
                        return mainClass;
                    }
                }
                else if (stats.isFile() && path.extname(file) === '.java') {
                    const data = yield fs.promises.readFile(filePath, 'utf8');
                    if (data.includes('public static void main(String[] args)')) {
                        const packageName = yield this.findPackageName(filePath);
                        return `${packageName}.${path.basename(file, '.java')}`;
                    }
                }
            }
            return null;
        });
    }
    findPackageName(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield fs.promises.readFile(filePath, 'utf8');
            const match = /package\s+([a-z_][a-z\d_]*(\.[a-z_][a-z\d_]*)*);/i.exec(data);
            if (match) {
                return match[1];
            }
            else {
                throw new Error(`Could not find package declaration in ${filePath}.`);
            }
        });
    }
}
exports.default = ReadApplicationCommand;
