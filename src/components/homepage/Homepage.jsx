import React from 'react';
import Banner from './Banner';
import SingleCard from '../cards/SingleCard';
import OtherCards from '../cards/OtherCards';

const Homepage = async() => {
    const res =await fetch("https://api.api-store.workers.dev/api/bazardor/products")
    const data=await res.json()
    
    return (
        <div className='max-w-7xl mx-auto'>
           <Banner/> 
           <div className='mb-5'>
            <OtherCards/>
           </div>
           <div >
             <p className='text-xl font-bold'>সব পণ্য</p>
            <h4 className='mb-3'>মোট ৩৩টি পণ্য দেখানো হচ্ছে</h4>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
               
            {
                data.map((item)=>
                <SingleCard key={item.id} item={item}/>)
            }
            </div>
           </div>
        </div>
    );
};

export default Homepage;