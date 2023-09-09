import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
    return (
        <section className='py-16 lg:py-0 lg:section' id='contact'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row lg:items-center'>
                    {/* text */}
                    <motion.div
                        className='flex-1'
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
                        <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                            Let's work <br /> together!
                        </h2>
                    </motion.div>
                    {/* form */}
                    <motion.form
                        className='flex-1 border rounded-2xl flex flex-col items-start gap-y-6 pb-24 p-6'
                        variants={fadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <input
                            className='bg-transparent transition border-b py-3 outline-none w-full placeholder:text-white focus:border-accent'
                            type="text"
                            placeholder='Your name'
                        />
                        <input
                            className='bg-transparent transition border-b py-3 outline-none w-full placeholder:text-white focus:border-accent'
                            type="text"
                            placeholder='Your email'
                        />
                        <textarea
                            className='bg-transparent transition border-b py-3 outline-none w-full placeholder:text-white focus:border-accent resize-none mb-12'
                            placeholder='Your message'
                        ></textarea>
                        <button className="btn btn-lg">Send message</button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
};

export default Contact;
