import UserNameCommand from './user-name-command';

function command() {
    
    const userNameCommand = new UserNameCommand();
    userNameCommand.process();
}

export default {command};