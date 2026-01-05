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
      style={{ padding: 10, background: '#111827', borderRadius: 6 }}
    >
      {label}
    </div>
  );
};
