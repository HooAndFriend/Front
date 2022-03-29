import { useState } from "react";
import styled from "styled-components";
import TextBox from "./TextBox";
import "./ImagePreview.scss";

const CreateListDiv = styled.div`
  padding: 0 auto;
  width: 50vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function TextEditor() {
  const [countList, setCountList] = useState([0]);

  const onAddDetailDiv = () => {
    let countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    countArr.push(counter); // index 사용 X
    // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용
    setCountList(countArr);
  };

  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "",
  });

  const [display, setDisplay] = useState({
    display: "none",
  });

  const saveImage = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    //const img = document.createElement("img");

    if (e.target.files[0]) fileReader.readAsDataURL(e.target.files[0]);

    fileReader.onload = () => {
      setImage({
        image_file: e.target.files[0],
        preview_URL: fileReader.result,
      });
      setDisplay({
        display: "block",
      });
    };

    //img.scr = image.preview_URL;
    //document.querySelector("#text").append(img);

    console.log(image.image_file);
    console.log(image.preview_URL);
  };

  return (
    <div className="uploader_wrapper">
      <div id="text" className="text_editor" contentEditable="true">
        <CreateListDiv>
          <TextBox className="editor" countList={countList} />
        </CreateListDiv>
        <div className="img_wrapper">
          <img src={image.preview_URL} style={display} />
        </div>
      </div>
      <div>
        <button onClick={onAddDetailDiv} style={{ marginRight: "10px" }}>
          Editor 추가
        </button>
        <input type="file" accept="image/*" onChange={saveImage} />
      </div>
    </div>
  );
}

export default TextEditor;
