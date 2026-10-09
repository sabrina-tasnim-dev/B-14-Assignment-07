import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#f0f5f0] px-4">
      <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-12">
        
        <div className="mb-5 text-7xl">
          🛒
        </div>

        <h1 className="text-7xl font-extrabold text-green-700">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          পেজটি খুঁজে পাওয়া যায়নি!
        </h2>

        <p className="mt-3 text-gray-500">
          দুঃখিত! আপনি যে পেজটি খুঁজছেন,
          সেটি পাওয়া যাচ্ছে না অথবা সরিয়ে ফেলা হয়েছে।
        </p>

        <Link
          href="/"
          className="btn mt-7 border-none bg-green-700 text-white hover:bg-green-800"
        >
          হোম পেজে ফিরে যান
        </Link>

      </div>
    </main>
  );
}
