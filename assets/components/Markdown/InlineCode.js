import React from 'react'
// import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
// import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
export default function InlineCode({value}) {
    console.log(value)
    return (
        <code
        style={{
            backgroundColor:'rgba(0,0,0,0.04)',
            padding:3,
            borderRadius:4,
            color:'grey',
            fontWeight:600,
            margin:'0px 3px',
            border:'thin solid rgba(0,0,0,0.08)'

        }}

        >
            {value ?  value : '' }
        </code>
    )
}
