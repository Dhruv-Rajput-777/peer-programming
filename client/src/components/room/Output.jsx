import React from "react";

import { useSelector } from "react-redux";

const Output = () => {
  const EditorTheme = useSelector((state) => state.editorThemeReducer);
  const output = useSelector((state) => state.outputFileReducer);

  return (
    <div className="" style={{ flexGrow: 1 }}>
      {EditorTheme == "dark" ? (
        <textarea
          className="text-xs p-2 text-white"
          style={{
            flexGrow: 1,
            minWidth: "100%",
            minHeight: "100%",
            resize: "none",
            outline: "none",
            backgroundColor: "#282c34",
          }}
          placeholder="OUTPUT"
          value={output}
          readOnly={true}
        ></textarea>
      ) : (
        <textarea
          className="text-xs p-2"
          style={{
            flexGrow: 1,
            minWidth: "100%",
            minHeight: "100%",
            resize: "none",
            outline: "none",
          }}
          placeholder="OUTPUT"
          value={output}
          readOnly={true}
        ></textarea>
      )}
    </div>
  );
};

export default Output;
