
# Key Features

## Video Uploading
Call `uploadVideo` with appropriate callbacks to begin uploading a video.

## Real-Time Status Updates
The library uses `socket.io` to receive live status updates for video processing.

## Error Handling
Graceful handling of server errors and user-specific issues such as missing `userId`.

---

# Libraries Used

- **axios**: For making HTTP POST requests to the server.
- **socket.io-client**: For real-time communication with the backend server.

---

# Thought Process

## Minimizing Polling Costs
The library uses sockets to receive real-time updates instead of polling the server, which reduces server load and latency for the user.

## Customer-Focused Design
- Simple API design for easy integration by third-party developers.
- Clear separation of concerns: the library handles communication while exposing hooks for the UI.

## Error Tolerance
Implements robust error handling mechanisms to improve user experience.

---

# How to Use the Client Library

## Overview
The Heygen Video Processing Client Library allows developers to integrate video processing functionality with minimal effort. The library handles video uploads, monitors processing status in real-time, and ensures robust error handling.

### Usage Example
1. Import the library and initialize it with a `userId`.
2. Call the `uploadVideo` function and provide callbacks for status updates and error handling.
