import { BaseNode } from './BaseNode';

export const MathNode = ({ id }) => (
  <BaseNode id={id} title="Math" inputs={['a', 'b']} outputs={['result']}>
    <div>Math operation</div>
  </BaseNode>
);
