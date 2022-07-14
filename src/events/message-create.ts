import { Message } from 'discord.js';
import passiveActions from '../passive/_passive-actions';

// Event is called when a message is sent in the server
export default {
  name: 'messageCreate',
  execute(message: Message) {
    // Loop through all passive actions, if check returns true, execute the action
    passiveActions.forEach((action) => {
      if (action.check(message)) {
        action.execute(message);
      }
    });
  },
};
