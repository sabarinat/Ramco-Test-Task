import async from "async";
import storage from "./storageDatas";
import apiService from "./api-service";

// queue for event like click, mouse over
const eventQueue = async.queue(async () => {
  const eventDatas = storage.getActionDatas();
  storage.setCacheEventDatas(); // logic is used to recahe the datas for exiting, because it avoid dublicate data updations.
  storage.clearActionDatas();
  try {
    if (eventDatas && eventDatas.length) {
      await apiService.addEventDatas(eventDatas);
    }
    storage.clearCacheEventdDatas();
  } catch (err) {
    storage.revokeEventDatas();
    console.log(err);
  }
}, 1);

// event for component directions
const componentQueue = async.queue(async () => {
  const eventDatas = storage.getComponentDatas();
  storage.setCacheCompoenentDatas();
  storage.clearComponentDatas();
  try {
    if (eventDatas && eventDatas.length) {
      await apiService.addComponentDatas(eventDatas);
    }

    storage.clearCacheCompoenetDatas();
  } catch (err) {
    storage.revokeComponentDatas(); // for recahing the datas while getting error.
    console.log(err);
  }
});

// push in event queue
const addEventQueue = () => {
  eventQueue.push();
};

// add in component event queue
const addComponentQueue = () => {
  componentQueue.push();
};

export default {
  addEventQueue: addEventQueue,
  addComponentQueue: addComponentQueue,
};
