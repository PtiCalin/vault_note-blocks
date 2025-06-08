# Vault Note Blocks

Manage and insert reusable content blocks in Obsidian.

This plugin provides a simple browser to insert predefined blocks stored in `codex/blocks/`.

## Features

- Browse a library of Markdown blocks
- Insert blocks into the current editor
- Placeholder logic for smart suggestions

## Workspace Setup

Install dependencies with the provided `setup.sh` script. Codex runs this script automatically when the workspace starts.

```bash
./setup.sh
```

If the workspace does not already contain the required packages, run the agent with `--internet` to allow `npm install` to fetch them.

## Development

After installing dependencies, build the plugin:

```bash
npm run build
```

Copy the `dist/` folder to your vault's `.obsidian/plugins/vault-note-blocks` directory.

## Community Plugin Submission

If you want this plugin listed in Obsidian's community catalog:

1. Run `npm run release` and create a GitHub release with the files from the `release/` folder.
2. Fork [`obsidianmd/obsidian-releases`](https://github.com/obsidianmd/obsidian-releases).
3. Append `"vault-note-blocks"` to the end of `community-plugins.json`.
4. Open a pull request describing your plugin and include the repository URL `PtiCalin/vault_note-blocks`.

Your release must contain a `manifest.json` matching the plugin `id`, `name`, and `version` found in this repo.

Compatibility information is tracked in `versions.json`. Remember to update this file along with `manifest.json` whenever you cut a new release.
