"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openCodexBrowser = void 0;
const obsidian_1 = require("obsidian");
function openCodexBrowser(app, manager) {
    new CodexBrowserModal(app, manager).open();
}
exports.openCodexBrowser = openCodexBrowser;
class CodexBrowserModal extends obsidian_1.Modal {
    constructor(app, manager) {
        super(app);
        this.manager = manager;
    }
    onOpen() {
        const { contentEl } = this;
        contentEl.createEl('h2', { text: 'Codex Blocks' });
        this.manager.blocks.forEach((value, key) => {
            new obsidian_1.Setting(contentEl)
                .setName(key)
                .addButton(btn => btn.setButtonText('Insert').onClick(() => {
                var _a;
                const editor = (_a = this.app.workspace.getActiveViewOfType(obsidian_1.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
                if (editor) {
                    this.manager.insertBlock(editor, key);
                    this.close();
                }
            }));
        });
    }
}
