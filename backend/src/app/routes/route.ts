import express from 'express';
import bookController from '../controller/events.controller';
import { middleware } from '../common/authorizarion';
import eventController from '../controller/events.controller';
import componentEventContorller from '../controller/component-event.controller'
const router = express.Router();

router.post("/addEvents", eventController.addNewEvents);
router.post(
  "/addComponentDatas",
  componentEventContorller.addNewComponentTracks
);
router.get(
  "/getComponentDetails",
  componentEventContorller.getComponentDetails
);

router.get(
  "/getComponentDetailsByCount/:id",
  componentEventContorller.getComponentDetailsByCount
);

router.get(
  "/getComponentDetailsByOverall/:id",
  componentEventContorller.getComponentDetailsByOverall
);

router.get(
  "/getOverAllDetails",
  componentEventContorller.getOverAllDetails
);

router.get(
  "/getEventDetailsByComponent/:id",
  eventController.getEventDetailsByComponent
);

router.get(
  "/getEventDetailsByComponentCount/:id",
  eventController.getEventDetailsByComponentCount
);


export default router;