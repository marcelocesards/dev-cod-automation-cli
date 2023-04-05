#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = __importDefault(require("./commands"));
const create_devop_script_1 = __importDefault(require("./commands/create-devop-script"));
const read_application_1 = __importDefault(require("./commands/read-application"));
const rename_application_1 = __importDefault(require("./commands/rename-application"));
const user_name_command_1 = __importDefault(require("./commands/user-name-command"));
////creating a box to show messages
commands_1.default.execute([
    new create_devop_script_1.default(),
    new user_name_command_1.default(),
    new rename_application_1.default(),
    new read_application_1.default()
]);
