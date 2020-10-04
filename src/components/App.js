import React, { useState } from "react";
import "./App.css";
import "./editor/editor.css";
import Editor from "./editor/editor";

export default function App() {
  const [editorLanguage, setEditorLanguage] = useState("javascript");

  return (
    <div className="App">
      <h1>Editeur de code</h1>
        <legend>Séléctionnez un langage:</legend>
        <input
          type="radio"
          id="javascript"
          name="language"
          value="javascript"
          checked={editorLanguage === "javascript"}
          onChange={() => setEditorLanguage("javascript")}
        />
        <label htmlFor="javascript">JavaScript</label>
      <Editor language={editorLanguage} />
    </div>
  );
}