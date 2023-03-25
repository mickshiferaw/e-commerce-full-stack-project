import React from 'react'
import './language.css'
import { Link } from 'react-router-dom'
// import TranslateIcon from '@mui/icons-material/Translate';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Language() {
    return (
        <div className='dropdown'>
            <div className='dropbtn'>
                <button className="icon"><LanguageIcon /></button>
                <span>EN</span>
                <ArrowDropDownIcon />
            </div>
            <div className="dropdown-content">
                <Link>Espanol-ES</Link>
                <Link>العربية - AR</Link>
                <Link>Deutsch - DE</Link>
                <Link>עברית - HE</Link>
                <Link>עברי한국어 - KO</Link>
                <Link>português - PT</Link>
                <Link>中文 (简体) - ZH</Link>
                <Link>中文 (繁體) - ZH - 翻譯</Link>


            </div>
        </div>
    )
}

export default Language