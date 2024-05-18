import React from 'react'
import './FrontPages.css'
import { Link } from 'react-router-dom'
import Resume4 from '../../assets/Resume4.png'
import Features from '../../components/Features/Features'
// import colorOptions from '../../assets/colorOptions.jpg'
import backgroundImage1 from '../../assets/svg2.svg';
import backgroundImage2 from '../../assets/svg1.svg';
import backgroundImage3 from '../../assets/svg3.svg';

function FrontPages() {
    return (
        <>
            <div className="heroSection">

                <div className="topSide">

                    <div className="leftSideH">
                        <div className="colorOptions">
                           
                        </div>
                        <div className="fontOptions">
                            
                        </div>
                        <img src={Resume4} alt="" />
                    </div>

                    <div className="RightSideH" data-aos="fade-left" >
                        <h1>The Best Online <br /> Resume Builder</h1>
                        <p>Easily create the perfect resume for any job using our best-in-class resume builder platform</p>
                        <Link to={'/userInput'}><button>Get Started Now</button></Link>
                    </div>

                </div>

                <div className="SummaryPart">
                    <p>Our online resume builder offers a quick and easy way to create your professional resume from over 30 design templates. Create a resume using our AI-powered online resume wizard, plus take advantage of expert suggestions and customizable modern and professional resume templates. Free users have access to our easy-to-use tool and TXT file downloads.</p>
                </div>
                
            </div>

            <div className="FeatureSection">
                <div className="head">
                    <div className="heading">
                        <h2>Build Your Resume Fast and Easy.</h2>
                        <span></span>                        
                    </div>
                    <p>This Web is lightning fast. There's no software to download. No multi-part sign-up form. No long-winded tutorials. Just a straightforward process.</p>
                </div>

                <div className="Features">
                    <Features
                        Num="1"
                        featTitle="Pick A Template"
                        featDescription="Multiple Resume Templates! Choose from a diverse selection of professional designs tailored to various industries and personal styles. Easily find the perfect template to make your resume stand out and leave a lasting impression on potential employers. Elevate your job application with a polished, visually appealing resume in just a few clicks."
                        bgimage={backgroundImage1}
                        bgColor={'#8697C4'}
                        direction={'row'}
                        flex={'flex-end'}
                    />
                    <Features
                        Num="2"
                        featTitle="Change The Theme"
                        featDescription="Theme Changer for Resumes! Easily switch between various professional themes to give your resume a fresh and polished look. With a variety of stylish options, you can ensure your resume captures employers' attention and reflects your personal brand. Enhance your job application effortlessly with just a few clicks."
                        bgimage={backgroundImage2}
                        bgColor={'#d3c7e6'}
                        tColor={'#f7f4fc'}
                        direction={'row-reverse'}
                        flex={'flex-start'}

                    />
                    <Features
                        Num="3"
                        featTitle="Style Fonts According To You"
                        featDescription="Font Customization for Resumes! Easily switch between various professional fonts to ensure your resume stands out and reflects your personal style. With just a few clicks, you can enhance readability and make a lasting impression on potential employers. Elevate your job application game with tailored typography designed"
                        bgimage={backgroundImage3}
                        bgColor={'#8697C4'}
                        direction={'row'}
                        flex={'flex-end'}

                    />
                </div>

            </div>
        </>
    )
}

export default FrontPages


