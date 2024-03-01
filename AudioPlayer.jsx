// AudioPlayer.jsx

import React, { useRef, useState, useEffect } from 'react';
import { IconButton, Slider, LinearProgress, Box,Typography} from '@mui/material';
import { PlayArrow, Pause, VolumeUp, VolumeMute, FastForward, FastRewind, SkipNext, SkipPrevious, SignalCellularNullSharp } from '@mui/icons-material';
import './courses.css';
const AudioPlayer = ({ tracks }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [audioReady, setAudioReady] = useState(false);
  const audioRef = useRef(new Audio(tracks[currentTrackIndex].src));
  const [currentTime, setCurrentTime] = useState(null);
  const [totalDuration, setTotalDuration] = useState(SignalCellularNullSharp);

 

  

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = tracks[currentTrackIndex].src;
      audioRef.current.load();
    }
  }, [tracks, currentTrackIndex]);

  useEffect(() => {
    const handleCanPlayThrough = () => {
      setAudioReady(true);
      if (isPlaying) {
        audioRef.current.play();
      }
    };

    audioRef.current.addEventListener('canplaythrough', handleCanPlayThrough);

    return () => {
      if (audioRef.current) {
      audioRef.current.removeEventListener('canplaythrough', handleCanPlayThrough);
    }
  };
}, [isPlaying]);

  const playPauseToggle = () => {
    if (!tracks || tracks.length === 0) {
      return; 
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      if (audioReady) {
        audioRef.current.play();
      }
    }

    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (_, newValue) => {
    setVolume(newValue);
    audioRef.current.volume = newValue / 100;
    setIsMuted(false);
  };

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    audioRef.current.muted = newMutedState;
  };

  const handleNextTrack = () => {
    const newIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(newIndex);
    changeTrack(newIndex);
  };

  const handlePrevTrack = () => {
    const newIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(newIndex);
    changeTrack(newIndex);
  };

  const changeTrack = (index) => {
    setAudioReady(false);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    audioRef.current.src = tracks[index].src;
    audioRef.current.load();

    audioRef.current.oncanplaythrough = () => {
      setAudioReady(true);
      if (isPlaying) {
        audioRef.current.play();
      }
      setProgress(0);
    };
  };

  const handleFastForward = () => {
    audioRef.current.currentTime += 5;
  };

  const handleFastRewind = () => {
    audioRef.current.currentTime -= 5;
  };

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
  
    if (!isNaN(totalDuration) && totalDuration > 0) {
      const progressPercentage = (currentTime / totalDuration) * 100;
      setProgress(progressPercentage);
    }
  
    setCurrentTime(currentTime);
  
    if (currentTime === totalDuration) {
      handleNextTrack();
    }
  };
  

  return (
    <Box className="audioPlayerContainer">
       <Typography variant="body2" className="timingDisplay">
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
      
      <p>{formatTime(currentTime)}</p>
      </Typography>
     <LinearProgress variant="determinate" value={progress} className="progressBar" sx={{ width: '250px' }} />
    
    
     <br></br>
     <Box sx={{ display: 'flex', alignItems: 'center' }} className="controlsContainer">
      <IconButton
        onClick={handlePrevTrack}
        disabled={currentTrackIndex === 0}
        style={{ borderRadius: '50%' }} // Add round styling here
      >
        <SkipPrevious />
      </IconButton>

      <IconButton
        onClick={handleFastRewind}
        style={{ borderRadius: '50%' }} // Add round styling here
      >
        <FastRewind />
      </IconButton>

      <IconButton
        onClick={playPauseToggle}
        style={{ borderRadius: '50%' }} // Add round styling here
      >
        {isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>

      <IconButton
        onClick={handleFastForward}
        style={{ borderRadius: '50%' }} // Add round styling here
      >
        <FastForward />
      </IconButton>

      <IconButton
        onClick={handleNextTrack}
        disabled={currentTrackIndex === tracks.length - 1}
        style={{ borderRadius: '50%' }} // Add round styling here
      >
        <SkipNext />
      </IconButton>
      </Box>
      <br></br>
      <Box>
      <IconButton
        onClick={toggleMute}
        style={{ borderRadius: '50%' }} // Add round styling here
      >
        {isMuted ? <VolumeMute /> : <VolumeUp />}
      </IconButton>
      
      <Slider value={volume} className="volumeSlider" onChange={handleVolumeChange} aria-labelledby="continuous-slider" sx={{ width: '200px' }} />
    </Box>
    </Box>
    
  );
};

const formatTime = (timeInSeconds) => {
    if (timeInSeconds === null) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

export default AudioPlayer;
