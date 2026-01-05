import { useState, useRef, useEffect } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id }) => {
  const [text, setText] = useState('');
  const textareaRef = useRef(null);

  const vars = [...new Set(
    (text.match(/\{\{(\w+)\}\}/g) || []).map(v =>
      v.replace(/[{}]/g, '')
    )
  )];

  useEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }, [text]);

  return (
    <BaseNode id={id} title="Text" inputs={vars} outputs={['out']}>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter prompt… use {{variables}}"
        style={{
          width: '100%',
          minHeight: 60,
          maxHeight: 240,
          overflow: 'hidden',
          resize: 'none',
          background: '#020617',
          color: '#e5e7eb',
          border: '1px solid #1e293b',
          borderRadius: 8,
          padding: 8,
          fontSize: 13,
          lineHeight: 1.4
        }}
      />
    </BaseNode>
  );
};
