
import React from 'react';
import {Card,Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import './courses.css';
import AudioPlayer from './AudioPlayer';
//  import VideoPlayer from './VideoPlayer'; // Adjust the path accordingly
 import YoutubeEmbed from "./YoutubeEmbed";

const FableDetails = ({ isOpen, onClose, courseData }) => {
  if (!courseData) {
    return null; // or handle the case when courseData is undefined
  }
  
 return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth='md'>
      <DialogTitle>{courseData.title}</DialogTitle>
       <DialogContent> 
        <div className="details-container">
          <div className="detail-card">
            <div className='card-img'>
            <img src={courseData.cover} alt={courseData.title} />  
           </div>
           <div className='card-details'>
            <div className='det-card'>
            <h2>Theme : {courseData.theme}</h2>
            <h4> Author : {courseData.courTeacher[0].name}</h4>
            <p>Genre : {courseData.genre}</p>
            <p>Language: {courseData.language}</p>
            
            <p> {courseData.courTeacher[0].totalTime}</p><br></br>
             </div>
            <AudioPlayer tracks={courseData.audioTracks} />
          </div>
          </div>  
          <Card variant="soft" />
            <div>
           
            
        
            <YoutubeEmbed embedId={courseData.videoTracks} /> 
            <br></br>
            <div className='describtion'>
            <p> {courseData.description}</p>
            </div>
            </div>
          
        </div>
      </DialogContent> 
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
 );
};

export default FableDetails;
