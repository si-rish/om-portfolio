import React, { useState, useRef } from 'react';
import { Play, Pause, Maximize2 } from 'lucide-react';

const VideoReelCard = ({ videoSrc, title, description }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [userPausedDuringHover, setUserPausedDuringHover] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        if (isHovered) {
          setUserPausedDuringHover(true);
        }
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        setUserPausedDuringHover(false);
      }
    }
  };

  const handleFullScreen = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && !userPausedDuringHover) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current && !userPausedDuringHover) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    // Reset the user pause state when leaving hover
    setUserPausedDuringHover(false);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <div 
      className="relative group rounded-xl overflow-hidden h-[400px] cursor-pointer transform transition-all duration-300 hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect on hover */}
      <div className={`absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl blur-sm transition-opacity duration-300 ${isHovered ? 'opacity-75' : 'opacity-0'}`}></div>
      
      {/* Main card container */}
      <div className="relative bg-black rounded-xl overflow-hidden h-full">
        {/* Video element */}
        <video
  ref={videoRef}
  className="w-full h-full object-cover [&:fullscreen]:object-contain"
  muted
  loop
  playsInline
  onPlay={handleVideoPlay}
  onPause={handleVideoPause}
  onLoadedData={() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }}
  style={{ aspectRatio: '9/16' }}
>

          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
        
        {/* Fullscreen button - only visible on hover and when playing */}
        {isHovered && isPlaying && (
          <button
            onClick={handleFullScreen}
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
          >
            <Maximize2 className="w-4 h-4 text-white" />
          </button>
        )}
        
        {/* Play/Pause button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="w-16 h-16 bg-purple-600/80 hover:bg-purple-600 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white ml-1" />
            )}
          </button>
        </div>
        
        {/* Text overlay - Only at bottom left */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-300 opacity-90">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const VideoReelSection = () => {
  const reelData = [
    {
      videoSrc: "/assets/reel1.mp4",
      title: "Infotainment",
      description: "Informative engaging media reel"
    },
    {
      videoSrc: "/assets/reel2.mp4",
      title: "Educational",
      description: "Edited using CapCut PC"
    },
    {
      videoSrc: "/assets/reel3.mp4",
      title: "Podcast Reel",
      description: "Edited using AI Captions"
    },
    {
      videoSrc: "/assets/reel4.mp4",
      title: "Storytelling",
      description: "Cinematography & Editing"
    },
    {
      videoSrc: "/assets/reel5.mp4",
      title: "Mini Vlog",
      description: "Short daily video"
    },
    {
      videoSrc: "/assets/reel6.mp4",
      title: "Cinematic Reel",
      description: "Videography & Visuals"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 py-12">
      <main className="max-w-7xl mx-auto px-4 pb-0">
        {/* Recent Projects Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl mb-4 text-white">
              Recent <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {reelData.map((reel, index) => (
              <VideoReelCard
                key={index}
                videoSrc={reel.videoSrc}
                title={reel.title}
                description={reel.description}
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="https://www.instagram.com/insideos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-white font-semibold hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              View All Reels
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VideoReelSection;