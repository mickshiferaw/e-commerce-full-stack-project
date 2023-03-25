import React, { useEffect, useState } from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import RoomIcon from '@material-ui/icons/Room';
import Dropdown from './Dropdown';
import { useStateValue } from "../../StateProvider"
import { auth } from '../../firebase';
import Language1 from './Language1';
function Header() {

    const [cityy, setCity] = useState()
    useEffect(() => {
        const token1 = 'd5a8387d458dd4'
        const loc = async () => {
            let url = `https://ipinfo.io/json?token=${token1}`
            let response = await fetch(url);
            let data = await response.json();
            console.log(data)
            setCity(data.city);
        }
        loc()
    }, [])


    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>

            <Link className='header_link' to='/'>
                <img
                    className='header_logo'
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
            </Link>

            <div className='header_nav map_all'>
                <RoomIcon className='map-icon' />

                <div className='header_option map1'>

                    <span className='header_optionOneA mapf'>Deliver to</span>
                    <span className='header_optionTwoB mapf2'>{cityy}</span>
                </div>

            </div>

            <Dropdown />
            <div className='header_search'>
                <input className='header_searchInput' type="text" placeholder="Search Amazon" />
                <SearchIcon className='header_searchIcon' />
            </div>
            <Language1 />
            <div className='header_nav'>
                {/* onClick={handleAuth} */}
                <Link className='header_link' to={user ? '/' : 'login'}>
                    <div onClick={handleAuthentication} className='header_option' >
                        <span className='header_optionOne'>Hello, {user ? user.email : 'sign in'}</span>
                        <span className='header_optionTwo'>{user ? 'SignOut' : 'Account & Lists'}</span>
                    </div>
                </Link>
                <Link className='header_link' to={user ? '/orders' : ''}>
                    <div className='header_option' >

                        <span className='header_optionOne'>Returns</span>
                        <span className='header_optionTwo'>& Orders</span>
                    </div>
                </Link>

                <div className='header_option' >
                    <span className='header_optionOne'>Your</span>
                    <span className='header_optionTwo'>Prime</span>
                </div>

                <Link className='header_link' to={user ? '/checkout' : '/'}>
                    <div className='header_optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header_optionTwo header_basketCount'>
                            {user ? basket?.length : " "}


                        </span>

                    </div>
                </Link>
            </div>
        </div >
    )
}

export default Header