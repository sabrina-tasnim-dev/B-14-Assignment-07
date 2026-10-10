import React from 'react';
import SingleCard from './SingleCard';

const OtherCards =async () => {
     const res =await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const data=await res.json()

    const riserProducts=data.filter((item)=>item.change.dir==="up").slice(0,6)
    
    const fallerProducts=data.filter((item)=>item.change.dir==="down").slice(0,6)
    
    return (
        <div>
            <section>
  <h2 className="mb-3 text-lg font-bold">
      <span className="text-red-500">▲</span>{"%"}
      আজ দাম বেড়েছে
    </h2>
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {
          riserProducts.map((item)=>(
            <SingleCard key={item.id} item={item}/>
          ))
        }
    </div>
            </section>
             <section>
                   <h2 className="mb-3 mt-4 text-lg font-bold">
      <span className="text-green-600">▼</span>{"% "}
      আজ দাম কমেছে
    </h2>
    <div  className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
{
    fallerProducts.map((item)=>(
        <SingleCard key={item.id} item={item}/>
    ))
}
    </div>
            </section>
        </div>
    );
};

export default OtherCards;