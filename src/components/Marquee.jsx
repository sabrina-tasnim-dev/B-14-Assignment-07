import React from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import MarqueeText from 'react-marquee-text';

const Marquee =async ()=> {
    const res=await fetch('https://openapi.programming-hero.com/api/bazardor/products')
    const data=await res.json()
    console.log(data)
    return (
        <div>
            <MarqueeText className='gap-4' direction='right' duration={10}>
    {
        data.map((item,id)=>
        <div key={id} className='mx-5 flex gap-2'>
        <div className='text-xl'>
            <span>{item.image}</span>
        <span>{item.nameBn}</span>
        </div>
      <div className='flex'>
          <span>{item.change.dir==='up'?
       (<span className='text-red-600'><FaCaretUp />{item.change.pct}%</span>):
        (<span className='text-green-500'><FaCaretDown />{Math.abs(item.change.pct)}%</span>)}
        </span>
      </div>
        </div>
       
        )
        
    }
            </MarqueeText>
        </div>
    );
};

export default Marquee;