#!/usr/bin/env node
"use strict";
////creating a box to show messages
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = __importDefault(require("./console"));
const commands_1 = __importDefault(require("./commands"));
commands_1.default.command();
console_1.default.terminal();