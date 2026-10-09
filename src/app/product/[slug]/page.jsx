import Link from "next/link";
import React from "react";

const data = "https://api.api-store.workers.dev/api/bazardor/products";

const toBangla = (value) =>
  Number(value).toLocaleString("bn-BD", {
    maximumFractionDigits: 2,
  });
const ProductDetailsPage = async ({ params }) => {
  const { slug } = await params;
  const res = await fetch(data, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Product data fetch failed");
  }

  const products = await res.json();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="mx-auto max-w-5xl p-6 bg-green-50">
        <h1 className="text-2xl font-bold">পণ্যটি খুঁজে পাওয়া যায়নি</h1>
        <Link className="btn mt-4" href={"/"}>  হোম পেজে ফিরে যান</Link>
      </div>
    );
  }

  const markets=product.markets?? [];

  const lowest=markets.length?Math.min(...markets.map((market)=>market.min)):product.today;

  const highest=markets.length?Math.max(...markets.map((market)=>market.max)):product.today

  const average=markets.length?markets.reduce(
    (sum,market)=>sum+(market.min+market.max)/2,0
  )/markets.length:product.today
  
  return ( 
 <div className="min-h-screen bg-[#f0f5f0] px-4 py-6">
<div className="mx-auto max-w-5xl space-y-4">
<div className="text-sm text-gray-500">
    <Link href="/">হোম</Link>
          {" › "} 
          <span>{product.categoryNameBn}</span> {" › "}
          <span>{product.nameBn}</span>
</div>
<section className="flex flex-col justify-between gap-5 rounded-xl border border-gray-200 bg-white p-5 sm:flex-row sm:items-center">
<div className="flex items-center gap-4">
    <div className="rounded-xl bg-[#f0f5f0] p-4 text-4xl">
              {product.image}
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                {product.nameBn}
              </h1>

              <p className="text-sm text-gray-500">
                প্রতি {product.unit}
              </p>
              <p className="mt-2 text-sm">
{
    product.change.dir==="up"?"গতকালের তুলনায় আজ দাম বেড়েছে":
    product.change.dir==="down"?"গতকালের তুলনায় আজ দাম কমেছে":"আজ দাম অপরিবর্তিত"
}
              </p>
              </div>
</div >
<div  className="rounded-xl bg-[#f0f5f0] p-4 text-center sm:min-w-28">
 <p className="text-sm text-gray-500">
              আজকের দাম
            </p>
            <p  className="text-3xl font-bold">{toBangla(product.today)}</p>
<p className="text-sm text-gray-500"> টাকা /{product.unit}</p>
<p     className={`mt-1 text-xs ${
                product.change.dir === "up"
                  ? "text-red-500"
                  : product.change.dir === "down"
                  ? "text-green-600"
                  : "text-gray-500"
              }`}>{product.change.dir==="up"? "▼"
                : "—"}{" "}{toBangla(Math.abs(product.change.pct))}%</p>
</div>
</section>

<section className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
  <h2 className="mb-4 text-lg font-bold">
            দামের সারসংক্ষেপ
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-4">
 <p className="text-sm text-gray-500">সর্বনিম্ন দাম</p>
 <p className="mt-1 text-xl font-bold text-green-600">{toBangla(lowest)}</p>
  <p className="text-xs text-gray-500">
                সবচেয়ে কম দামের বাজার
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-sm text-gray-500">সর্বোচ্চ দাম</p>
               <p className="mt-1 text-xl font-bold text-red-500">
                {toBangla(highest)} টাকা
              </p>
                <p className="text-xs text-gray-500">
                সবচেয়ে বেশি দামের বাজার
              </p>
</div>
         <div className="rounded-xl border border-gray-200 p-4">
<p className="text-sm text-gray-500">গড় দাম</p>
<p  className="mt-1 text-xl font-bold text-green-600">
   {toBangla(average)} টাকা
</p>
<p  className="text-xs text-gray-500">প্রতি {product.unit}হিসেবে</p>
         </div>
          </div>

            <h2 className="mb-3 mt-6 text-lg font-bold">
            বাজারভিত্তিক আজকের দাম
          </h2>
          <div className="overflow-x-auto">
<table className="table table-zebra w-full">
<thead>
    <tr>
            <th>বাজার</th>
                  <th>বিভাগ</th>
                  <th>সর্বনিম্ন</th>
                  <th>সর্বোচ্চ</th>
                  <th>গড়</th>
    </tr>
</thead>
<tbody>
    {
       markets.map((market,ind)=>(
        <tr key={`${market.market}-${ind}`}>
            <td>{market.market}</td>
            <td>{market.division}</td>
            <td>{toBangla(market.min)}</td>
            <td>{toBangla(market.max)}</td>
            <td className="font-semibold">{toBangla((market.min+market.max)/2)}টাকা</td>
        </tr>
       ))}
</tbody>
</table>
</div>
</section>
</div>
 </div>
 )
};

export default ProductDetailsPage;
