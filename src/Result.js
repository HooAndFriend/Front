import React, { useCallback, useState } from "react";
import axios from "axios";

const Item = ({ index, title, content }) => {
  return (
    <div>
      <div>{index}</div>
      <div>{title}</div>
      <br />
    </div>
  );
};

Item.defaultProps = {
  index: 0,
  title: "nonamed",
  contents: "nocontents",
};

const Result = () => {
  const [key, setKey] = useState("");
  let [temp, setTemp] = useState([]);
  const [, updateState] = useState();
  const forcedUpdate = useCallback(() => updateState({}), []);

  const callApi = () => {
    axios({
      method: "post",
      url: "http://3.38.94.62:8080/content",
      data: {
        keyword: key,
      },
    })
      .then((res) => {
        const result = res.data.result;
        for (let i = 0; i < result.length; i++) {
          temp[i] = result[i];
        }
        result ? console.log(result[0].title) : console.log("false");
      })
      .then(forcedUpdate);
  };

  return (
    <div>
      <input onChange={(e) => setKey(e.currentTarget.value)}></input>
      <button onClick={callApi}></button>
      <div>
        {temp.map((i, index) => (
          <Item index={index + 1} title={i.title} />
        ))}
      </div>
    </div>
  );
};

export default Result;
