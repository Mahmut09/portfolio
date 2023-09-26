import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
    return (
        <section className='section' id='work'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row gap-x-10 items-center'>
                    <motion.div
                        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
                        variants={fadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <div>
                            {/* text */}
                            <h2 className='h2 leading-tight text-accent'>
                                My Latest <br />
                                Work.
                            </h2>
                            <p className="max-w-sm mb-12 font-medium min-h-[130px]">
                            Here you can take a look at my recent projects and view them in more detail by clicking on any card.
                            </p>
                            <button className="btn btn-sm">View all projects</button>
                        </div>
                        <div
                            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
                        >
                            {/* image */}
                            <a href='' className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></a>
                            <img
                                className='group-hover:scale-125 transition-all duration-500'
                                src={Img1}
                                alt="#"
                            />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-gradient'>Development</span>
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                                <span className='text-3xl text-white'>Project Title</span>
                            </div>

                        </div>
                    </motion.div>
                    <div className='flex-1 flex flex-col justify-between gap-y-10'>
                        {/* image */}
                        <motion.div
                            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
                            variants={fadeIn('right', 0.6)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {/* image */}
                            <a href='' className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></a>
                            <img
                                className='group-hover:scale-125 transition-all duration-500'
                                src={Img2}
                                alt="#"
                            />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-gradient'>Development</span>
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                                <span className='text-3xl text-white'>Project Title</span>
                            </div>

                        </motion.div>
                        {/* image */}
                        <motion.div
                            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
                            variants={fadeIn('right', 0.6)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {/* image */}
                            <a href='' className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></a>
                            <img
                                className='group-hover:scale-125 transition-all duration-500'
                                src={Img3}
                                alt="#"
                            />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-gradient'>Development</span>
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                                <span className='text-3xl text-white'>Project Title</span>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Work;
