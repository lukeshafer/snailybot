import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

/**
 * A helper function which formats a rich text object based on its annotations property
 * @param RichTextItemResponse A single rich text item response object
 */
const addAnnotations = ({ plain_text, annotations }: RichTextItemResponse) => {
	let returnText = plain_text;
	Object.entries(annotations).forEach(([key, value]) => {
		if (value === true)
			switch (key) {
				case 'bold':
					returnText = `**${returnText}**`;
					break;
				case 'italic':
					returnText = `*${returnText}*`;
					break;
				case 'strikethrough':
					returnText = `~~${returnText}~~`;
					break;
				case 'underline':
					returnText = `__${returnText}__`;
					break;
			}
	});
	return returnText;
};

/**
 * Transforms Notion rich text blocks into a format Discord can use
 * @param text A list of RichTextItemResponses from Notion API
 * @returns a string in a Discord-friendly format
 */
export const extractRichText = (text: RichTextItemResponse[]) => {
	let returnText: string = '';
	text.forEach((value) => {
		const text = addAnnotations(value);
		returnText += text;
	});
	return returnText;
};
