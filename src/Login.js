import axios from "axios";
import React, { useCallback, useState } from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const [, updateState] = useState();
  const forcedUpdate = useCallback(() => updateState({}), []);

  const RequestSubmit = (e) => {
    axios({
      method: "post",
      url: "http://3.38.94.62:8080/auth/login",
      data: {
        id: id,
        pw: password,
      },
    })
      .then((res) => {
        setResult(res.data.result);
        console.log(result);
        if (result && id === "admin" && password === "1234") {
          navigate("/AdminPage");
        }
      })
      .then(forcedUpdate);
  };

  //구글 로그인 뒤 유저 프로필 콘솔로 띄우기
  const onSignedUp = (googleUser) => {
    const profile = googleUser.getBasicProfile();
    console.log("ID : " + profile.getId() + "\nName : " + profile.getName());
  };

  return (
    <div className="Container">
      <div className="Contents">
        <div className="login">
          <input
            id="id"
            name="idName"
            onChange={(e) => setID(e.currentTarget.value)}
          />
        </div>
        <div>
          <input
            id="password"
            type="password"
            name="psName"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <div>
          <button className="Button" onClick={RequestSubmit}>
            submitBtn
          </button>
        </div>
        <div>
          <GoogleLogin
            clientId="832526028844-f7evg08sbfamutgshimbtg5joio2d6ih.apps.googleusercontent.com"
            cookiePolicy="single_host_origin"
            onSuccess={(result) => onSignedUp(result)}
            onFailure={(result) => console.log(result)}
          />
        </div>
        <div>
          <button className="Button">appleBtn</button>
        </div>
        <div>
          <button className="Button">registerBtn</button>
        </div>
        <div>
          id : {id}, password : {password}
        </div>
      </div>
    </div>
  );
};

export default Login;
