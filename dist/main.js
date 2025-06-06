"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obsidian_1 = require("obsidian");
const codexManager_1 = require("./codexManager");
const codexBrowser_1 = require("./ui/codexBrowser");
class CodexBlocksPlugin extends obsidian_1.Plugin {
    constructor(app, manifest) {
        super(app, manifest);
        this.codex = new codexManager_1.default(app);
    }
    async onload() {
        await this.codex.loadBlocks();
        this.addRibbonIcon('blocks', 'Open Codex Browser', () => {
            (0, codexBrowser_1.openCodexBrowser)(this.app, this.codex);
        });
        this.addCommand({
            id: 'insert-codex-block',
            name: 'Insert Codex Block',
            callback: () => (0, codexBrowser_1.openCodexBrowser)(this.app, this.codex)
        });
        new obsidian_1.Notice('Codex Blocks plugin loaded');
    }
}
module.exports = CodexBlocksPlugin;
