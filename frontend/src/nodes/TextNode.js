import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id }) => {
  const [text, setText] = useState('');
  const vars = [...new Set((text.match(/\{\{(\w+)\}\}/g) || []).map(v => v.replace(/[{}]/g, '')))];
  return (
    <BaseNode id={id} title="Text" inputs={vars} outputs={['out']}>
      <textarea value={text} onChange={e => setText(e.target.value)} />
    </BaseNode>
  );
};
