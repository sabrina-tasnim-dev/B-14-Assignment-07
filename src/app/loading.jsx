
export default function Loading() {
  return (
    <main className="min-h-screen animate-pulse bg-[#f0f5f0] px-4 py-6">
      <div className="mx-auto max-w-5xl space-y-8">

        {/* Hero skeleton */}
        <section className="rounded-xl bg-white p-6">
          <div className="h-4 w-28 rounded bg-gray-200" />
          <div className="mt-4 h-8 w-2/3 rounded bg-gray-200" />
          <div className="mt-3 h-4 w-1/2 rounded bg-gray-200" />
          <div className="mt-5 h-10 w-32 rounded-lg bg-gray-200" />
        </section>

        {/* Section skeletons */}
        {[1, 2, 3].map((section) => (
          <section key={section}>
            <div className="mb-4 h-6 w-40 rounded bg-gray-200" />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((card) => (
                <div
                  key={card}
                  className="rounded-xl border border-gray-200 bg-white p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-gray-200" />

                    <div className="flex-1">
                      <div className="h-4 w-3/4 rounded bg-gray-200" />
                      <div className="mt-2 h-3 w-1/2 rounded bg-gray-200" />
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <div className="h-3 w-16 rounded bg-gray-200" />
                      <div className="mt-2 h-5 w-20 rounded bg-gray-200" />
                    </div>

                    <div className="h-6 w-16 rounded-full bg-gray-200" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

      </div>
    </main>
  );
}
