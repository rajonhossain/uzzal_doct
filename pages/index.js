import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import React, { useState } from 'react';
import { GoStack, GoHome } from "react-icons/go";
import { AiFillBank } from "react-icons/ai";
import AutoPlay from './AutoPlay';
import Navber from './Navber';
import Footer from './Footer';




export default function Home() {


  return (
    <>
      <Head>
        <title>Myruralphsysician</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/llogo.png" />
      </Head>

     
      <main>
                <Navber />


                <AutoPlay />



                    <div className='text-center text-xl pt-10 md:text-2xl' style={{marginBottom:'30px'}}>Why Choose Us ?</div>
                <div className='container mx-auto w-full pb-10'>
                    <div class="container flex flex-wrap gap-5">
                        <div className='border-4 border-b-yellow-500 rounded-[12px] text-sm md:text-lg bg-gray-100 p-8 mx-auto w-[400px] text-center'>
                            <center className='p-3'><GoStack size={40} /> </center>
                            Develop English Language & IT Skills
                        </div>

                        <div className='border-4 border-b-yellow-500 rounded-[12px] text-sm md:text-lg bg-gray-100 p-8 mx-auto w-[400px] text-center'>
                            <center className='p-3'><GoHome size={40} /> </center>
                            Modern Classrooms with Multimedia
                        </div>
                        <div className='border-4 border-b-yellow-500 rounded-[12px] text-sm md:text-lg bg-gray-100 p-8 mx-auto w-[400px] text-center'>
                            <center className='p-3'><AiFillBank size={40} /> </center>
                            Practical Training in Reputed Hospitals
                        </div>
                    </div>
                </div>



                    <div className='text-center text-xl pt-10 md:text-2xl' style={{marginBottom:'30px'}}>Our Courses</div>
                <div className='container mx-auto w-full pb-5'>
                    <div class="container flex flex-wrap gap-5">                        
                    <div className='md:text-2xl text-white bg-[url("https://primecollegeofnursingdhaka.org/wp-content/uploads/2021/04/course-diploma-400x421.jpg")] border-4 border-b-yellow-500 rounded-[12px] text-sm md:text-lg bg-gray-100 mx-auto h-[450px] w-[400px] text-center' style={{padding:'300px 5px 5px 5px', fontSize:'25px', lineHeight:'30px'}}>                            
                            Diploma in Nursing Science and Midwifery -03 Years
                        </div>

                        <div className='md:text-2xl text-white bg-[url("https://primecollegeofnursingdhaka.org/wp-content/uploads/2021/04/course-bsc-basic-400x421.jpg")] border-4 border-b-yellow-500 rounded-[12px] text-sm md:text-lg bg-gray-100 mx-auto h-[450px] w-[400px] text-center' style={{padding:'300px 5px 5px 5px', fontSize:'25px', lineHeight:'30px'}}>                            
                            BSc in Nursing (Basic) - 04 Years
                        </div>
                        <div className='md:text-2xl text-blue bg-[url("https://primecollegeofnursingdhaka.org/wp-content/uploads/2021/04/course-bsc-post-basic.jpg")] border-4 border-b-yellow-500 rounded-[12px] text-sm md:text-lg bg-gray-100 mx-auto h-[450px] w-[400px] text-center' style={{padding:'300px 5px 5px 5px', fontSize:'25px', lineHeight:'30px'}}>                            
                            BSc in Post Basic Nursing - 02 Years
                        </div>
                    </div>
                </div>



                <Footer />
            </main>

 
    </>
  )
}

