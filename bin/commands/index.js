"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_name_command_1 = __importDefault(require("./user-name-command/user-name-command"));
function command() {
    const userNameCommand = new user_name_command_1.default();
    userNameCommand.readName();
}
exports.default = { command };
