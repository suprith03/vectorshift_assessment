import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => (
  <div
    style={{
      display: 'flex',
      gap: 12,
      padding: 12,
      background: 'rgba(2,6,23,0.7)',
      borderBottom: '1px solid #1e293b',
      backdropFilter: 'blur(6px)'
    }}
  >
    <DraggableNode type="input" label="Input" />
    <DraggableNode type="text" label="Text" />
    <DraggableNode type="llm" label="LLM" />
    <DraggableNode type="output" label="Output" />
  </div>
);
