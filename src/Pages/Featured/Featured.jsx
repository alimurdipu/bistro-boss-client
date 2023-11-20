import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import featuredImg from '../../assets/home/featured.jpg'
import './featured.css'
const Featured = () => {
  return (
    <div className='featured-item bg-fixed text-white pt-8 my-20'>
        <SectionTitle
            subHeading='Check it Out'
            heading='Featured Item'
        ></SectionTitle>
        <div className='md:flex bg-slate-500 bg-opacity-60 justify-center items-center pb-20 pt-12 px-36'>
        <div>
            <img src={featuredImg} alt="" />
        </div>
        <div className='md:ml-10'>
            <p>Aug 20, 2029</p>
            <p className='uppercase'>Where can i get some?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt omnis optio laboriosam tempora, dolores dolore quaerat ducimus accusamus fugiat expedita soluta necessitatibus dolorem minima earum, enim vel et aliquam, veritatis voluptate ipsum labore. Autem impedit fugit voluptatibus distinctio! Expedita velit asperiores error. Neque tempora, iste consectetur perferendis fuga nisi error.</p>
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
        </div>
    </div>
  )
}

export default Featured