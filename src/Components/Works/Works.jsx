import React from 'react'
import classes from './Works.module.css'
import { images } from '../../Constants'

const Works = () => {
  return (
    <section className={classes.works}>
      <div className={classes.works_content}>
        <h1 className={classes.works_heading}>
          How Torzilla Works
        </h1>
        <img src={images.works} className={classes.works_image} alt="works image" />
        <div className={classes.works_text}>
          <h3 className={classes.works_sub}>
            Get the data you need from your images
          </h3>
          <p className={classes.works_paragraph}>
            Our API gives you structured data from over millions of sources for images you upload.
          </p>
        </div>

        <a href="" className={classes.works_btn} >See More</a>
      </div>
    </section>
  )
}

export default Works