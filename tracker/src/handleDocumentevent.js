import storage from "./storageDatas";
import commondatas from "./commondatas";

// close component;
const newOPenComponent = async (previousComponent, currentPath) => {
  const getCurrentDate = commondatas.getCurrentDate();
  const currentComponentStartTime = storage.getCurrentComponentStartTime();
  const updateDatas = {
    isOverall: 0,
    startTime: currentComponentStartTime,
    endTime: getCurrentDate,
    component: previousComponent,
  };
  storage.addComponentDatas(updateDatas);
  storage.setCurrentComponent(currentPath);
  storage.setCurrentComponentStartTime(getCurrentDate);
};

//handle click events
const handleClicks = async () => {
  try {
    console.log("clicckss");
    const currentPath = window.location.pathname;
    const previousComponent = storage.getCurrentComponent();
    if (currentPath === previousComponent) {
      const currentTime = commondatas.getCurrentDate();
      const datas = {
        event: "click",
        time: currentTime,
        component: currentPath,
      };
      storage.setActionDatas(datas);
    } else {
      await newOPenComponent(previousComponent, currentPath);
    }
  } catch (err) {}
};

// handle mouseOver evnts
const handleMouseOver = () => {
  const currentPath = window.location.pathname;
  const currentTime = commondatas.getCurrentDate();
  const datas = {
    event: "mouseover",
    time: currentTime,
    component: currentPath,
  };
  storage.setActionDatas(datas);
};

const handleKeyDown = (document) => {
  const currentPath = window.location.pathname;
  const currentTime = commondatas.getCurrentDate();
  const datas = {
    event: "keydown",
    time: currentTime,
    component: currentPath,
  };
  storage.setActionDatas(datas);
};

const handlesEvnets = [
  { events: "click", eventHandle: handleClicks },
  { events: "mouseover", eventHandle: handleMouseOver },
  { events: "keydown", eventHandle: handleKeyDown },
];
export default handlesEvnets;
