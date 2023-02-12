
import terminal from '../terminal';
import UserNameCommand from './user-name-command/user-name-command';

function command() {
    
    const userNameCommand = new UserNameCommand();
    userNameCommand.readName();
}

export default {command};