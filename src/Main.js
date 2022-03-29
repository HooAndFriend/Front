import React from "react";
import { Link } from "react-router-dom";
import "./css/Main.css";

const Main = (props) => {
  const Search = (e) => {
    if (e.key == "Enter") {
      let form = document.getElementById("f");
      alert(e.target.value);
      form.submit();
    }
  };

  return (
    <div className="Container">
      <div className="Contents">
        <div className="FstClm">
          <p className="Title">Code Name</p>
        </div>
        <div className="SecClm">
          <form id="f">
            <input
              className="SearchBar"
              onKeyPress={Search}
              placeholder="Code 검색 또는 입력"
            ></input>
          </form>
        </div>
        <div className="TrdClm">
          <div className="Circle"></div>
          <div className="Circle"></div>
          <div className="Circle"></div>
        </div>
        <div>
          <ul>
            <li>태욱</li>
            <li>
              <Link to={"/AdminPage"}>어드민 페이지</Link>
            </li>
            <li>
              <Link to={"/Login"}>로그인</Link>
            </li>
            <li>
              <Link to={"/Result"}>결과창</Link>
            </li>
            <li>태현, 세진</li>
            <li>
              <Link to={"/Text"}>텍스트</Link>
            </li>
            <li>예린</li>
            <li>
              <Link to={"/RegisterPage"}>회원가입</Link>
            </li>
            <li>
              <Link to={"/Update"}>업데이트</Link>
            </li>
          </ul>
        </div>
        <div className="FthClm"></div>
      </div>
    </div>
  );
};

export default Main;
