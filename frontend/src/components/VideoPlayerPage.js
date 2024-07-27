// frontend/src/components/VideoPlayerPage.js
import React from 'react';

function VideoPlayerPage() {
  const video = localStorage.getItem('selectedVideo');

  return (
    <div>
      <h1>Video Player</h1>
      <video width="50%" height="auto" controls>
      <source src={videoPath} type="video/mp4" />
      Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayerPage;
