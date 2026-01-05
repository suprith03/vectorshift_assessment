import { useStore } from './store';

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const submit = async () => {
    const res = await fetch('http://localhost:8000/pipelines/parse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nodes, edges })
    });
    const data = await res.json();
    alert(
      `Nodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nDAG: ${data.is_dag}`
    );
  };

  return (
    <div style={{ position: 'fixed', bottom: 24, left: 24 }}>
      <button onClick={submit}>Submit</button>
    </div>
  );
};
