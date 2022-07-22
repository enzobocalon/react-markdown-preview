import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import './Editor.css'

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

`;


const Editor = () => {

  const [code, setCode] = useState('')

  useEffect(() => {
    setCode(placeholder)

  }, [])

  return (
    <div className='container'>
        <div className='editor-container'>
            <span>Editor</span>
            <textarea id='editor' value={code} onChange={(e) => setCode(e.target.value)}/>
        </div>
        <div className='preview-container'>
            <span>Preview</span>
            <div id='preview'>
                <ReactMarkdown children={code} className='code'/>
            </div>
        </div>
    </div>
    
  )
}

export default Editor