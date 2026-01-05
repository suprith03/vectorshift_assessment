import { useRef, useCallback } from 'react';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

import { useStore } from './store';
import { InputNode } from './nodes/InputNode';
import { TextNode } from './nodes/TextNode';
import { LLMNode } from './nodes/LLMNode';
import { OutputNode } from './nodes/OutputNode';

const nodeTypes = {
  input: InputNode,
  text: TextNode,
  llm: LLMNode,
  output: OutputNode
};

export const PipelineUI = () => {
  const ref = useRef(null);
  const { nodes, edges, getNodeID, addNode, onNodesChange, onEdgesChange, onConnect } = useStore();

  const onDrop = useCallback((e) => {
    e.preventDefault();
    const { nodeType } = JSON.parse(e.dataTransfer.getData('application/reactflow'));
    addNode({ id: getNodeID(nodeType), type: nodeType, position: { x: 100, y: 100 }, data: {} });
  }, [addNode, getNodeID]);

  return (
    <div ref={ref} style={{ height: '70vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={e => e.preventDefault()}
      />
    </div>
  );
};
