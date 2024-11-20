import axios from "axios";
import { io } from "socket.io-client";

const API_URL = process.env.REACT_APP_API_BASE_URL;
const PENDING_STATUS = "Pending";
const VIDEO_STATUS = "video_status";
const JOIN_ROOM = "join_room";

export const useVideoProcessing = (userId) => {
  const socket = io(API_URL, { autoConnect: false });

  const uploadVideo = async (onStatusUpdate, onError) => {
    if (!userId) {
      onError("UserId not found");
      return;
    }

    try {
      socket.connect();
      socket.emit(JOIN_ROOM, userId);

      await axios.post(
        `${API_URL}/video`,
        {},
        {
          headers: { Authorization: userId },
        }
      );

      socket.on(VIDEO_STATUS, (data) => {
        onStatusUpdate(data);

        if (data.status !== PENDING_STATUS) {
          socket.disconnect();
        }
      });
    } catch (err) {
      onError("There was an error uploading the video!");
      socket.disconnect();
    }
  };

  return { uploadVideo };
};
