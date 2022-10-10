import { NextApiResponse } from "next";
import type {
  ApplicationCommandType,
  ApplicationCommandOption,
} from "slash-commands";

interface Registration {
  name: string;
  description: string;
}

export interface Command {
  registration: {
    name: string;
    description: string;
    type?: ApplicationCommandType;
    options?: ApplicationCommandOption;
  };
  callback: (res: NextApiResponse) => Promise<void>;
}
