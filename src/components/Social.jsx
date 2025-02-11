'use client'

import Link from 'next/link'
import {FaGithub, FaYoutube, FaLinkedin, FaTwitter, FaInstagram, FaTelegram} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/>, path: '',},
    {icon: <FaYoutube/>, path: '',},
    {icon: <FaInstagram/>, path: '',},
    {icon: <FaLinkedin/>, path: '',},
    {icon: <FaTelegram/>, path: '',},
    {icon: <FaTwitter/>, path: '',},
]

export default function Social({containerStyles, iconStyles}){
    return(
        <div className={containerStyles}>
            {socials.map((item, i) => {
                return(<Link href={item.path} key={i} className={iconStyles}>{item.icon}</Link>)
            })}
        </div>
    )
}