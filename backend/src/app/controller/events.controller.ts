import { Request, Response, ErrorRequestHandler, NextFunction } from "express";
import eventService from "../service/events.service";

const addNewEvents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await eventService.addNewEvents(req.body.data);
    res.status(200).json({ message: "Events added Successfully" });
  } catch (err) {
    next(err);
  }
};

// get event details by component
const getEventDetailsByComponent = async ( 
  req: Request,
  res: Response,
  next: NextFunction) => {
    try {
      const data = await eventService.getEventDetailsByComponent(Number(req.params.id));
      res.status(200).json({ message: "Events added Successfully", list: data });
    } catch(err) {
      next(err)
    }
  }

  // get event details by component event count
const getEventDetailsByComponentCount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //const param = {...req.query};
    const data = await eventService.getEventDetailsByComponentCount(Number(req.params.id));
    res.status(200).json({ message: "Events added Successfully", list: data });
  } catch (err) {
    next(err);
  }
};


export default {
  addNewEvents: addNewEvents,
  getEventDetailsByComponent: getEventDetailsByComponent,
  getEventDetailsByComponentCount: getEventDetailsByComponentCount,
};
