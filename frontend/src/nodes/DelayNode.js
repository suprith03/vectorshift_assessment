import { BaseNode } from './BaseNode';

export const DelayNode = ({ id }) => (
  <BaseNode id={id} title="Delay" inputs={['in']} outputs={['out']}>
    <div>Delay execution</div>
  </BaseNode>
);
