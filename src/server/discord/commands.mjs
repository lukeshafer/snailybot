// @ts-check

/** @type {import("./commands").Command} */
const STOP_TOXIC_MAN = {
  registration: {
    name: "stoptoxicman",
    description: "Use this if Toxic Man is bothering you!",
  },
  callback: async (res) => {
    res.status(200).send({
      type: 4,
      data: {
        content: "Hello!",
      },
    });
  },
};

const commands = [STOP_TOXIC_MAN];

export default commands;

export const registrations = commands.map(({ registration }) => registration);
