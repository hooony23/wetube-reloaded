import express from "express";
import { see, edit, upload, deleteVideo } from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id/edit(\\d+)", edit);
videoRouter.get("/:id/delete(\\d+)", deleteVideo);
videoRouter.get("/upload", upload);

export default videoRouter;
