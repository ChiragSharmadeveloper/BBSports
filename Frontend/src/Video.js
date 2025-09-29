import React from 'react'
import './Video.css'

const VideoPlayer = () => {
  return (
    <>
      <h1 className='youtubesec'>  ———— SHORTS FOR YOU ————</h1>

    <div className="video-main">
      <div className='video-item'>
      <a href="https://www.instagram.com/babita_sports?igsh=MTBydXR0NzEzNHhhOQ==" target="_blank"></a>
      <video muted autoPlay loop >
        <source src="/videos/video1.mp4" type="video/mp4"  />
      </video>
      </div>
      <div className='video-item'>
      <video  muted autoPlay loop >
        <source src="/videos/video2.mp4" type="video/mp4" />
      </video>
      </div>
      <div className='video-item'>
      <video  muted autoPlay loop >
        <source src="/videos/video3.mp4" type="video/mp4" />
      </video>
      </div>
    </div>
    </>
  );
};

export default VideoPlayer;