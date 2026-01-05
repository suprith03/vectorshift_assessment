import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      padding: 12,
      background: 'rgba(2,6,23,0.7)',
      borderBottom: '1px solid #ffffffff'
    }}
  >
    <DraggableNode type="input" label="Input" />
    <DraggableNode type="text" label="Text" />
    <DraggableNode type="llm" label="LLM" />
    <DraggableNode type="output" label="Output" />

    <DraggableNode type="condition" label="Condition" />
    <DraggableNode type="merge" label="Merge" />
    <DraggableNode type="delay" label="Delay" />
    <DraggableNode type="json" label="JSON" />
    <DraggableNode type="math" label="Math" />
  </div>
);
