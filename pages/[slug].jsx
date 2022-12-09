import * as prismicH from '@prismicio/helpers'
import { SliceZone } from '@prismicio/react'
import { createClient, linkResolver } from '../prismicio'
import { components } from '@/slices/index'
 
const Page = ({ page, navigation, settings }) => {
  return <SliceZone slices={page.data.slices} components={components} />
}
 
export default Page
 
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const page = await client.getByUID('page', params.uid)
  return {
    props: {
      page
    }
  }
}
 
export async function getStaticPaths() {
  const client = createClient()

  //create all possible paths
  const pages = await client.getAllByType('page')
  
  //link resolver determines how to translate page in url structure
  return {
    paths: pages.map(page => prismicH.asLink(page, linkResolver)),
    fallback: false
  }
}