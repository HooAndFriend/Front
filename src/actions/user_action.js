import Axios from "axios";
import { REGISTER_USER } from "./types";
//import { request } from '../utils/axios';

export function registerUser(dataTosubmit) {
  const request = Axios.post("http://localhost:8080", dataTosubmit).then(
    (response) => response.data
  );
  //서버에 요청
  return {
    type: REGISTER_USER,
    payload: request,
  };
}
