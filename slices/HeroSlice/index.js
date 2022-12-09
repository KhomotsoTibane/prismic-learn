import React from 'react'
import { PrismicImage, PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */


//<pre>{JSON.stringify(slice,null,2)}</pre>  show what fields are there, explore slice


const HeroSlice = ({ slice }) => (
  <section className="section">
    <div className="container">
      <PrismicRichText field={slice.primary.title}/>
      <PrismicRichText field = {slice.primary.description}/>
      <PrismicImage field = {slice.primary.image}/>
    </div>
  </section>
)

export default HeroSlice



{/* <section>
    <span className="title">
      {
        slice.primary.title ?
        <PrismicRichText field={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>
    {
      slice.primary.description ?
      <PrismicRichText field={slice.primary.description}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section> */}