export interface HighlightedLine {
  lineNumber: number;
  tokens: {
    text: string;
    type: 'keyword' | 'type' | 'string' | 'comment' | 'number' | 'preprocessor' | 'operator' | 'punctuation' | 'builtin' | 'text';
  }[];
}

const KEYWORDS = new Set([
  'class', 'struct', 'public', 'private', 'protected', 'virtual', 'return',
  'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 'default',
  'new', 'delete', 'operator', 'using', 'namespace', 'true', 'false', 'NULL'
]);

const TYPES = new Set([
  'int', 'float', 'double', 'char', 'bool', 'void', 'Complex', 'Node'
]);

const BUILTINS = new Set([
  'cout', 'cin', 'endl', 'std', 'iostream', 'SIZE'
]);

export function highlightCppCode(code: string): HighlightedLine[] {
  const lines = code.split('\n');
  
  return lines.map((line, idx) => {
    const tokens: HighlightedLine['tokens'] = [];
    let i = 0;
    const len = line.length;

    while (i < len) {
      // Check for single-line comment
      if (line[i] === '/' && line[i + 1] === '/') {
        tokens.push({ text: line.slice(i), type: 'comment' });
        break;
      }

      // Check for preprocessor directives like #include, #define
      if (line[i] === '#' && (i === 0 || /^\s*$/.test(line.slice(0, i)))) {
        let directiveEnd = i + 1;
        while (directiveEnd < len && /[a-zA-Z]/.test(line[directiveEnd])) {
          directiveEnd++;
        }
        tokens.push({ text: line.slice(i, directiveEnd), type: 'preprocessor' });
        i = directiveEnd;
        continue;
      }

      // Strings
      if (line[i] === '"') {
        let strEnd = i + 1;
        while (strEnd < len && line[strEnd] !== '"') {
          if (line[strEnd] === '\\' && strEnd + 1 < len) {
            strEnd += 2;
          } else {
            strEnd++;
          }
        }
        if (strEnd < len) strEnd++; // Include closing quote
        tokens.push({ text: line.slice(i, strEnd), type: 'string' });
        i = strEnd;
        continue;
      }

      // Header files in <iostream> after #include
      if (line[i] === '<' && line.includes('#include')) {
        let headerEnd = line.indexOf('>', i);
        if (headerEnd !== -1) {
          tokens.push({ text: line.slice(i, headerEnd + 1), type: 'string' });
          i = headerEnd + 1;
          continue;
        }
      }

      // Numbers
      if (/\d/.test(line[i]) && (i === 0 || /[\s(),;+\-*/%<>=!&|^~]/.test(line[i - 1]))) {
        let numEnd = i;
        while (numEnd < len && /[\d.]/.test(line[numEnd])) {
          numEnd++;
        }
        tokens.push({ text: line.slice(i, numEnd), type: 'number' });
        i = numEnd;
        continue;
      }

      // Identifiers / Words
      if (/[a-zA-Z_]/.test(line[i])) {
        let wordEnd = i;
        while (wordEnd < len && /[a-zA-Z0-9_]/.test(line[wordEnd])) {
          wordEnd++;
        }
        const word = line.slice(i, wordEnd);
        let type: HighlightedLine['tokens'][0]['type'] = 'text';

        if (KEYWORDS.has(word)) {
          type = 'keyword';
        } else if (TYPES.has(word)) {
          type = 'type';
        } else if (BUILTINS.has(word)) {
          type = 'builtin';
        }

        tokens.push({ text: word, type });
        i = wordEnd;
        continue;
      }

      // Operators and punctuation
      const twoChar = line.slice(i, i + 2);
      if (['<<', '>>', '==', '!=', '<=', '>=', '++', '--', '->', '&&', '||'].includes(twoChar)) {
        tokens.push({ text: twoChar, type: 'operator' });
        i += 2;
        continue;
      }

      if (['+', '-', '*', '/', '%', '=', '<', '>', '!', '&', '|'].includes(line[i])) {
        tokens.push({ text: line[i], type: 'operator' });
        i++;
        continue;
      }

      if ([';', ',', '(', ')', '{', '}', '[', ']', ':', '.'].includes(line[i])) {
        tokens.push({ text: line[i], type: 'punctuation' });
        i++;
        continue;
      }

      // Whitespace or any other char
      let otherEnd = i + 1;
      while (otherEnd < len && !/[a-zA-Z0-9_#"<>/;,(){}[\]:.+\-*%!=&|]/.test(line[otherEnd])) {
        otherEnd++;
      }
      tokens.push({ text: line.slice(i, otherEnd), type: 'text' });
      i = otherEnd;
    }

    return {
      lineNumber: idx + 1,
      tokens: tokens.length > 0 ? tokens : [{ text: ' ', type: 'text' }]
    };
  });
}
