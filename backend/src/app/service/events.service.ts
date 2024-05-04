import { getRepository, getConnection } from "typeorm";
import { Events } from "../entities/events.entities";
import { GetComponentQuery } from "../interface/common.interface";
import serviceComponent from "./component-events.service";

// add events
const addNewEvents = async (events: Events[]) => {
  const userRepositroy = getRepository(Events);
  await userRepositroy.save(events);
  return;
};

// get Events
const getEventDetailsByComponent = async (id: number) => {
  const data = await serviceComponent.getComponentDetailsById(id);
  if(data) {
    const entityManager = getConnection().manager;
  const startTime = data.startTime;
  const endTime = data.endTime;
  const component = data.component;
  const entities = await entityManager
    .createQueryBuilder()
    .select(["id", "time", "component", "event"])
    .addSelect("DATE_FORMAT(time, '%Y-%m-%d %H:%i:%s')", 'time')
    .from(Events, "events")
    .where("events.time >= :startTime AND events.time <= :endTime", {
      startTime: startTime,
      endTime: endTime,
    }).andWhere("component = :component", { component: component })
    .getRawMany();
  return entities;
  } else {
    return []
  }
  
  // const userRepositroy = getRepository(Events);
  // await userRepositroy.find({
  //   where: {
  //     component: data.compoenent,
  //     time :
  //   }
  //})
};

// get Events count by component
const getEventDetailsByComponentCount = async (id: number) => {
  const entityManager = getConnection().manager;
  const data = await serviceComponent.getComponentDetailsById(id);
  if(data) {
    const startTime = data.startTime;
  const endTime = data.endTime;
  const component = data.component;
  const entities: any = await entityManager
    .createQueryBuilder()
    .select(["event", "count(*) AS count"])
    .from(Events, "events")
    .where("events.time >= :startTime AND events.time <= :endTime", {
      startTime: startTime,
      endTime: endTime,
    })
    .andWhere("component = :component", { component: component })
    .groupBy("event")
    .getRawMany()
    // .getMany();
  let label = [];
  let count = [];
  for (let countValues of entities) {
    label.push(countValues.event);
    count.push(countValues.count);
  }
  
  return {label: label, count: count};
  } else {
    return {label: [], count: []};
  }
  
};

export default {
  addNewEvents: addNewEvents,
  getEventDetailsByComponent: getEventDetailsByComponent,
  getEventDetailsByComponentCount: getEventDetailsByComponentCount,
};
