import { App, Plugin, PluginManifest, Notice } from 'obsidian';
import CodexManager from './codexManager';
import { openCodexBrowser } from './ui/codexBrowser';

export default class CodexBlocksPlugin extends Plugin {
  codex: CodexManager;

  constructor(app: App, manifest: PluginManifest) {
    super(app, manifest);
    this.codex = new CodexManager(app);
  }

  async onload() {
    await this.codex.loadBlocks();

    this.addRibbonIcon('blocks', 'Open Codex Browser', () => {
      openCodexBrowser(this.app, this.codex);
    });

    this.addCommand({
      id: 'insert-codex-block',
      name: 'Insert Codex Block',
      callback: () => openCodexBrowser(this.app, this.codex)
    });

    new Notice('Codex Blocks plugin loaded');
  }
}
