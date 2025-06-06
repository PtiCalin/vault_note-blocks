"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obsidian = require("obsidian");
class CodexManager {
    constructor(app) {
        this.app = app;
        this.blockPath = 'codex/blocks';
        this.blocks = new Map();
    }
    async loadBlocks() {
        try {
            const files = await this.app.vault.adapter.list(this.blockPath);
            for (const file of files.files) {
                if (file.endsWith('.md')) {
                    const content = await this.app.vault.adapter.read(`${this.blockPath}/${file}`);
                    const name = file.replace('.md', '');
                    this.blocks.set(name, content);
                }
            }
        }
        catch (err) {
            new obsidian.Notice('Failed to load Codex blocks');
            console.error(err);
        }
    }
    insertBlock(editor, name) {
        const content = this.blocks.get(name);
        if (!content)
            return;
        editor.replaceRange(content, editor.getCursor());
    }
}
exports.default = CodexManager;
