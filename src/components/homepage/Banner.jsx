import Image from 'next/image';
import React from 'react';

const Banner = () => {
    const date=new Date().toLocaleDateString(
    'bn-BD',
    {
        dateStyle:'full'
    }
)
    return (
        <div className='bg-green-500 max-w-7xl mx-auto'>
           <div className="hero bg-white min-h-[400px]">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between gap-10">
    <Image
      alt="banner-pic"
      src={"/bazar-hero.png"}
      className="max-w-sm rounded-lg shadow-2xl"
      height={400}
      width={500}
    />
    <div>
        <button className='text-green-700 bg-green-200 rounded-2xl p-1'>{date}</button>
      <h1 className="text-3xl font-bold">আজকের বাজারের দাম এক নজরে</h1>
      <p className="py-6">
চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন<br/>-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
      </p>
      <button className="btn btn-success">সব পণ্য দেখুন</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Banner;