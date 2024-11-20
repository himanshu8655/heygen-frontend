import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoProcessing from './VideoProcessing';
import Login from './Login';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/video-processing/:userId" element={<VideoProcessing />} />
    </Routes>
  </Router>
    );
}


export default App;
