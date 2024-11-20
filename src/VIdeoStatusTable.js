import React from "react";
import "./VideoProcessing.css";

const VideoStatusTable = ({ videoStatusData }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Status</th>
            <th>Video ID</th>
          </tr>
        </thead>
        <tbody>
          {videoStatusData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.status}</td>
              <td>{data.videoId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VideoStatusTable;
