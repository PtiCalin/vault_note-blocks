export function parseContext(text: string): string[] {
  const tagRegex = /#(\w+)/g;
  const tags: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = tagRegex.exec(text)) !== null) {
    tags.push(match[1]);
  }
  return tags;
}
