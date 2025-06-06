"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseContext(text) {
    const tagRegex = /#(\w+)/g;
    const tags = [];
    let match;
    while ((match = tagRegex.exec(text)) !== null) {
        tags.push(match[1]);
    }
    return tags;
}
exports.parseContext = parseContext;
