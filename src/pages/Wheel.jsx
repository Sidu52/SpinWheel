import React, { useState } from 'react';
import { BiError } from 'react-icons/bi';
import { MdDownloadDone, MdOutlineCancel } from 'react-icons/md'
import './wheel.scss';

const Wheel = () => {
    const [count, setCount] = useState(1);
    const [popup, setPopup] = useState(false);
    const [form, setForm] = useState(false)

    const letsSpin = () => {
        const x = 1024; // min value
        const y = 9999; // max value
        const deg = Math.floor(Math.random() * (x - y)) + y;
        document.getElementById('wheel').style.transform = `rotate(${deg}deg)`;
        setCount(count - 1);
        document.getElementById('spinbutton').disabled = true;
        if (count === 0) {
            setTimeout(() => {
                setForm(true);
                setPopup(true);
                setCount(1);

                const price = document.elementFromPoint(window.innerWidth / 2, ((window.innerHeight / 2) - 64)).innerText;
                document.getElementById("pricewin").innerText = price;
                document.getElementById('spinbutton').disabled = false;
            }, 5000);
        } else {
            setTimeout(() => {
                // alert('Try Again');
                setForm(true);
                setPopup(false);
                document.getElementById("pricewin").innerText = "";
                document.getElementById('spinbutton').disabled = false;
            }, 5000);
        }
    };

    return (
        <>
            <h1>Try Your Luck</h1>
            <div id="main" className="main">

                <div id="wheel" className="wheel">
                    <div>
                        <span className="span1">
                            <p>100$</p>
                        </span>
                        <span className="span2">
                            <p>30$</p>
                        </span>
                        <span className="span3">
                            <p>5$</p>
                        </span>
                        <span className="span4">
                            <p>75$</p>
                        </span>
                        <span className="span5">
                            <p>90$</p>
                        </span>
                        <span className="span6">
                            <p>10$</p>
                        </span>
                        <span className="span7">
                            <p>55$</p>
                        </span>
                        <span className="span8">
                            <p>60$</p>
                        </span>
                    </div>
                </div>
                <div className="button__container">
                    <div className="arrow arr"></div>
                    <button
                        id="spinbutton"
                        className="spin spi"
                        onClick={letsSpin}
                    >
                        SPIN
                    </button>
                </div>
                <div id='popup' className="pop__window" style={{ display: form ? "flex" : "none" }}>
                    <div className='cross' onClick={(e) => { setForm(false) }}><MdOutlineCancel /></div>
                    <div className="pop__icon">
                        {popup ?
                            <MdDownloadDone
                                style={{ color: "green", borderColor: 'green' }}
                            /> :
                            <BiError
                                style={{ color: "red", borderColor: 'red' }}
                            />}
                    </div>
                    <div className="pop__text">
                        {popup ? `You Won` : "Try again"}
                    </div>
                    <div id='pricewin' className="pop__gift"></div>
                </div>
            </div>


        </>
    );
};

export default Wheel;
