import { NextFunction, Request, Response} from "express";
import componentService from "../service/component-events.service";

// add new components
const addNewComponentTracks = async (req: Request, res: Response, next: NextFunction) => {
  try {
     await componentService.addNewComponentTrack(req.body.data);
  res.status(200).json({ message: "component tracker added Successfully" });
  } catch(err) {
    next(err);
  }
  
};

//get component details
const getComponentDetails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const componentData = await componentService.getComponentDetails(req.query);
    res
      .status(200)
      .json({
        message: "component tracker added Successfully",
        list: componentData,
      });
    return componentData;
  } catch(err) {
    next(err)
  }
}

//get overall details
//get component details
const getOverAllDetails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const componentData = await componentService.getOverallDetails();
    res
      .status(200)
      .json({
        message: "component tracker Fetched Successfully",
        list: componentData,
      });
    return componentData;
  } catch(err) {
    next(err)
  }
}

//get component details counts
const getComponentDetailsByOverall = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const componentData = await componentService.getComponentDetailsByOverall(Number(req.params.id));
    res.status(200).json({
      message: "component tracker Fetched Successfully",
      list: componentData,
    });
    return componentData;
  } catch (err) {
    next(err);
  }
};

//get component details counts
const getComponentDetailsByCount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const componentData = await componentService.getComponentDetailsByCount(Number(req.params.id));
    res.status(200).json({
      message: "component tracker Fetched Successfully",
      list: componentData,
    });
    return componentData;
  } catch (err) {
    next(err);
  }
};

export default {
  addNewComponentTracks: addNewComponentTracks,
  getComponentDetails: getComponentDetails,
  getOverAllDetails: getOverAllDetails,
  getComponentDetailsByCount: getComponentDetailsByCount,
  getComponentDetailsByOverall: getComponentDetailsByOverall
};
