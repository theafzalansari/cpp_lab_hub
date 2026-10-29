import React, { useState } from 'react';
import { Copy, Check, Download, FileCode } from 'lucide-react';
import { highlightCppCode } from '../utils/syntaxHighlight';

interface CodeBlockProps {
  code: string;
  filename?: string;
  showToolbar?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  filename = 'program.cpp',
  showToolbar = true
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/x-c++src' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const highlightedLines = highlightCppCode(code);
  const lineCount = highlightedLines.length;

  return (
    <div className="code-container">
      {showToolbar && (
        <div className="code-toolbar">
          <div className="code-file-info">
            <FileCode size={15} color="#8B5CF6" />
            <span>{filename}</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
              ({lineCount} lines)
            </span>
          </div>

          <div className="code-actions-group">
            <button
              type="button"
              className={`action-btn ${copied ? 'copied' : ''}`}
              onClick={handleCopy}
              title="Copy source code to clipboard"
              aria-label="Copy code"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>

            <button
              type="button"
              className="action-btn"
              onClick={handleDownload}
              title="Download standalone C++ source file"
              aria-label="Download C++ file"
            >
              <Download size={14} />
              <span>Download .cpp</span>
            </button>
          </div>
        </div>
      )}

      <div className="code-scroll-area">
        {highlightedLines.map((line) => (
          <div key={line.lineNumber} className="code-line">
            <span className="line-number">{line.lineNumber}</span>
            <span className="line-content">
              {line.tokens.map((token, idx) => (
                <span key={idx} className={`token-${token.type}`}>
                  {token.text}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
