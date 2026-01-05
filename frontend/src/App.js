import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

export default function App() {
  return (
    <>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </>
  );
}
