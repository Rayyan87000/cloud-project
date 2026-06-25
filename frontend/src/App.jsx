import { useRef, useMemo } from "react";
import './App.css';
import Editor from '@monaco-editor/react';
import { MonacoBinding } from 'y-monaco';
import * as Y from "yjs";
import { SocketIOProvider } from "y-socket.io";


//socketIO user ko server se connect krta hai
//monacoBinding user aur editor ko connect krta hai using jys
function App() {
  const editorRef = useRef(null);

  const ydoc = useMemo(() => new Y.Doc(), []);
  const yText = useMemo(() => ydoc.getText("monaco"), [ydoc]);

  const handleMount = (editor) => {
    editorRef.current = editor;

    const provider = new SocketIOProvider(
      "http://localhost:3000",
      "monaco",
      ydoc,
      { autoConnect: true }
    );

    const monacoBinding=new MonacoBinding(
      yText,
      editorRef.current.getModel(),
      new Set([editorRef.current]),
      provider.awareness
    )
  }

  return (
    <main className="h-screen w-full bg-gray-950 flex gap-4 p-4">
      <aside className="h-full w-1/4 bg-amber-50 rounded-lg"></aside>

      <section className="h-full w-3/4 bg-neutral-800 rounded-lg overflow-hidden">
        <Editor
          height="100%"
          width="100%"
          defaultLanguage="javascript"
          theme="vs-dark"
          defaultValue="// Start coding..."
          onMount={handleMount}
        />
      </section>
    </main>
  );
}

export default App;