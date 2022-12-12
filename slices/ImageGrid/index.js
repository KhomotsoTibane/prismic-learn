import React from "react";
import RichText from "../../components/RichText";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ImageGridSlice} ImageGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageGridSlice>} ImageGridProps
 * @param { ImageGridProps }
 */
const ImageGrid = ({ slice }) => (
  <section className='section'>
    <div className='container'>
      <RichText field={slice.primary.title} className='text-2xl tex-bold' />
      <RichText field={slice.primary.description} />

      <div className='grid grid-cols-3 mt-10'>
        {slice?.items?.map((item, i) => (
          <PrismicNextImage field={item.image} key={i} />
        ))}
      </div>
    </div>
  </section>
)


export default ImageGrid;
