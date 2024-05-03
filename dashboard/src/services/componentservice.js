import axios from "axios";
const APIURL = "http://localhost:3001";

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
  