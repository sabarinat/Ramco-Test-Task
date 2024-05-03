// Remove the line below to fix the parsing error
import storage from "./src/storageDatas";
import handleWindowEvents from "./src/handleWindowsEvent";
import handleDocumentEvents from "./src/handleDocumentevent";
import "./src/automate-events";

export const setUrl = storage.setApiUrl;
(function () {
  handleWindowEvents.forEach((eventData) => {
    window.addEventListener(eventData.events, eventData.eventHandle);
  });
  //   window.addEventListener("load", function () {
  //     const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');

  //   });
  handleDocumentEvents.forEach((eventData) => {
    document.addEventListener(eventData.events, eventData.eventHandle);
  });
  //   document.addEventListener("click", function () {
  //     console.log("clicked");
  //     if (document.visibilityState === "hidden") {
  //       screenOutTime = Date.now();
  //       sendDataToServer({ screenInTime, screenOutTime });
  //     } else {
  //       screenInTime = Date.now();
  //     }
  //   });

  //   document.addEventListener("unload", function () {
  //     if (document.visibilityState === "hidden") {
  //       screenOutTime = Date.now();
  //       sendDataToServer({ screenInTime, screenOutTime });
  //     } else {
  //       screenInTime = Date.now();
  //     }
  //   });
  //   window.addEventListener("beforeunload", function () {
  //     screenOutTime = Date.now();
  //     sendDataToServer({ screenInTime, screenOutTime });
  //   });

  //   function sendDataToServer(data) {
  //     // Send interaction data to the server
  //     // You can use XMLHttpRequest, fetch API, or any other method to send data
  //     console.log("Sending data to server:", data);
  //   }

  //   window.addEventListener("popstate", () => {
  //     console.log("popstate event triggered");
  //     screenOutTime = Date.now();
  //     sendDataToServer({ screenInTime, screenOutTime });
  //   });

  //   document.addEventListener("DOMContentLoaded", function () {
  //     // This function will be executed when the DOM content is fully loaded
  //     console.log("DOM content has been loaded");

  //     // Access and manipulate the DOM as needed
  //     const element = document.getElementById("example");
  //     if (element) {
  //       element.textContent = "DOM content loaded!";
  //     }
  //   });
})();
