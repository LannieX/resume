import Link from 'next/link'
import React from 'react'
import {FaGithub, FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'


const socials = [
   { icon: <FaGithub/>, path: "https://github.com/LannieX" },
   { icon: <FaFacebook/>, path: "https://web.facebook.com/Lannnie01?locale=th_TH" },
   { icon: <FaInstagram/>, path: "https://www.instagram.com/xlvainreviens/" },
   { icon: <FaTwitter/>, path: "https://x.com/LannnieX" },
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=> {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social