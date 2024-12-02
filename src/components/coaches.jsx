import { Play } from 'lucide-react';

export default function Coaches() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side - Images */}
          <div className="flex gap-6 lg:w-1/2">
            {/* Video Card */}
            <div className="relative w-[180px] h-[360px] bg-[#FF5C2A] rounded-[32px] overflow-hidden flex-shrink-0">
              <img
                src="/placeholder.svg?height=360&width=180"
                alt="Fitness training video"
                width={180}
                height={360}
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
            </div>

            {/* Coaches Image */}
            <div className="relative flex-1">
              <div className="relative w-full h-[360px] bg-gray-100 rounded-[32px] overflow-hidden">
                <img
                  src="/placeholder.svg?height=360&width=400"
                  alt="Our coaches"
                  width={400}
                  height={360}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-[2rem] text-gray-600">
                ARE YOU LOOKING FOR A MENTOR?
              </h2>
              <h3 className="text-[4rem] font-black tracking-tight leading-none">
                COACHES
              </h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Our team of certified and experienced trainers is dedicated to
              helping you achieve your fitness goals. Whether you're looking to
              build muscle, lose weight, or improve overall health, our trainers
              will create a personalized plan to guide you every step of the
              way.
            </p>
            <button
              className="bg-[#FF5C2A] hover:bg-[#FF5C2A]/90 text-white rounded-full px-8"
              size="lg"
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
