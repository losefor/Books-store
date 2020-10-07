import React from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default function InlineCode({value,language}) {
    // console.log(props)
    return (
        <SyntaxHighlighter
        style={base16AteliersulphurpoolLight}
        language={language ? language : ''}
        showLineNumbers
        >
            {value ?  value : '' }
        </SyntaxHighlighter>
    )
}
