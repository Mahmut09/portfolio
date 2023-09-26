import React from 'react';
import Image from '../assets/avatar.svg';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {

    const socialLinks = [
        {
            icon: <FaGithub />,
            href: "https://github.com",
        },
        {
            icon: <FaInstagram />,
            href: "https://instagram.com",
        },
        {
            icon: <FaLinkedin />,
            href: "https://linkedin.com",
        },
    ]

    return (
        <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
            <div className="container mx-auto">
                <div className='flex flex-col gap-y-8 items-center lg:flex-row lg:gap-x-12'>
                    <div className='flex-1 text-center font-secondary lg:text-left'>
                        <motion.h1
                            className='text-[55px] font-bold leading-[0.8] lg:text-[110px] uppercase'
                            variants={fadeIn('up', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                        >
                            Askerbek <span>Mahmut</span>
                        </motion.h1>

                        <motion.div
                            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
                            variants={fadeIn('up', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.4 }}
                        >
                            <span className='mr-4 text-white'>I am a </span>
                            <TypeAnimation
                                sequence={[
                                    'Developer',
                                    2000,
                                    'Mentor',
                                    2000,
                                    'Athlete',
                                    2000,
                                ]}
                                speed={50}
                                className='text-accent'
                                wrapper='span'
                                repeat={Infinity}
                            />
                        </motion.div>

                        <motion.p
                            className='mb-8 max-w-lg mx-auto lg:mx-0'
                            variants={fadeIn('up', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                        >
                            Welcome to my web developer portfolio, where I showcase my most recent and impressive works in the field of web development. As a dedicated and passionate web developer, I have the privilege of working on a diverse range of projects that reflect my skills, creativity, and commitment to delivering high-quality websites and web applications. Explore this page to get a glimpse of my latest works and the technologies I've used to bring them to life.
                        </motion.p>

                        <motion.div
                            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
                            variants={fadeIn('up', 0.6)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                        >
                            <button className='btn btn-lg'>
                                Contact me
                            </button>
                            <a href="#" className='text-gradient btn-link'>
                                My Portfolio
                            </a>
                        </motion.div>

                        <motion.div
                            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
                            variants={fadeIn('up', 0.7)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                        >
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='transition hover:shadow'
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </motion.div>

                    </div>

                    <motion.div
                        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
                        variants={fadeIn('up', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                    >
                        <img src={Image} alt="#" />
                    </motion.div>

                </div>
            </div>
        </section>
    )
};

export default Banner;
