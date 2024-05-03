import storage from "./storageDatas";

// add event datas in databases;
const addEventDatas = async (data) => {
  const apiUrl = storage.getAPiUrl();
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ data: data }),
  };
  await fetch(`${apiUrl}/addEvents`, options);
  console.log(data);
};

// add details of components like start time end time, active time.
const addComponentDatas = async (data) => {
  const apiUrl = storage.getAPiUrl();
  const eventDatas = storage.getComponentDatas();
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ data: data }),
  };
  await fetch(`${apiUrl}/addComponentDatas`, options);
  console.log(data);
};

export default {
  addEventDatas: addEventDatas,
  addComponentDatas: addComponentDatas,
};
