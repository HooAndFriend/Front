import { useState } from "react";
import "./ImagePreview.scss";

function ImagePreview() {
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
      <input type="file" accept="image/*" onChange={saveImage} multiple />
      <div id="text" contentEditable="true"></div>
      <img src={image.preview_URL} style={display} />
    </div>
  );
}

export default ImagePreview;
