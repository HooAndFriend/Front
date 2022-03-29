import React, { useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { registerUser } from "../src/actions/user_action";
//import "./css/RegisterPage.css";

function RegisterPage(props) {
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (Password !== ConfirmPassword) {
      return alert("비밀번호 확인을 다시하세요.");
    }

    let body = {
      name: Name,
      email: Email,
      passWord: Password,
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.registerSuccess) {
        alert("회원가입 완료");
        props.history.push("/login");
      } else {
        alert("회원가입 실패");
      }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />

        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHandler} />

        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <label>Confirm Password</label>
        <input
          type="password"
          value={ConfirmPassword}
          onChange={onConfirmPasswordHandler}
        />
        <br />
        <button type="submit">회원 가입</button>
      </form>
    </div>
  );
}

export default RegisterPage;
