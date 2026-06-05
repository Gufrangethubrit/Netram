import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrum from "../components/Breadcrum";
import Blog from '../components/Blog';

export default function Blogs() {
  return (
    <div>
        <Header />
        <Breadcrum title="Blogs" />
        <Blog/>
        <Footer/>
    </div>
  )
}
