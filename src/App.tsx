import { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import gfm from "remark-gfm";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism"

const App = () => {
  const [textAreaValue, setTextAreaValue] = useState<string>('');

  const components = {
    code: (props: any) => {
      return (<SyntaxHighlighter style={dracula} PreTag="div" children={String(props.children).replace(/\n$/, '')} {...props} />)
    }
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%', height: '80vh' }}>
        <textarea style={{ width: '98%', height: '100%' }} value={textAreaValue} onChange={(e) => setTextAreaValue(e.currentTarget.value)} />
      </div>
      <div style={{ width: '50%', height: '80vh' }}>
        <div style={{ width: '100%', height: '100%', border: '1px solid' }}>
          <ReactMarkdown remarkPlugins={[gfm]} components={components}>
            {textAreaValue}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
