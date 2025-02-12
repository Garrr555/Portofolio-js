'use client'

import socials from '@/data/socials'
import Link from 'next/link'

export default function Social({containerStyles, iconStyles}){
    return(
        <div className={containerStyles}>
            {socials.map((item, i) => {
                return(<Link href={item.path} key={i} className={iconStyles}>{item.icon}</Link>)
            })}
        </div>
    )
}