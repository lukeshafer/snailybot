import type { NextApiRequest, NextApiResponse } from "next";
import {
  InteractionResponseType,
  InteractionType,
  verifyKey,
} from "discord-interactions";
import { env } from "../../../env/server.mjs";
import commands from "../../../server/discord/commands.mjs";

// interface ResponseData {
//   name: string;
// }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const signature = req.headers["x-signature-ed25519"] as string;
    const timestamp = req.headers["x-signature-timestamp"] as string;
    const rawBody = JSON.stringify(req.body);

    const isValidRequest = verifyKey(
      rawBody,
      signature,
      timestamp,
      env.DISCORD_PUBLIC_KEY
    );

    // Verify request is valid per Discord requirements
    if (!isValidRequest) {
      console.error("Invalid Request");
      return res.status(401).send({ error: "Bad request signature " });
    }

    const message = req.body;

    // Discord requires responding to the PING interaction
    if (message.type === InteractionType.PING) {
      console.log("Handling Ping request");
      res.send({
        type: InteractionResponseType.PONG,
      });
    } else if (message.type === InteractionType.APPLICATION_COMMAND) {
      // Handle our Slash Commands
      const result = commands.find(
        async (cmd) =>
          message.data.name.toLowerCase() ===
          cmd.registration.name.toLowerCase()
      );
      if (result) result.callback(res);
      else {
        console.error("Unknown Command");
        res.status(400).send({ error: "Unknown Type" });
      }
    } else {
      console.error("Unknown Type");
      res.status(400).send({ error: "Unknown Type" });
    }
  } else res.status(400).send({ error: "Forbidden Access." });
}
