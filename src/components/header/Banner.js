import React, { useState, useEffect } from 'react'
import '../home/home.css'
import banner1 from './images/banner1.jpg'
import banner2 from './images/banner2.jpg'
import banner3 from './images/banner3.jpg'
import banner4 from './images/banner4.jpg'
function Banner() {

    const images = [
        banner1, banner2, banner3, banner4

    ]
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrent(cur => (cur < images.length - 1 ? cur + 1 : 0));
        }, 3000);
        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div>
            <img className='home_image' src={images[current]} alt="img" />
            {current}
        </div>
    );
};


export default Banner