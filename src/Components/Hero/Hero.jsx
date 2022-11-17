import React from 'react'
import { images } from '../../Constants'
import { HiOutlineUpload } from 'react-icons/hi'
import classes from './Hero.module.css'

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.hero_text}>

        <h1 className={classes.hero_text_heading}>
          You Can <span>Convert</span> Your Image to Text<span>.</span>
        </h1>

        <p className={classes.hero_text_paragraph}>
          Torzilla offers a simple API that delivers to you structured texts for your images anywhere 
        </p>

        <img src={images.heroCurve} className={classes.hero_curve} alt="" />

      </div>

      <div className={classes.hero_upload}>
        <img src={images.addToFolder} className={classes.addToFolder} alt="Add to folder" />
        <p className={classes.hero_upload_text}>
          Drop and drop image here or click to upload
        </p>
        <div className={classes.hero_upload_file}>
          <div className={classes.upload_icon}>
            <HiOutlineUpload />
            <p>Upload Image</p>
          </div>
          <input className={classes.input_file} id="upload" type='file'/>
        </div>

      </div>
    </section>
  )
}

export default Hero