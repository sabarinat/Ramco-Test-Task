import axios from "axios";
import { APIURL } from "./common-datas";

export const getComponent = async () => {
  console.log("apiurl", APIURL, process.env);
  const data = await axios.get(`${APIURL}/getComponentDetails`);
  return data.data.list;
};

export const getOverallComponent = async () => {
    const data = await axios.get(`${APIURL}/getOverAllDetails`);
    return data.data.list;
}

export const getEventDetailsByComponentCount = async (component) => {
  const data = await axios.get(
    `${APIURL}/getEventDetailsByComponentCount/${component}`
  );
  return data.data.list;
};

export const getEventDetailsByComponent = async (component) => {
  const data = await axios.get(
    `${APIURL}/getEventDetailsByComponent/${component}`
  );
  return data.data.list;
};


