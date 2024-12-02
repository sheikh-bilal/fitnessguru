export default function Results() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Headings */}
          <div className="mb-20">
            <h2 className="text-[2.5rem] text-gray-600 font-medium mb-4">
              COME TO A RESULT
            </h2>
            <div className="flex justify-between items-start">
              <h3 className="text-[4rem] font-black tracking-tight leading-none max-w-md">
                WITH US
              </h3>
              <p className="text-2xl text-gray-600 max-w-md">
                Ready to take the first step towards a healthier, stronger you?
              </p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="relative flex justify-between items-center px-8">
            {/* Dashed Lines */}
            <div className="absolute top-1/2 left-[25%] right-[25%] border-t-2 border-dashed border-gray-300 -translate-y-1/2" />

            {/* Icons */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-2 border-gray-200 flex items-center justify-center bg-white">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
            </div>

            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-black flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20.24 12.24a6 6 0 000-8.49l-8.48 8.48 8.48 8.48a6 6 0 000-8.47zM3.76 12.24a6 6 0 000-8.49l8.48 8.48-8.48 8.48a6 6 0 000-8.47z" />
                </svg>
              </div>
            </div>

            <div className="relative">
              <div className="w-32 h-32 rounded-full border-2 border-gray-200 flex items-center justify-center bg-white">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
            </div>

            <div className="relative">
              <div className="w-32 h-32 rounded-full border-2 border-gray-200 flex items-center justify-center bg-white">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
