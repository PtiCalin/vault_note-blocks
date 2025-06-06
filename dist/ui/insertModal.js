"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obsidian_1 = require("obsidian");
class InsertModal extends obsidian_1.Modal {
    constructor(app, manager) {
        super(app);
        this.manager = manager;
    }
    onOpen() {
        const { contentEl } = this;
        contentEl.createEl('h2', { text: 'Insert Codex Block' });
        this.manager.blocks.forEach((_, key) => {
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
exports.InsertModal = InsertModal;
