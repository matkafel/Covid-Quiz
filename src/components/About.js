import React from 'react';
import Nav from './Nav';
import '../style/About.css';




const About = () => {

    return (
        <>
            <Nav />
            <div className="about-wrapper">

                <div className="about-text">
                    <p>About the disease</p>
                    <h1>Coronavirus</h1>
                    <p className="firstParagraf"><span>Covid-19 is a new illness that can affect your lungs and airways.</span>
                    It's caused by a virus called coronavirus. It was discovered in December 2019 in Wuhan, China.
                    </p>
                    <p className="secondParagraf">Cammon sings of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more savere cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death.</p>
                    <p className="thirdParagraf">Standard recommendation to prevent infection spread include regular hand washing, covering mouth and nose when coughing and sneezing, throughly cooking meat and eggs. Avoid close contact with anyone showing symptomps of respiratory illness such as coughing and snezzing.</p>
                </div>
                <div className="about-img">
                </div>
            </div>
            <div className="about-wrapper2">
                <div className="about-text-second">
                    <p>What are the symptomps of Covid-19?</p>
                    <h1>Symptopms of <span className="header-effect">coronavirus</span> </h1>
                    <p className="txt">The most common symptoms of COVID-19 are faver, tiredness, and dry cough. Some patients my have aches and pains, nals congestation, runny nose, score throat or dirrhea. These sympthoms are usually mild and begin gradually. Also the symptoms may appear 2-14 days after exposure</p>
                </div>
                <div className="symptoms-wrapper">
                    <div className="first">
                        <div className="flex-wrapp">
                            <p>Fever</p>
                            <div className="symptoms-img1"></div>
                        </div>
                        <div className="symptoms-txt Link">
                            <p className="symptoms-text link-title"><span>High Fever </span>- this means you feel hot to touch on your chest or back you do not need to measure your temperature. It is a common sign and also may appear in 2-10 days if you affected</p>
                        </div>
                    </div>
                    <div className="first">
                        <div className="flex-wrapp">
                            <p>Cough</p>
                            <div className="symptoms-img2"></div>
                        </div>
                        <div className="symptoms-txt Link">
                            <p className="symptoms-text link-title"><span>Continuous cough </span>- this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours if you usually have a cough, it may be worse than usual</p>
                        </div>
                    </div>
                    <div className="first">
                        <div className="flex-wrapp">
                            <p>Shortness of breath</p>
                            <div className="symptoms-img3"></div>
                        </div>
                        <div className="symptoms-txt Link">
                            <p className="symptoms-text link-title"><span>High Fever </span>- Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing or shortness of breath.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-wrapper3">
                <div className="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="split-page">
                    <div className="left">
                        <h2>Take steps to <span>protect</span> others</h2>
                        <div className="icons">
                            <h4>
                                <i className="fas fa-check-circle" aria-hidden="true"></i><span>Stay home if you're sick </span>- Stay home if your are sick, expect to get medical care.
                                 </h4>
                            <h4>
                                <i className="fas fa-check-circle" aria-hidden="true"></i><span>Cover your mouth and nose </span>- with a tissue when you cough or sneeze throw used tissues in the trash or use the inside od your elbow.
                                </h4>
                            <h4>
                                <i className="fas fa-check-circle" aria-hidden="true"></i><span>Wear a facemask if your are sick </span>- You should wear a facemask when youa are around other people and before you enter a healthcare
                                </h4>
                            <h4>
                                <i className="fas fa-check-circle" aria-hidden="true"></i><span>Clean AND disinfect frequently touched surfaces daily </span>- This includes phones, tables, light switches, doorknobs, countertops, handles, desks, toilets, faucets, and sinks
                                </h4>
                            <h4>
                                <i className="fas fa-check-circle" aria-hidden="true"></i><span>Clean the dirty surfaces </span>- Use detergent or soap and water prior to disinfection
                                </h4>
                            <h4>
                                <i className="fas fa-check-circle" aria-hidden="true"></i><span>Stay informed about the local COVID-19 situation </span>- Get up-to-date information about local COVID-19 activity from public health officials
                                </h4>
                            <h4>
                                <i className="fas fa-check-circle" aria-hidden="true"></i><span>Dedicated, lined trash can </span>- if possible, dedicate a lined trash can for the ill person. Use gloves when removing garbage bags, and handling & disposing of trash
                                </h4>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right-img">

                        </div>
                    </div>
                </div>
            </div>
            <div className="about-wrapper4">
                <div className="header-txt">
                    <p>How coronavirus is spread</p>
                    <h1>Transmission of covid-19</h1>
                    <p>Becouse it's new illness, we do not know exactly how coronavirus spreads from person to person. Similar virues are spread in cough droplets.</p>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-img1"></div>
                        <h5>Person-to-person spread as close contat with infected</h5>
                        <p>The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another.</p>
                    </div>
                    <div className="card">
                        <div className="card-img2"></div>
                        <h5>Touching or contat with infected surfaces or object</h5>
                        <p>A person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes.</p>
                    </div>
                    <div className="card">
                        <div className="card-img3"></div>
                        <h5>Droplets that from infected person coughs or sneezes</h5>
                        <p>The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another</p>
                    </div>
                </div>

            </div>

        </>
    );
}

export default About;
