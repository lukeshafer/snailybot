import { Client, isFullBlock } from '@notionhq/client';
import { extractRichText } from '../functions/extractRichText';


const blockId = process.env.NOTION_RULES_ID;

export const getRules = async (notion: Client) => {
	const response = await notion.blocks.children.list({
		block_id: blockId,
		page_size: 50,
	});

	const rules: string[] = [];

	response.results.forEach((result, index) => {
		if (!isFullBlock(result) || index === 0) return;
		if (result.type === 'table_row') {
			const row = result.table_row.cells[1];
			const text = extractRichText(row);
			rules.push(text);
		}
	});
	return rules;
};

// export const addRule = async (text: string) => {
//   try {
//     const response = await notion.pages.create({
//       parent: { database_id: databaseId },
//       properties: {
//         title: [
//           {
//             text: {
//               content: text,
//             },
//           },
//         ],
//       },
//     });
//     console.log(response);
//     console.log('Success! Entry added.');
//   } catch (error) {
//     console.error(error.body);
//   }
// };
