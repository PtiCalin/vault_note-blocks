import { App, Notice, Editor } from 'obsidian';

export default class CodexManager {
  private app: App;
  private blockPath = 'codex/blocks';
  blocks: Map<string, string> = new Map();

  constructor(app: App) {
    this.app = app;
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
    } catch (err) {
      new Notice('Failed to load Codex blocks');
      console.error(err);
    }
  }

  insertBlock(editor: Editor, name: string) {
    const content = this.blocks.get(name);
    if (!content) return;
    editor.replaceRange(content, editor.getCursor());
  }
}
