import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, title, inputs, outputs, children }) => (
  <div style={{ padding: 10, border: '1px solid #334155', borderRadius: 8 }}>
    {inputs.map((h) => (
      <Handle key={h} type="target" position={Position.Left} id={`${id}-${h}`} />
    ))}
    <strong>{title}</strong>
    {children}
    {outputs.map((h) => (
      <Handle key={h} type="source" position={Position.Right} id={`${id}-${h}`} />
    ))}
  </div>
);
