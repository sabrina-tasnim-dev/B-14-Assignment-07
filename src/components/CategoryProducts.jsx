'use client'
import React, { useMemo, useState } from 'react';
import SingleCard from './cards/SingleCard';

const CategoryProducts = ({products}) => {
    const [sortBy,setSortBy]=useState("default")

    const sortedProducts=useMemo(()=>{
        const result=[...products]

        if(sortBy ==="low-high"){
            result.sort((a,b)=>a.today-b.today)
        }
        else if(sortBy==="high-low"){
            result.sort((a,b)=>b.today-a.today)
        }
        return result;
    },[products,sortBy])
    return (
        <div className=''>
            <section>
                <div  className="mb-4 flex items-center justify-between rounded-xl border bg-white p-4">
           <span className="text-sm text-gray-500 mb-3">
          মোট {sortedProducts.length}টি পণ্য দেখানো হচ্ছে
        </span>
        <div className="flex items-center gap-2 mt-3">
 <label htmlFor="sort" className="text-sm">
            সাজান
          </label>
               <select
            id="sort"
            className="select select-bordered select-sm max-w-48"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">ডিফল্ট</option>
            <option value="low-high">দাম: কম থেকে বেশি</option>
            <option value="high-low">দাম: বেশি থেকে কম</option>
          </select>
        </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        sortedProducts.map((item)=>(
                            <SingleCard key={item.id} item={item}/>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default CategoryProducts;