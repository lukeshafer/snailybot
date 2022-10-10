// @ts-check
import { env } from "../../env/server.mjs";
import { registrations as commands } from "./commands.mjs";

/**
 * This script runs at build start, to ensure all commands are registered with Discord
 * This can take o(minutes), so wait until
 * you're sure these are the commands you want.
 */
async function registerGlobalCommands() {
  const url = `https://discord.com/api/v10/applications/${env.DISCORD_APPLICATION_ID}/commands`;
  await registerCommands(url);
}

/**
 *
 * @param {string} url Discord registration URL
 * @returns {Promise<Response>} Response
 */
async function registerCommands(url) {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bot ${env.DISCORD_TOKEN}`,
    },
    method: "PUT",
    body: JSON.stringify(commands),
  });

  if (response.ok) {
    console.log("Registered all commands");
  } else {
    console.error("Error registering commands");
    const text = await response.text();
    console.error(text);
  }
  return response;
}

const response = registerGlobalCommands();

export default response;
