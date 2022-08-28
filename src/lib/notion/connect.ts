import { Client } from '@notionhq/client';

/**
 * @param pollRate Refresh rate in milliseconds
 */
const refresh = (pollRate: number) => {
	// Will run the various checks that exist, then
	setTimeout(() => refresh(pollRate), pollRate);
};

/** Connect to the Notion API and check for updates based on pollRate
 * @param pollRate How often the bot will check the API in seconds. Defaults to every 5 minutes.
 */
export const connect = (pollRate: number = 300) => {
	const notion = new Client({ auth: process.env.NOTION_KEY });
};
