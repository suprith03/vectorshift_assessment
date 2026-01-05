export const DraggableNode = ({ type, label }) => {
  const onDragStart = (e) => {
    e.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify({ nodeType: type })
    );
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      style={{
        padding: '6px 10px',
        background: '#020617',
        border: '1px solid #1e293b',
        borderRadius: 8,
        color: '#e5e7eb',
        fontSize: 12,
        fontWeight: 500,
        cursor: 'grab',
        boxShadow: '0 4px 12px rgba(0,0,0,0.35)',
        userSelect: 'none'
      }}
    >
      {label}
    </div>
  );
};
