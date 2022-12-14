import React from "react";
import { useState } from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
export default function Editor({ currentNote, updateNote }) {
  const [selectedTab, setSelectedTab] = useState("write");

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
    smoothLivePreview: true,
    emoji: true,
    excludeTrailingPunctuationFromURLs: true,
  });
  return (
    <section className="editor">
      <ReactMde
        value={currentNote.body}
        onChange={updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={80}
        heightUnits="vh"
        minPreviewHeight={71}
      />{" "}
    </section>
  );
}

