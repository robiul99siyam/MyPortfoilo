import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const Contact = () => {
    return (

        <>
            <Navbar />

            <section className="Contact container mt-5 mb-5 p-5">

                <h1>
                    Let's Get in Touch: Ways <br />  to Connect with Me
                </h1>

                <br />

                <p>
                    Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at <span className='fw-bold'>siyamrobiulislam@gmail.com</span>  ,I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Alternatively, you can use the contact form on my website to get in touch. Simply fill out the required fields and I'll get back to you as soon as possible. Finally, if you prefer to connect on social media, you can find me on <a target='_blank' href="https://www.linkedin.com/in/robiul-islam-siyam/">https://www.linkedin.com/in/robiul-islam-siyam/</a> I post regular updates and engage with my followers there, so don't hesitate to reach out. Thanks again for your interest, and I look forward to hearing from you!
                </p>
            </section>


            <Footer />


        </>
    );
}

export default Contact;