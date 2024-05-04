import axios from "axios";
import { APIURL } from "./common-datas";


export const getComponentDetailsByOverall = async (component) => {
    const data = await axios.get(
      `${APIURL}/getComponentDetailsByOverall/${component}`
    );
    return data.data.list;
  };
  
  export const getComponentDetailsByCount = async (component) => {
    const data = await axios.get(
      `${APIURL}/getComponentDetailsByCount/${component}`
    );
    return data.data.list;
  };
  