
export default function CategoryLoading() {
  return (
    <main className="min-h-screen animate-pulse bg-[#f0f5f0] px-4 py-6">
      <div className="mx-auto max-w-5xl">

        {/* Breadcrumb skeleton */}
        <div className="mb-5 h-4 w-40 rounded bg-gray-200" />

        {/* Category heading skeleton */}
        <div className="mb-4 flex items-center gap-4 rounded-xl border bg-white p-5">
          <div className="h-14 w-14 rounded-xl bg-gray-200" />

          <div className="flex-1">
            <div className="h-6 w-32 rounded bg-gray-200" />
            <div className="mt-3 h-4 w-56 max-w-full rounded bg-gray-200" />
          </div>
        </div>

        {/* Sorting bar skeleton */}
        <div className="mb-4 flex justify-between rounded-xl border bg-white p-4">
          <div className="h-4 w-32 rounded bg-gray-200" />
          <div className="h-8 w-36 rounded bg-gray-200" />
        </div>

        {/* Product cards skeleton */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="rounded-xl border bg-white p-4"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-gray-200" />

                <div className="flex-1">
                  <div className="h-4 w-3/4 rounded bg-gray-200" />
                  <div className="mt-2 h-3 w-1/2 rounded bg-gray-200" />
                </div>
              </div>

              <div className="mt-5 h-4 w-20 rounded bg-gray-200" />
              <div className="mt-2 h-5 w-24 rounded bg-gray-200" />
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
