import React from "react";
import PropTypes from "prop-types";
import CKEditor from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import styled from "styled-components";

import "./editor.css";

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 00px;
    > div {
      min-height: 400px;
    }
  }
`;
// const [showHtml, setShowHtml] = useState(false);
// const [data, setData] = useState("");
const configuration = {
  toolbar: {
    // item: [
    //     ],
    viewportTopOffset: 30,
    // fontSize:true
    // fontFamily:fontFamilyConfig
  },
  language: "zh",
};

// const builtinplugins=[]

// const showHtmlFun = useCallback(() => {
//   setshowHtml(true);
// }, [showHtml]);


const Editor = ({ onChange, name, value }) => {
//   useEffect(() => {
//     return () => {
//       setData(value);
//     };
//   }, [value]);

  return (
    <Wrapper>

        {/* <div style={showHtml ? "width:50%" : "width:100%"}> */}
          <button onClick={showHtmlFun}></button>
          <CKEditor
            onInit={(editor) => {
              // console.log("Editor is ready to use!", editor);
              console.log(Array.from(editor.ui.componentFactory.names()));

              // Insert the toolbar before the editable area.
              editor.ui
                .getEditableElement()
                .parentElement.insertBefore(
                  editor.ui.view.toolbar.element,
                  editor.ui.getEditableElement()
                );
            }}
            onChange={(event, editor) => {
              // console.log({ event, editor });
              const data = editor.getData();
              onChange({ target: { name, value: data } });
            }}
            editor={DecoupledEditor}
            data={value}
            config={configuration}
          />
        {/* </div> */}
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;
