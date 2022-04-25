
export function randomHex() {
  return `#${Math.random().toString(16).slice(2, 8)}`;
}

export function randomAlphabet() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
