import React, { useState } from 'react';
import "./courses.css"
import FableDetails from './FableDetails';
import { FablesCard } from '../../dummydata';

const CoursesCard = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleViewDetails = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseDetails = () => {
    setSelectedCourse(null);
  };
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {FablesCard.map((val) => (
            <div className='items'>
              <div className='content'>
                <div className='cover-image'>
                    <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <h1>{val.title}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        
                          
                          <div className='para'>
                            <h4>{details.author}</h4>
                          </div>
                        
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            <div className='view-btn'>  
              <button className='outline-btn' onClick={() => handleViewDetails(val)}>
                VIEW NOW!
              </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {selectedCourse && (
        <FableDetails isOpen={!!selectedCourse} onClose={handleCloseDetails} courseData={selectedCourse} />
      )}
    </>
  )
}

export default CoursesCard;


