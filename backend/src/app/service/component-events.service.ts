import { ComponentEvent } from "../entities/compoenent-events.entities";
import { getConnection, getRepository } from "typeorm";

// track the component times datas
const addNewComponentTrack = async (componentDetails: ComponentEvent[]) => {
  const userRepositroy = getRepository(ComponentEvent);
  await userRepositroy.save(componentDetails);
  return;
};

//get component details
const getComponentDetails = async (pagination: any) => {
  const userRepositroy = getRepository(ComponentEvent);
  return await userRepositroy.find({
    where: {
      isOverall: false,
    },
    select: ["id", "component", "startTime", "endTime"],
  });
}

//get Overall details
const getOverallDetails = async () => {
  const userRepositroy = getRepository(ComponentEvent);
  return await userRepositroy.find({
    where: {
      isOverall: true
    },
    select: ["id", "component", "startTime", "endTime"],
  });
}

//get Overall details
const getComponentDetailsById = async (id: number) => {
  const userRepositroy = getRepository(ComponentEvent);
  return await userRepositroy.findOne({
    where: {
      id: id
    },
    select: ["id", "component", "startTime", "endTime"],
  });
}

// get component details by lists
const getComponentDetailsByOverall = async (id: number) => {
   const entityManager = getConnection().manager;
   const data = await getComponentDetailsById(id);
   if(data) {
    const startTime = data.startTime;
    const endTime = data.endTime;
    const entities = await entityManager
      .createQueryBuilder()
      .select(["id", "startTime", "component", "endTime"])
      .from(ComponentEvent, "events")
      .where("events.startTime >= :startTime AND events.startTime <= :endTime", {
        startTime: startTime,
        endTime: endTime,
      }).andWhere("isOverall = :overall", { overall: false })
      .getRawMany();
    return entities;
   } else {
    return []
   }
   
}

// get component details by counts
const getComponentDetailsByCount = async (id: number) => {
  const entityManager = getConnection().manager;
  const data = await getComponentDetailsById(id);
  if(data) {
   const startTime = data.startTime;
   const endTime = data.endTime;
   const entities = await entityManager
     .createQueryBuilder()
     .select(["component", "count(*) AS count"])
     .from(ComponentEvent, "events")
     .where("events.startTime >= :startTime AND events.startTime <= :endTime", {
       startTime: startTime,
       endTime: endTime,
     }).andWhere("isOverall = :overall", { overall: false })
     .groupBy("component")
     .getRawMany();
    let label = [];
    let count = [];
    for(let countValues of entities) {
      label.push(countValues.component);
      count.push(countValues.count);
    }
   return {label: label, count: count};
  } else {
   return {label: [], count: []};
  }
  
}

export default {
  addNewComponentTrack: addNewComponentTrack,
  getComponentDetails: getComponentDetails,
  getOverallDetails: getOverallDetails,
  getComponentDetailsByCount: getComponentDetailsByCount,
  getComponentDetailsById: getComponentDetailsById,
  getComponentDetailsByOverall: getComponentDetailsByOverall
};
