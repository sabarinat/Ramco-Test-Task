import storage from './storageDatas';
import commondatas from './commondatas';
import queueData from './quemanagememt'

const handleLoadEvents = () => {
    try {
      let currentComponent = window.location.pathname;
      if(currentComponent) {
         storage.setCurrentComponent(currentComponent);
         storage.setCurrentComponentStartTime(currentComponent);
         const currentDate = commondatas.getCurrentDate();
         storage.setOverallStartTime(currentDate);
      }
    } catch(err) {

    }
   
}

const handleUnloadBeforeEvent = () => {
    try {

        const getCurrentDate = commondatas.getCurrentDate();
        const overallStartTime = storage.getOverallStartTime();
        const currentCompoent = storage.getCurrentComponent();
        const updateDatas = {
          isOverall: 1,
          startTime: overallStartTime,
          endTime: getCurrentDate,
          component: currentCompoent,
        };
        storage.addComponentDatas(updateDatas);
        queueData.addComponentQueue();
        queueData.addEventQueue();
    } catch(err) {
        console.log('data')
    }

}

const handleWindowEvents = [
  { events: "load", eventHandle: handleLoadEvents },
  { events: "beforeunload", eventHandle: handleUnloadBeforeEvent }]
  export default handleWindowEvents;

