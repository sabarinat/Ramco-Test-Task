let currentComponent = '';
let actionDatas = [];
let currentComponentStartTime = '';
let overAllTime = '';
let apiUrl = 'http://localhost:3001';
let componentDatas = [];
let cacheEventdatas = [];
let cacheCompoenentDatas = [];
// cache the event datas
const setCacheEventDatas = () => {
   cacheEventdatas = getActionDatas();
}

// clear the datas
const clearCacheEventdDatas = () => {
  cacheEventdatas = [];
}

//catch the componentDatas
// cache the event datas
const setCacheCompoenentDatas = (data) => {
   cacheCompoenentDatas = getComponentDatas();
}

// clear the datas
const clearCacheCompoenetDatas = () => {
  cacheCompoenentDatas = [];
}

//set api url
const setApiUrl = (url) => {
    apiUrl = url;
}

const getAPiUrl = () => {
    return apiUrl;
}

// set the overall start times
const setOverallStartTime = (time) => {
    overAllTime = time;
}

//
const getOverallStartTime = () => {
    return overAllTime;
}

// set currentCompoent start Time
const setCurrentComponentStartTime = (time) => {
     currentComponentStartTime = time;
}

//
const getCurrentComponentStartTime = (time) => {
     return currentComponentStartTime;
}

// store the component
const setCurrentComponent = (component) => {
     currentComponent = component;
}

//get currentComponent
const getCurrentComponent = () => {
    return currentComponent;
}

//set actionDatas
const setActionDatas = (actiondata) => {
    actionDatas.push(actiondata);
}

// get action datas;
const getActionDatas = () => {
    return [...actionDatas];
}

// clear action datas
const clearActionDatas = () => {
    actionDatas = [];
}

//add component datas
const addComponentDatas = (data) => {
    componentDatas.push(data);
}

//get componentDatas
const getComponentDatas = () => {
    return [...componentDatas];
}

// clear  componentDatas
const clearComponentDatas = () => {
    componentDatas = [];
}

const revokeEventDatas = () => {
    actionDatas = [...cacheEventdatas, ...actionDatas];
    clearCacheEventdDatas();
}

const revokeComponentDatas = () => {
    componentDatas = [...cacheCompoenentDatas, ...componentDatas];
    clearCacheCompoenetDatas();
}

export default {
  setCurrentComponent: setCurrentComponent,
  getCurrentComponent: getCurrentComponent,
  setActionDatas: setActionDatas,
  getActionDatas: getActionDatas,
  clearActionDatas: clearActionDatas,
  setCurrentComponentStartTime: setCurrentComponentStartTime,
  getCurrentComponentStartTime: getCurrentComponentStartTime,
  setOverallStartTime: setOverallStartTime,
  getOverallStartTime: getOverallStartTime,
  setApiUrl: setApiUrl,
  getAPiUrl: getAPiUrl,
  addComponentDatas: addComponentDatas,
  getComponentDatas: getComponentDatas,
  clearComponentDatas: clearComponentDatas,
  revokeEventDatas: revokeEventDatas,
  revokeComponentDatas: revokeComponentDatas,
  setCacheEventDatas: setCacheEventDatas,
  setCacheCompoenentDatas: setCacheCompoenentDatas,
  clearCacheEventdDatas: clearCacheEventdDatas,
  clearCacheCompoenetDatas: clearCacheCompoenetDatas,
};