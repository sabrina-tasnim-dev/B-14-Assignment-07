import Link from 'next/link';
import React from 'react';

const SingleCard = ({item}) => {
    return (
       <Link href={`/product/${item.slug}`}>
        <div>

<div className="card w-full bg-green-50 card-sm shadow-sm ">
  <div className="card-body ">
    <div className='flex items-center gap-3'>
         <div className="rounded-lg bg-gray-100 p-3 text-2xl">
          {item.image}
        </div>
        <h2 className="card-title">{item.nameBn}</h2>
    </div>
    <p>প্রতি{item.unit}</p>
    <div className="mt-4  ">
         <p className="text-xs text-gray-500">
            আজকের দাম
          </p>
          <p className='font-bold'>{item.today}টাকা</p>
     
    </div>
    <div className='text-end'>
        {item.change.dir==="up"?(
        <span className='rounded-full w-12  bg-red-50 px-2 py-1 text-xs text-red-500'>▲{item.change.pct}%</span>
    ):(<span className="rounded-full w-12 bg-green-50 px-2 py-1 text-xs text-green-600">▼{Math.abs(item.change.pct)}%</span>)}
    </div>
  </div>
</div>


        </div></Link>
    );
};

export default SingleCard;