import React from "react";
import Editor from "@monaco-editor/react";

// const DetailDiv = styled.div`
//  div{
//   margin-bottom: 2rem;
//  }
//  `
//const { TextArea } = Input

function TextBox(props) {
  return (
    <div>
      {props.countList &&
        props.countList.map((item, i) => (
          <div key={i}>
            <div
              style={{
                width: "50vw",
                height: "20vh",
                style: 'background-color="red"',
              }}
            >
              <Editor
                width="50vw"
                heigth="100vh"
                theme="vs-dark"
                defaultLanguage="react"
              />
            </div>
          </div>
        ))}
    </div>
  );
}
export default TextBox;

//   return (
//     <DatailDiv>
//       {PaymentResponse.countList && PaymentResponse.countList.map((item,i) => (
//       <div  key={i}>
//           <div style={{width: '500px', height: '300px',  margin:'auto'}}>
//               <Editor
//                 height='100vh'
//                 theme='vs-dark'
//                 defaultLanguage='react'
//               />
//           </div>
//       </div>
//       ))}
//     </DatailDiv>
//   );
// }
