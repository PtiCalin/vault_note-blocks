import { App, Modal, Setting, MarkdownView } from 'obsidian';
import CodexManager from '../codexManager';

export class InsertModal extends Modal {
  manager: CodexManager;
  constructor(app: App, manager: CodexManager) {
    super(app);
    this.manager = manager;
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.createEl('h2', { text: 'Insert Codex Block' });
    this.manager.blocks.forEach((_, key) => {
      new Setting(contentEl)
        .setName(key)
        .addButton(btn => btn.setButtonText('Insert').onClick(() => {
          const editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
          if (editor) {
            this.manager.insertBlock(editor, key);
            this.close();
          }
        }));
    });
  }
}
