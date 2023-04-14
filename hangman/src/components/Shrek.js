import React  from 'react';
//import all images, each with one more body part
import img0 from "../images/0.jpg";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";

//depending on how many wrong letters there are depends on image shown
const Shrek = ({ wrong }) => {
  const wrongs = wrong.length
  if(wrongs === 0){
  return (
    <img src={img0} alt='img0' className='image'/>
  )
  }
  if(wrongs === 1){
  return (
    <img src={img1} alt='img1'className='image'/>
  )
  }
  if(wrongs === 2){
  return (
    <img src={img2} alt='img2'className='image'/>
  )
  }      
  if(wrongs === 3){
  return (
    <img src={img3} alt='img3'className='image'/>
  )
  }
  if(wrongs === 4){
  return (
    <img src={img4} alt='img4'className='image'/>
  )
  }
  if(wrongs === 5){
  return (
    <img src={img5} alt='img5'className='image'/>
  )
  }
  if(wrongs === 6){
  return (
    <img src={img6} alt='img6'className='image'/>
  )
  }
}

export default Shrek
