import { BaseNode } from './BaseNode';

export const MergeNode = ({ id }) => (
  <BaseNode id={id} title="Merge" inputs={['a', 'b']} outputs={['out']}>
    <div>Merge inputs</div>
  </BaseNode>
);
