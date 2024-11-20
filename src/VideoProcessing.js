import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useVideoProcessing } from "./HeygenClient";
import VideoStatusTable from "./VIdeoStatusTable";
import "./VideoProcessing.css";

const VideoProcessing = () => {
  const { userId } = useParams();
  const { uploadVideo } = useVideoProcessing(userId);

  const [error, setError] = useState(null);
  const [status, setStatus] = useState("N/A");
  const [videoStatusData, setVideoStatusData] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleUploadVideo = () => {
    setError(null);
    setIsUploading(true);

    uploadVideo(
      (data) => {
        setStatus(data.status);

        if (data.status !== "Pending") {
          setVideoStatusData((prev) => [...prev, data]);
          setIsUploading(false);
          setStatus("N/A");
        }
      },
      (errMessage) => {
        setError(errMessage);
        setIsUploading(false);
      }
    );
  };

  return (
    <div className="video-processing-container">
      <h1>Video Processing</h1>
      <p className="video-status">Status: {status}</p>
      {error && <p className="error-message">{error}</p>}

      <button
        className="upload-button"
        onClick={handleUploadVideo}
        disabled={isUploading}
      >
        {isUploading ? "Uploading..." : "Upload Video"}
      </button>

      {videoStatusData.length > 0 && (
        <VideoStatusTable videoStatusData={videoStatusData} />
      )}
    </div>
  );
};

export default VideoProcessing;
