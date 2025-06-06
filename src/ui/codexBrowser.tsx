import { App, Modal, Setting, MarkdownView } from 'obsidian';
import CodexManager from '../codexManager';

export function openCodexBrowser(app: App, manager: CodexManager) {
  new CodexBrowserModal(app, manager).open();
}

class CodexBrowserModal extends Modal {
  manager: CodexManager;

  constructor(app: App, manager: CodexManager) {
    super(app);
    this.manager = manager;
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.createEl('h2', { text: 'Codex Blocks' });

    this.manager.blocks.forEach((value, key) => {
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
