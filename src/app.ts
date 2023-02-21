#!/usr/bin/env node

import CommandExecutor from "./commands";
import RenameApplicationCommand from "./commands/rename-application";
import UserNameCommand from "./commands/user-name-command";

////creating a box to show messages
CommandExecutor.execute([
    new UserNameCommand(),
    new RenameApplicationCommand()
]);