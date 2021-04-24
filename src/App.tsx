import { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import gfm from "remark-gfm";
import 'github-markdown-css'

const App = () => {
  const [textAreaValue, setTextAreaValue] = useState<string>('');

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%', height: '95vh' }}>
        <textarea style={{ width: '98%', height: '100%' }} value={textAreaValue} onChange={(e) => setTextAreaValue(e.currentTarget.value)} />
      </div>
      <div style={{ width: '50%', height: '95vh', overflow: 'scroll' }}>
        <div style={{ width: '100%', height: '100%' }} className="markdown-body">
          <ReactMarkdown remarkPlugins={[gfm]}>
            {textAreaValue}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
