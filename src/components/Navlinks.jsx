import Link from 'next/link';
import React from 'react';

const Navlinks =async () => {
    const res=await fetch('https://api.api-store.workers.dev/api/bazardor/categories')
    const data=await res.json()
   
   
    return (
        <div >
           <div className='flex flex-wrap justify-center gap-4 text-xl mb-5'>
             {
                data.map((item,i)=><Link key={i} href={`/category/${item?.slug}`}>{item.icon}{item.nameBn}</Link>)
            }
           </div>
           
        </div>
    );
};

export default Navlinks;