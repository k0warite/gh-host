export function removeComments(str: string) {
    return str.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,'').trim();
}