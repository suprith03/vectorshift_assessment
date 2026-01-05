import { BaseNode } from './BaseNode';

export const JSONNode = ({ id }) => (
  <BaseNode id={id} title="JSON" inputs={['input']} outputs={['parsed']}>
    <div>Parse JSON</div>
  </BaseNode>
);
