import { BaseNode } from './BaseNode';

export const InputNode = ({ id }) => (
  <BaseNode id={id} title="Input" inputs={[]} outputs={['value']}>
    <div>Input</div>
  </BaseNode>
);
