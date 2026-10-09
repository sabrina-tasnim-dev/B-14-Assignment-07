
import Image from 'next/image';

import React from 'react';
import Navlinks from './Navlinks';
import Marquee from './Marquee';
import Link from 'next/link';
import UserInfo from './UserInfo';
import {Eye, EyeSlash} from "@gravity-ui/icons";


const Navbar = () => {
const date=new Date().toLocaleDateString(
    'bn-BD',
    {
        dateStyle:'full'
    }
)


    return (
        <div className="">
            <div className="navbar bg-base-100 shadow-sm flex justify-between ">
  <div className="flex items-center gap-2">
    
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden m-5">
<Image className='w-10 h-10' height={50} width={50} 
                src={'/logo-icon.png'} alt="logo"/>
      </div>
      <div className="hidden lg:block">
        <Image className='w-10 h-10' height={50} width={50} 
                src={'/logo-icon.png'} alt="logo"/>
      </div>
     
    
    <div className=''>
        <a className="btn btn-ghost text-xl">বাজার দর</a>
    <p>{date}</p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
   
  </div>
  <div className="navbar-end gap-4">
    
    <UserInfo/>
  </div>
</div>
 <Navlinks/>
 <Marquee/>
        </div>
    );
};

export default Navbar;