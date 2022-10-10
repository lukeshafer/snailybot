import { Client, isFullPage } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export class Notion {
    private _notion: Client;
    private _page: PageObjectResponse;
    
    constructor() {
        this._notion = new Client({ auth: process.env.NOTION_KEY })
        this._getPage().then(() => console.log(this._page));
    }

    refresh() {
        // do stuff
    }
    
    private async _getPage() {
        const tempPage = await this._notion.pages.retrieve({page_id: process.env.NOTION_PAGE_ID});
        if (isFullPage(tempPage)) {
            this._page = tempPage;
        } else {
            throw new Error("Unable to load full page");
            
        }
    }
}
