import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, title, inputs, outputs, children }) => (
  <div
    style={{
      minWidth: 200,
      background: 'linear-gradient(180deg, #020617, #020617)',
      border: '1px solid #1e293b',
      borderRadius: 14,
      padding: 14,
      color: '#e5e7eb',
      boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
    }}
  >
    {inputs.map((h, i) => (
      <Handle
        key={h}
        type="target"
        position={Position.Left}
        id={`${id}-${h}`}
        style={{
          top: `${(i + 1) * 100 / (inputs.length + 1)}%`,
          background: '#3b82f6',
          width: 10,
          height: 10
        }}
      />
    ))}

    <div
      style={{
        fontWeight: 600,
        fontSize: 14,
        marginBottom: 8
      }}
    >
      {title}
    </div>

    <div style={{ fontSize: 13, color: '#94a3b8' }}>
      {children}
    </div>

    {outputs.map((h, i) => (
      <Handle
        key={h}
        type="source"
        position={Position.Right}
        id={`${id}-${h}`}
        style={{
          top: `${(i + 1) * 100 / (outputs.length + 1)}%`,
          background: '#22c55e',
          width: 10,
          height: 10
        }}
      />
    ))}
  </div>
);
