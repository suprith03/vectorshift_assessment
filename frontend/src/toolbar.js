import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => (
  <div style={{ display: 'flex', gap: 10, padding: 10 }}>
    <DraggableNode type="input" label="Input" />
    <DraggableNode type="text" label="Text" />
    <DraggableNode type="llm" label="LLM" />
    <DraggableNode type="output" label="Output" />
  </div>
);
