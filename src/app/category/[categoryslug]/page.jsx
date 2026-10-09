
import CategoryProducts from '@/components/CategoryProducts';
import Link from 'next/link';
import React from 'react';

const getCategoryProduct=async(categoryslug)=>{
    const res =await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${categoryslug}`)
 if (!res.ok) {
    throw new Error("Failed to fetch category products");
  }
    const data=await res.json();
return data
}

const CaregoryPage = async({params}) => {
    const{categoryslug}=await params
    console.log(categoryslug)
    
    const categoryProduct=await getCategoryProduct(categoryslug)
    console.log(categoryProduct)

    if(!Array.isArray(categoryProduct|| categoryProduct.length===0)){
        return(
            <div className="mx-auto max-w-7xl p-6">
   <h1 className="text-2xl font-bold">
          কোনো পণ্য পাওয়া যায়নি!
        </h1>
        <Link href="/" className="btn mt-4">
          হোম পেজে ফিরে যান
        </Link>
            </div>
        )
    }

    const categoryName=categoryProduct[0].NameBn;
    const categoryIcon=categoryProduct[0].categoryIcon;
    return (
        <div className='max-w-7xl mx-auto w-full'>
           <div className='flex gap-1'>
<Link className='text-xl font-bold text-blue-500' href={"/"}>Home</Link>
<span className='font-bold mt-1'>{">"}</span>
<p className='font-bold mt-1'>{categoryslug}</p>
           </div>
           <div className="mb-4 flex items-center gap-4 rounded-xl border bg-white p-5">
<span  className="rounded-xl bg-gray-100 p-3 text-3xl">{categoryIcon}</span>
           <div>
            <h1 className="text-2xl font-bold">{categoryName}</h1>
              <p className="text-sm text-gray-500">
            {categoryProduct.length}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
           </div>
           </div>
           <CategoryProducts products={categoryProduct}/>
        </div>
    );
};

export default CaregoryPage;