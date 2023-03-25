import React, { useState } from 'react'
import './home.css'
import Product from '../products/Products'
import Banner from '../header/Banner'

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <div className='home_image'>
                    <Banner />
                </div>

                <div className="home__row">
                    <Product
                        id="3903851"
                        title="SanDisk 128GB Ultra microSDXC UHS-I Memory Card with Adapter - 120MB/s"
                        price={61.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61jhzv9AQRL._AC_UL320_.jpg"
                    />
                    <Product
                        id="33445932"
                        title="Original HP 67XL Black High-yield Ink Cartridge | Works with HP DeskJet 1255, 2700, 4100 Series "
                        price={469.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61QGMX0Qy6L._AC_UL320_.jpg"
                    />
                    <Product
                        id="3254354343"
                        title="HP OfficeJet Pro 8025e Wireless Color All-in-One Printer with bonus 6 free months Instant Ink with HP+ (1K7K3A)"
                        price={200.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/617l6tiEeDL._AC_UL320_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="'Sceptre 24' Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black"
                        price={100.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light Correction"
                        price={160.77}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UL320_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="4903850"
                        title="CRE-8 Fitness | Push-Up Board | Work at Home Ab Workouts Equipment with Resistance"
                        price={35.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/61EY2orqjeL._AC_UL320_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Cubii Under Desk Elliptical Bundle, JR1 and Non-Slip Mat, Bike Pedal Exerciser with LCD Fitness Tracker"
                        price={310.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61m0CVA1LQL._AC_UL320_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="Bowflex SelectTech 552 Adjustable Dumbbells"
                        price={65.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71+pOdQ7iKL._AC_UL320_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="4903851"
                        title="Personal Care Product for different skin color, and age group"
                        price={150.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
                    />
                    <Product
                        id="23445932"
                        title="Original HP 67XL Black High-yield Ink Cartridge | Works with HP DeskJet 1255, 2700, 4100 Series "
                        price={53.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71dncPbANKL._AC_UL320_.jpg"
                    />
                    <Product
                        id="3254354343"
                        title="Seagate Portable 2TB External Hard Drive HDD — USB 3.0 for PC, Mac"
                        price={598.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home