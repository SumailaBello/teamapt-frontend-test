import React from 'react';
import './Home.css';
import logo from '../../images/logo.png'
import calendarIcon from '../../images/calendar.png'
import bulbIcon from '../../images/bulb.png'
import chevronRight from '../../images/chevron-right.svg'

export const Home = () => {
    return (
        <div className = "main container-fluid">
            {/* <div className="container-fluid h-100"> */}
            <div className="p-2 w-100 navbar">
                <img src={logo} alt="logo" className="img-fluid logo" />
                <img src={calendarIcon} alt="calendar" className="image-fluid calendar-icon" />
            </div>
            {/* </div> */}
            <div className = "w-100 content text-center mb-2">
                <div className="title">
                    <div className="first" style={{fontWeight: 'lighter'}}>Unlock to</div> <div className="last">Power your dreams!</div>
                </div>
                <div className="text"><div id="line-one">Stand a chance to win</div> <span id="amount">N3,000,000</span> everyday for the next 5 days</div>
            </div>
            <div style={{display: "flex", width: '100%', alignItems: 'center'}}>
                <div className="box">
                    <div className="box-title text-center w-100">🚀 How To Play</div>
                    <div className="item">1. Guess the right combination of numbers</div>
                    <div className="item">2. Win <strong>N3,000,000</strong> instantly</div>
                    {/* <ol className="m-0">
                        <li>Guess the right combination of numbers</li>
                        <li>Win <strong>N3,000,000</strong> instantly</li>
                    </ol> */}
                    <p className="box-text ml-2">Sounds unbelievable? Well, guess right & see for yourself!</p>
                    <div className="box-footer">
                        <div style={{flex: 1}}>
                            <img src={bulbIcon} alt="logo" className="img-fluid" style={{width: '22px', height: '29px'}} />
                        </div>
                        <div style={{flex: 10}}>
                        Think well before you guess. You have only 2 attempts per day and even after you wi, you can come back the next day to try for another jackpot!
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-2" style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <div className="button">
                    <span className="text-center" style={{alignItems: 'center', flex: 10}}>Play The Game</span> 
                    <span style={{flex: 1}}><img src={chevronRight} className="img-fluid" alt="" /></span>
                </div>
            </div>
        </div>
    )
}

export default Home;
