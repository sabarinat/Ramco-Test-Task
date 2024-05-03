import queueDatas from './quemanagememt'

// shedule evennts of auto api call for store event datas - every 10 seconds
setInterval(() => {
  queueDatas.addEventQueue();
}, 10000)

// shedule events of auto api call - every 5 seconds
setInterval(() => {
  queueDatas.addComponentQueue();
}, 5000);