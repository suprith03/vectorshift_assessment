import { BaseNode } from './BaseNode';

export const LLMNode = ({ id }) => (
  <BaseNode id={id} title="LLM" inputs={['prompt']} outputs={['response']}>
    <div>LLM</div>
  </BaseNode>
);
