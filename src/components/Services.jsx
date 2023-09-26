import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
    {
        name: "React",
        description: "I have been using React & Redux Toolkit for web application development for over a year.",
        link: "Learn more",
    },
    {
        name: "Vanilla JavaScript",
        description: "I also have experience in creating applications in pure JavaScript without using frameworks.",
        link: "Learn more",
    },
    {
        name: "Html & Css",
        description: "I have excellent skills in responsive and cross-browser web development using the Sass preprocessor.",
        link: "Learn more",
    },
    {
        name: "Learning",
        description: "I'm also studying other areas in IT, such as blockchain development with Solidity and game development using the CryEngine 5 engine",
        link: "Learn more",
    },
]

const Services = () => {
    return <section className='section' id='services'>
        <div className="container mx-auto">
            <div className='flex flex-col lg:flex-row'>
                {/* text */}
                <div
                    className='flex-1 mb-12 lg:mb-0 lg:py-8'
                >
                    <h2 className='h2 text-accent mb-6'>What I Do.</h2>
                    <h3 className='h3 max-w-[455px] mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <button className='btn btn-sm mb-6'>See my works</button>
                    <div className='lg:bg-services bg-contain mix-blend-color-dodge bg-no-repeat rounded-full h-[60%] transition hover:shadow'></div>
                </div>

                {/* services */}
                <motion.div
                    className='flex-1'
                    variants={fadeIn('up', 0.3)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <div>
                        {services.map((service, index) => (
                            <div
                                className='border-b border-white/20 pt-6 pb-4 mb-[36px] flex gap-x-12'
                                key={index}
                            >
                                <div className='max-w-[476px]'>
                                    <h4 className='text-[20px] tracking-wider font-semibold mb-6'>
                                        {service.name}
                                    </h4>
                                    <p className='font-secondary leading-tight'>
                                        {service.description}
                                    </p>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <a
                                        href="https://google.com"
                                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                                    >
                                        <BsArrowUpRight />
                                    </a>
                                    <a
                                        href="https://google.com"
                                        className='text-gradient text-sm text-center'
                                    >
                                        {service.link}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    </section>;
};

export default Services;
