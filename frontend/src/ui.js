import { useRef, useCallback } from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';

import { useStore } from './store';

import { InputNode } from './nodes/InputNode';
import { TextNode } from './nodes/TextNode';
import { LLMNode } from './nodes/LLMNode';
import { OutputNode } from './nodes/OutputNode';

import { ConditionNode } from './nodes/ConditionNode';
import { MergeNode } from './nodes/MergeNode';
import { DelayNode } from './nodes/DelayNode';
import { JSONNode } from './nodes/JSONNode';
import { MathNode } from './nodes/MathNode';

const nodeTypes = {
  input: InputNode,
  text: TextNode,
  llm: LLMNode,
  output: OutputNode,

  condition: ConditionNode,
  merge: MergeNode,
  delay: DelayNode,
  json: JSONNode,
  math: MathNode
};

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);

  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect
  } = useStore();

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const data = event.dataTransfer.getData('application/reactflow');
      if (!data) return;

      const { nodeType } = JSON.parse(data);
      if (!nodeType) return;

      const bounds = reactFlowWrapper.current.getBoundingClientRect();
      const position = {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top
      };

      const id = getNodeID(nodeType);

      addNode({
        id,
        type: nodeType,
        position,
        data: {}
      });
    },
    [addNode, getNodeID]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <div
      ref={reactFlowWrapper}
      style={{
        width: '100%',
        height: '70vh',
        background: 'radial-gradient(circle at top, #020617, #020617)'
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView
      >
        <Background gap={24} color="#005cf1ff" />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};
