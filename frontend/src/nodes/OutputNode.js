import { BaseNode } from './BaseNode';

export const OutputNode = ({ id }) => (
  <BaseNode id={id} title="Output" inputs={['value']} outputs={[]}>
    <div>Output</div>
  </BaseNode>
);
