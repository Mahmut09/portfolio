import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
    {
        name: "UI/UX Design",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae blanditiis fugit delectus, fugiat iusto ipsam nam non, aliquid laborum illo ab accusantium ut error ratione consequuntur voluptatem ea animi! Voluptates!",
        link: "Learn more",
    },
    {
        name: "Development",
        description: "Illo ab accusantium ut error ratione consequuntur voluptatem ea animi! Voluptates!",
        link: "Learn more",
    },
    {
        name: "Digital Marketing",
        description: "Aliquid laborum illo ab accusantium ut error ratione consequuntur voluptatem ea animi! Voluptates!",
        link: "Learn more",
    },
    {
        name: "Digital Marketing",
        description: "Aliquid laborum illo ab accusantium ut error ratione consequuntur voluptatem ea animi! Voluptates!",
        link: "Learn more",
    },
]

const Services = () => {
    return <div className='section' id='services'>
        <div className="container mx-auto">
            <div className='flex flex-col lg:flex-row'>
                {/* text */}
                <motion.div
                    className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
                    variants={fadeIn('down', 0.5)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <h2 className='h2 text-accent mb-6'>What I Do.</h2>
                    <h3 className='h3 max-w-[455px] mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <button className='btn btn-sm'>See my works</button>
                </motion.div>

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
                                        href="#"
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
    </div>;
};

export default Services;
