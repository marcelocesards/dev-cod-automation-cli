#!/usr/bin/env node

////creating a box to show messages

import chalk from 'chalk';
import boxen, { BorderStyle } from 'boxen';
import yargs from 'yargs/yargs';
import terminal  from "./console";
import commands from './commands';

commands.command();
terminal.terminal();