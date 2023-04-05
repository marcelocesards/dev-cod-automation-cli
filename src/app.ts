#!/usr/bin/env node

import CommandExecutor from "./commands";
import CreateDevopsScriptCommand from "./commands/create-devop-script";
import ReadApplicationCommand from "./commands/read-application";
import RenameApplicationCommand from "./commands/rename-application";
import UserNameCommand from "./commands/user-name-command";

////creating a box to show messages
CommandExecutor.execute([
    new CreateDevopsScriptCommand(),
    new UserNameCommand(),
    new RenameApplicationCommand(),
    new ReadApplicationCommand()
]);