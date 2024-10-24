import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import BlogPostCard from '../../components/blogPostCard/BlogPostCard'
import Footer from '../../components/footer/Footer'
// import Loader from '../../components/loader/Loader'

function Home() {
  return (
    <Layout>
      <HeroSection></HeroSection>
       <BlogPostCard></BlogPostCard>
       {/* <Loader></Loader> */}
       <Footer></Footer>
    </Layout>
  )
}

export default Home