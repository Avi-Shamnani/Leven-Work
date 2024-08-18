import React from 'react'
import Layout from '../../components/Layout'
import Teamlayout from '../../components/Teamlayout';
function Team() {
  return (
    <Layout>
      <div className='flex bg-backcolor'>
        <div className='left mt-10 ml-10'>
          <p className='text-3xl font-semibold'>MEET<span className='text-5xl -z-20'>😎</span> <span className='text-specialColor font-semibold text-5xl'>Specialised Team   </span>
           With Best Track <span className='text-specialColor font-semibold text-5xl'> Records</span></p>
        </div>
        <div className='right mt-10 ml-10 p-5 pt-0 text-xl'>
            <p>
              Lets meet our Specialised Team that will contain the Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et consectetur omnis laboriosam.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et consectetur omnis laboriosam.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et consectetur omnis laboriosam.
            </p>
        </div>
      </div>
      <Teamlayout></Teamlayout>
      </Layout>
  )
}

export default Team