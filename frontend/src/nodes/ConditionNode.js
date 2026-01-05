import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id }) => (
  <BaseNode id={id} title="Condition" inputs={['value']} outputs={['true', 'false']}>
    <div>Conditional split</div>
  </BaseNode>
);
