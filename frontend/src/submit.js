import { useStore } from './store';

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const submit = async () => {
    const res = await fetch('http://localhost:8000/pipelines/parse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nodes, edges })
    });
    alert(JSON.stringify(await res.json(), null, 2));
  };

  return <button onClick={submit}>Submit</button>;
};
