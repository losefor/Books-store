import React from "react";
import Markdown from "react-markdown";

import Paragraph from "./Paragraph";
import Strong from "./Strong";
import InlineCode from "./InlineCode";
import ThematicBreak from "./ThematicBreak";
// import Code from "./Code";

export default function MarkdownComponent({ source }) {
  return (
    <Markdown
      source={source}
      unwrapDisallowed
      renderers={{
        inlineCode: InlineCode,
        strong: Strong,
        thematicBreak: ThematicBreak,
        // code:Code
      }}
    />
  );
}
